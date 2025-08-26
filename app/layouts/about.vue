<template>
  <div class="min-h-screen pt-[60px]">
    <navbar />
    <ElementHero
      :title="activeMenu.label"
      :description="activeMenu.description"
      background="bg-gray-50"
    />
    <div class="container py-20">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
        <div class="sidebar">
          <ul class="lg:flex flex-col gap-2 hidden sticky top-20">
            <li v-for="smenu in sidebarMenu" :key="smenu.to">
              <nuxt-link
                :to="smenu.to"
                :class="{ 'text-primary font-medium': $route.path === smenu.to }"
                >{{ smenu.label }}</nuxt-link
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

<script lang="ts" setup>
const { menus } = useMenus();
const { activeMenu } = useActiveMenu();

const sidebarMenu = computed(() => menus.value[1].children);
</script>

<style></style>
