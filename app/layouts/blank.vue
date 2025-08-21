<template>
  <div>
    <div class="py-2 px-6 lg:px-10 border-b border-gray-300">
      <nuxt-link to="/component">
        <h4>Component</h4>
      </nuxt-link>
      <ul class="flex items-center gap-5 flex-wrap">
        <li v-for="menu in menus" :key="menu.to">
          <nuxt-link :to="menu.to" :class="{ 'text-primary': $route.path === menu.to }"
            >{{ menu.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div class="p-6 lg:p-10">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const menus = ref([
  {
    name: "Color",
    to: "/component/color",
  },
  {
    name: "Typography",
    to: "/component/typography",
  },
  {
    name: "Card",
    to: "/component/card",
  },
]);
</script>

<style></style>
