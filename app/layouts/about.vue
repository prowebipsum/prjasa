
<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { menus } = useMenus();
const { activeMenu, background } = useActiveMenu();
const { locale } = useI18n();

// abi data banner
const route = useRoute();
const hero = computed(() => route.meta.hero || {})
// Normalisasi -> selalu array
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
onMounted(() => {
  setTimeout(() => {
  activeMenu.value?.background
}, 1000);
})

</script>

<template>
  <div class="min-h-screen pt-[60px]">
    <navbar />
  
    <div class="container pt-20">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
        <div class="sidebar">
          <ul class="lg:flex flex-col gap-2 hidden sticky top-20">
            <li v-for="smenu in sidebarMenu" :key="smenu?.to">
              <nuxt-link
                :to="smenu?.to"
                :class="{ 'text-primary font-medium': $route.path === smenu.to }"
                >{{ smenu?.label }}</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="lg:col-span-4">
          <slot />
        </div>
      </div>
      <ElementPoolTarif class="mt-10" />
    </div>
    <Footer />
  </div>
</template>


<style></style>
