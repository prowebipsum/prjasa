<template>

      <div class="sidebar">
          <ul class="menu lg:flex flex-col gap-2 hidden sticky top-20">
            <li v-for="smenu in sidebarMenu" :key="smenu?.to">
              <nuxt-link
                :to="smenu?.to"
                :class="{ 'text-primary font-medium': $route.path === smenu.to }"
                >{{ smenu?.label }}</nuxt-link
              >
            </li>
          </ul>
        </div>
 
</template>

<script lang="ts" setup>
const { menus } = useMenus();
const { locale } = useI18n();
const { activeMenu } = useActiveMenu();
const menusList = computed(() => {
  if (Array.isArray(menus.value)) {
    return menus.value;
  }

  // Ambil array untuk locale aktif
  const localized = menus.value?.[locale.value];
  const fallback = menus.value?.["id"] || [];

  // Kalau localized ada → gabungkan dengan fallback
  if (localized && Array.isArray(localized)) {
    return localized.length > 0 ? localized : fallback;
  }

  return fallback;
});
// Sidebar: cari parent menu dari activeMenu
const sidebarMenu = computed(() => {
  const parent = menusList.value.find((menu) =>
    menu.children?.some((child) => child.to === activeMenu.value?.to)
  );
  return parent?.children || [];
});
</script>

<style>

</style>