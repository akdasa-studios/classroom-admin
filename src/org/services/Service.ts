export abstract class Service {
  protected async get<TResponse>(url: string) {
    const response = await fetch(url, {
      headers: { 'accept': 'application/json' }
    })
    if (response.ok) {
      return await response.json() as TResponse
    } else {
      throw Error('Failed to fetch data')
    }
  }

  protected async post<TRequest, TResponse>(url: string, payload: TRequest) {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    if (response.ok) {
      return await response.json() as TResponse
    } else {
      throw Error('Failed to fetch data')
    }
  }

  protected async patch<TRequest, TResponse>(url: string, payload: TRequest) {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: { 
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    if (response.ok) {
      return await response.json() as TResponse
    } else {
      throw Error('Failed to fetch data')
    }
  }
}

