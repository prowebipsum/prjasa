<template>
  <div ref="navbar" class="bg-primary text-white py-2 relative">
    <div class="container">
      <nav class="flex items-center justify-between gap-5 relative">
        <!-- Logo -->
        <nuxt-link to="/">
          <img src="/logo-white.png" alt="Logo Primajasa" class="h-12" />
        </nuxt-link>

        <!-- Hamburger Button -->
        <button
          @click="isOpen = !isOpen"
          class="lg:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span class="w-6 h-0.5 bg-white"></span>
          <span class="w-6 h-0.5 bg-white"></span>
          <span class="w-6 h-0.5 bg-white"></span>
        </button>

        <!-- Menu -->
        <div
          class="absolute lg:static left-0 w-full lg:w-auto bg-primary lg:bg-transparent transition-all duration-300 z-50"
          :class="[
            isOpen ? 'top-full opacity-100 visible' : 'top-[-500px] opacity-0 invisible',
            'lg:top-auto lg:opacity-100 lg:visible',
          ]"
        >
          <ul class="flex flex-col lg:flex-row items-start lg:items-center p-4 lg:p-0">
            <li
              v-for="menu in menus"
              :key="menu.to"
              class="relative w-full lg:w-auto group"
            >
              <!-- Main link -->
              <div
                class="flex justify-between items-center cursor-pointer hover:text-secondary"
                @click="toggleDropdown(menu.to)"
              >
                <nuxt-link
                  :to="menu.to"
                  class="block py-1 px-3 rounded-full hover:bg-brand-900 duration-200 group"
                >
                  {{ menu.label }}
                  <icon
                    v-if="menu.children"
                    name="bi:chevron-down"
                    class="duration-200 text-md align-middle group-hover:rotate-180 duration-200"
                  >
                  </icon>
                </nuxt-link>
                <!-- Dropdown arrow for mobile -->
                <span v-if="menu.children" class="lg:hidden ml-2 text-sm">
                  {{ openDropdown === menu.to ? "▲" : "▼" }}
                </span>
              </div>

              <!-- Submenu -->
              <ul
                v-if="menu.children"
                class="flex-col gap-2 bg-primary rounded-b-xl lg:w-[180px] p-4"
                :class="[
                  // Mobile: buka dengan klik
                  openDropdown === menu.to ? 'flex' : 'hidden',
                  // Desktop: buka dengan hover
                  'lg:absolute lg:top-full lg:hidden lg:group-hover:flex',
                ]"
              >
                <li v-for="child in menu.children" :key="child.to">
                  <nuxt-link :to="child.to" class="hover:text-secondary block">
                    {{ child.label }}
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from "vue";

const { menus } = useMenus();

const isOpen = ref(false);
const openDropdown = ref<string | null>(null);
const isDesktop = ref(false);

const toggleDropdown = (menuTo: string) => {
  if (isDesktop.value) return; // desktop tetap hover
  openDropdown.value = openDropdown.value === menuTo ? null : menuTo;
};

const checkDesktop = () => {
  isDesktop.value = window.innerWidth >= 1024; // lg breakpoint
};

onMounted(() => {
  checkDesktop();
  window.addEventListener("resize", checkDesktop);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkDesktop);
});
</script>
