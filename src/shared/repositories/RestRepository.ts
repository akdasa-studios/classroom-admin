import type { Aggregate, AnyIdentity } from '@akd-studios/framework/domain'
import { ResultSet, type Query, type QueryOptions, type Repository } from '@akd-studios/framework/persistence'

export type Mapper<TSource, TDestination> = (source: TSource) => TDestination

export class RestRepository<
  TAggregate extends Aggregate<AnyIdentity>,
  TScheme
> implements Repository<TAggregate> {

  constructor(
    private url: string,
    private serializer: Mapper<TAggregate, TScheme>,
    private deserializer: Mapper<TScheme, TAggregate>,
  ) {

  }

  async all(
    options?: QueryOptions | undefined
  ): Promise<ResultSet<TAggregate>> {
    const entities = await this.fetchData('')
    return new ResultSet(entities, { start: 0, count: entities.length })
  }

  async save(
    entity: TAggregate
  ): Promise<void> {
    await fetch(this.url, {
      method: 'POST',
      headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.serializer(entity))
    })
  }

  async get(
    id: TAggregate['id']
  ): Promise<TAggregate> {
    const response = await fetch(this.url + '/' + id.value, {
      headers: {
        'accept': 'application/json'
      }
    })
    if (response.ok) {
      return this.deserializer(await response.json())
    }
    return undefined
  }

  exists(
    id: TAggregate['id']
  ): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  find(
    query: Query<TAggregate>,
    options?: QueryOptions | undefined
  ): Promise<ResultSet<TAggregate>> {
    throw new Error('Method not implemented.')
  }

  delete(
    id: TAggregate['id']
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }

  private async fetchData(
    url: string
  ): Promise<TAggregate[]> {
    const response = await fetch(this.url + url, {
      headers: {
        'accept': 'application/json'
      }
    })
    if (response.ok) {
      const data = (await response.json()).data as TScheme[]
      return data.map(x => this.deserializer(x))
    }
    return []
  }
}