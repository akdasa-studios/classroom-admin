type QueryOptions<T> = {
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  url: string,
  queryParams?: { [key: string]: string },
  payload?: T
}

type InterceptorResult = {
  retry: boolean
}

export type Interceptor = {
  onRequest?: () => { headers: { [key: string]: string } }
  onError?: (error: FetchError) => Promise<InterceptorResult>
}

class FetchError extends Error {
  constructor(public readonly status: number, public readonly message: string) {
    super('Failed to fetch data')
  }
}

export abstract class Service {
  constructor(
    public baseUrl: string = "",
    public interceptions: Array<Interceptor> = [],
  ) {}

  protected async get<TResponse>(
    url: string,
    queryParams: { [key: string]: string } | undefined = undefined
  ): Promise<TResponse> {
    return await this.fetch({ method: 'GET', url, queryParams })
  }

  protected async post<TRequest, TResponse>(
    url: string, payload: TRequest
  ): Promise<TResponse> {
    return await this.fetch({ method: 'POST', url, payload })
  }

  protected async patch<TRequest, TResponse>(
    url: string, payload: TRequest
  ): Promise<TResponse> {
    return await this.fetch({ method: 'PATCH', url, payload })
  }

  protected async fetch<TRequest, TResponse>(
    options: QueryOptions<TRequest>
  ) {
    let trials = 3
    let shouldRetry = true

    while(shouldRetry && trials > 0) {
      trials--;
      try {
        const result = this.interceptions
          .filter(i => i.onRequest)
          .map(i => i.onRequest!()
        )
        const extraHeaders = result.reduce((acc, curr) => ({ ...acc, ...curr.headers }), {})

        const finalUrl = options.queryParams
          ? options.url + "?" + new URLSearchParams(options.queryParams)
          : options.url

        const response = await fetch(`${this.baseUrl}${finalUrl}`, {
          method: options.method,
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            ...extraHeaders,
          },
          body: options.payload ? JSON.stringify(options.payload) : undefined
        })

        if (response.ok) {
          return await response.json() as TResponse
        } else {
          throw new FetchError(response.status, 'Failed to fetch data')
        }
      } catch (error) {
        if (error instanceof FetchError) {
          const result = await Promise.all(this.interceptions
            .filter(i => i.onError)
            .map(i => i.onError!(error as FetchError)))

          shouldRetry = result.some(r => r.retry)
        }
      }
    }
    throw Error("Failed to fetch data")

  }
}

