// composables/useFetchApi.ts
export function useFetchApi<T>(
  endpoint: string,
  options: any = {},
  timeoutMs: number = 30000 // default 30 detik
) {
  const config = useRuntimeConfig()

  // gunakan AbortController manual hanya jika perlu
  const controller = new AbortController()
  const timeout = setTimeout(() => {
    controller.abort()
  }, timeoutMs)

  const fetchResult = useFetch<T>(endpoint, {
    baseURL: config.public.wpApi,
    ...options,
    headers: {
      ...(options.headers || {}),
    },
    signal: controller.signal,
    // ofetch juga support timeout langsung
    timeout: timeoutMs,
  })

  onUnmounted(() => {
    clearTimeout(timeout)
    controller.abort()
  })

  return fetchResult
}
