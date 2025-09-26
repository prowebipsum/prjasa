// composables/useActiveMenu.ts
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref, computed, watch } from 'vue'


const extractSlug = (to: string): string | null => {
  const parts = to.split('/').filter(Boolean)
  if (!parts.length) return null
  return parts[parts.length - 1] // ambil slug terakhir
}

export const useActiveMenu = () => {
  const route = useRoute()
  const { locale } = useI18n()
  const { menus } = useMenus()
  const loading = ref(false)

  const findMenu = (items: any[], path: string): any | null => {
    for (const item of items) {
      if (item.to === path) return item
      if (item.children) {
        const found = findMenu(item.children, path)
        if (found) return found
      }
    }
    return null
  }

  const activeMenu = computed(() => {
    const localizedMenus =
      menus.value?.[locale.value] || menus.value?.['id'] || []
    return findMenu(localizedMenus, route.path)
  })

  watch(
    activeMenu,
    async (menu) => {
      if (!menu) return

      // kalau background sudah URL WP, skip
      if (menu.background && menu.background.startsWith('http')) return

      const slug = extractSlug(menu.to)
      if (!slug) return

      loading.value = true
      const { data } = await useWpContent<any>(slug)

      if (data.value?.featured_image) {
        // overwrite dengan featured_image dari WP
        Object.assign(menu, { background: data.value.featured_image })
      }
      loading.value = false
    },
    { immediate: true }
  )

  return { activeMenu, loading }
}