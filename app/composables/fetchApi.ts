export function useFetchApi<T>(endpoint: string, options: any = {}) {
  const config = useRuntimeConfig()

  return useFetch<T>(endpoint, {
    baseURL: config.public.wpApi, // dari .env
    ...options,
    headers: {
      ...(options.headers || {}),
    },
  })
}
