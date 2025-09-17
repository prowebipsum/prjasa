export function useFetchApi<T>(endpoint: string, options: any = {}) {
  const config = useRuntimeConfig()
  const controller = new AbortController()

  // bikin timeout manual
  const timeout = setTimeout(() => {
    controller.abort()
  }, 10000) // 10 detik

  const fetchResult = useFetch<T>(endpoint, {
    baseURL: config.public.wpApi,
    ...options,
    headers: {
      ...(options.headers || {}),
    },
    signal: controller.signal,
  })

  onUnmounted(() => {
    clearTimeout(timeout)
    controller.abort()
  })

  return fetchResult
}
