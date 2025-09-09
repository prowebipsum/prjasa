import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

export const useActiveMenu = () => {
  const route = useRoute()
  const { locale } = useI18n()
  const { menus } = useMenus()

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
    // fallback: kalau bahasa aktif tidak lengkap, pakai 'id'
    const localizedMenus =
      menus.value?.[locale.value] || menus.value?.['id'] || []
    return findMenu(localizedMenus, route.path)
  })

  return { activeMenu }
}
