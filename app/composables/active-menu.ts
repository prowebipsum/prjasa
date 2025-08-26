// composables/useActiveMenu.ts
// import { useMenus } from './useMenus'

export const useActiveMenu = () => {
  const route = useRoute()
  const { menus } = useMenus()

  // Recursive finder untuk cari child juga
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

  const activeMenu = computed(() => findMenu(menus.value, route.path))

  return {
    activeMenu
  }
}
