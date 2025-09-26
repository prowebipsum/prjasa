// composables/useFetchApi.ts
export function useFetchApi<T>(
  endpoint: string,
  options: any = {},
  timeoutMs: number = 30000 // default 30 detik
) {
  const config = useRuntimeConfig()

  return useFetch<T>(endpoint, {
    baseURL: config.public.wpApi,
    timeout: timeoutMs, // gunakan ofetch timeout bawaan
    headers: {
      ...(options.headers || {}),
    },
    ...options,
  })
}
