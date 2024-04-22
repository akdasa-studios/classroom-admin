import { useAsyncState } from '@vueuse/core'

interface State<TModel, TView> {
  view:  TView[]
}

interface ListAsyncStateParams<TModel, TView> {
  fetcher: () => Promise<readonly TModel[]>,
  mapper: (model: TModel) => TView,
}

export function useListAsyncState<TModel, TView>({
  fetcher, mapper
}: ListAsyncStateParams<TModel, TView>) {
  const { state } = useAsyncState<State<TModel, TView>>(
    fetcher().then(
      (models: readonly TModel[]) => ({ 
        view: models.map(x => mapper(x))
      })),
    {view:[]}, { shallow: true }
  )

  return { state }
}
