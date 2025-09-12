import { computed } from 'vue'
import type { WpPostsResponse } from './useWpPosts'

/**
 * Helper composable untuk mengakses pagination dari response posts
 * @param data Ref hasil dari useWpPosts<T>
 */
export function useWpPagination<T>(data: Ref<WpPostsResponse<T> | null>) {
  const total = computed(() => data.value?.pagination.total ?? 0)
  const totalPages = computed(() => data.value?.pagination.total_pages ?? 1)
  const currentPage = computed(() => data.value?.pagination.current_page ?? 1)
  const perPage = computed(() => data.value?.pagination.per_page ?? 10)

  const hasNextPage = computed(() => currentPage.value < totalPages.value)
  const hasPrevPage = computed(() => currentPage.value > 1)

  return {
    total,
    totalPages,
    currentPage,
    perPage,
    hasNextPage,
    hasPrevPage,
  }
}
