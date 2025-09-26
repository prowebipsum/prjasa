export function useWpContent<T>(slug: string, options: any = {}) {
  const { locale } = useI18n()
  return useFetchApi<T>(`/content/${locale.value}/${slug}`, options)
}

export function useWpPosts<T>(
  type: string,
  params: Record<string, any> = {}
) {
  const { locale } = useI18n()
  return useFetchApi<WpPostsResponse<T>>(
    `/posts/${locale.value}/${type}`,
    { params }
  )
}

export function useWpOptions<T>() {
  const { locale } = useI18n()
  return useFetchApi<T>(`/options/${locale.value}`)
}

export function useWpTaxonomy<T>(
  taxonomy: string,
  term: string,
  params: Record<string, any> = {}
) {
  const { locale } = useI18n()
  return useFetchApi<T>(`/taxonomy/${taxonomy}/${term}`, {
    params: { ...params, lang: locale.value }
  })
}

export function useWpTerms<T>(
  taxonomy: string,
  params: Record<string, any> = {}
) {
  const { locale } = useI18n()
  return useFetchApi<T>(`/terms/${taxonomy}`, {
    params: { ...params, lang: locale.value }
  })
}

export function useWpTerm<T>(
  taxonomy: string,
  slug: string,
  params: Record<string, any> = {}
) {
  const { locale } = useI18n()
  return useFetchApi<T>(`/terms/${taxonomy}/${slug}`, {
    params: { ...params, lang: locale.value }
  })
}
