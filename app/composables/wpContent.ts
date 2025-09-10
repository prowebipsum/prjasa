import { useI18n } from 'vue-i18n'
import { useFetchApi } from './fetchApi'

export function useWpContent<T>(slug: string, options: any = {}) {
  const { locale } = useI18n()
  return useFetchApi<T>(`/content/${locale.value}/${slug}`, options)
}

export function useWpPosts<T>(type: string, params: Record<string, any> = {}) {
  const { locale } = useI18n()
  return useFetchApi<T>(`/posts/${locale.value}/${type}`, { params })
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

// ✅ NEW: fetch semua terms dari taxonomy (misalnya kategori-layanan)
export function useWpTerms<T>(
  taxonomy: string,
  params: Record<string, any> = {}
) {
  const { locale } = useI18n()
  return useFetchApi<T>(`/terms/${taxonomy}`, {
    params: { ...params, lang: locale.value }
  })
}



// ✅ Ambil detail 1 term berdasarkan slug
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

