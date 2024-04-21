import { useAsyncState } from '@vueuse/core'

export interface State<TModel, TView> {
  model: TModel|undefined
  view: TView
}

export interface Params<TModel, TView> {
  id: string|undefined,
  fetcher: (id: string) => Promise<TModel>,
  mapper: (model: TModel) => TView,
  empty: [TModel, TView]
}

export function useCrudAsyncState<TModel, TView>({
  id, fetcher, mapper, empty
}: Params<TModel, TView>) {
  const { state } = useAsyncState<State<TModel, TView>>(
    id 
      ? fetcher(id).then((model: TModel) => ({ model, view: mapper(model) }))
      : new Promise(() => empty),
    { model: empty[0], view: empty[1] }, { shallow: false }
  )

  return { state }
}
