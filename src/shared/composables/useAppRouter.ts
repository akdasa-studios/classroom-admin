import { useRouter } from 'vue-router'

export function useAppRouter() {
  const router = useRouter()

  function go(
    route: string,
    params: any
  ) {
    router.push({ name: route, params })
  }


  function replace(
    route: string
  ) {
    router.replace({ name: route })
  }

  return { go, replace }
}
