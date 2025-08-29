<template>
  <div
    ref="navbar"
    class="bg-primary text-white fixed top-0 left-0 w-full z-[99999] transition-transform duration-300 flex flex-col justify-center h-16"
    :class="isVisible ? 'translate-y-0' : '-translate-y-full'"
  >
    <div class="container mx-auto w-full px-6">
      <nav class="flex items-center justify-between gap-5 relative w-full">
        <!-- Logo -->
        <nuxt-link to="/">
          <img src="/logo-white.png" alt="Logo Primajasa" class="h-12" />
        </nuxt-link>

        <!-- Hamburger -->
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
          <ul
            class="flex flex-col lg:flex-row items-start lg:items-center p-4 lg:p-0 lg:gap-4 w-full"
          >
            <li
              v-for="menu in menus"
              :key="menu.to"
              class="relative w-full lg:w-auto group"
            >
              <div
                class="flex justify-between items-center cursor-pointer"
                @click="toggleDropdown(menu.to)"
              >
                <nuxt-link
                  :to="menu.to"
                  class="block group h-max"
                  :style="{
                    height: navbarHeight + 'px',
                    lineHeight: navbarHeight + 'px',
                  }"
                >
                  <span
                    class="pt-1 pb-2 px-3 rounded-full hover:bg-brand-700 duration-200"
                  >
                    {{ menu.label }}
                    <icon
                      v-if="menu.children"
                      name="bi:chevron-down"
                      class="duration-200 text-md align-middle group-hover:rotate-180"
                    />
                  </span>
                </nuxt-link>
                <span v-if="menu.children" class="lg:hidden ml-2 text-sm">
                  {{ openDropdown === menu.to ? "▲" : "▼" }}
                </span>
              </div>

              <!-- Submenu -->
              <ul
                v-if="menu.children"
                class="flex-col gap-2 bg-brand-700 rounded-b-xl lg:w-[200px] pb-2"
                :class="[
                  openDropdown === menu.to ? 'flex' : 'hidden',
                  'lg:absolute lg:top-full lg:hidden lg:group-hover:flex',
                ]"
              >
                <li
                  v-for="child in menu.children"
                  :key="child.to"
                  class="hover:bg-primary duration-300 py-2 px-4"
                >
                  <nuxt-link :to="child.to" class="flex gap-2 items-center">
                    <img
                      v-if="child.image"
                      :src="child.image"
                      class="h-12 object-contain"
                    />
                    {{ child.label }}
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- Language switcher -->
        <div class="flex items-center gap-2">
          <UButton label="ID" variant="link" color="white" class="font-bold" />
          <UButton label="EN" variant="link" color="white" />
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UButton } from "#components";
import { onMounted, onBeforeUnmount } from "vue";

const { menus } = useMenus();

const isOpen = ref(false);
const openDropdown = ref<string | null>(null);
const isDesktop = ref(false);

const navbar = ref<HTMLElement | null>(null);
const navbarHeight = ref(0);

const updateNavbarHeight = () => {
  if (navbar.value) {
    navbarHeight.value = navbar.value.offsetHeight;
  }
};

const toggleDropdown = (menuTo: string) => {
  if (isDesktop.value) return;
  openDropdown.value = openDropdown.value === menuTo ? null : menuTo;
};

const checkDesktop = () => {
  isDesktop.value = window.innerWidth >= 1024;
};

onMounted(() => {
  checkDesktop();
  window.addEventListener("resize", checkDesktop);
});

// Scroll hide/show
const isVisible = ref(true);
let lastScrollY = 0;

const handleScroll = () => {
  const currentY = window.scrollY;
  if (currentY > lastScrollY && currentY > 80) {
    isVisible.value = false;
  } else {
    isVisible.value = true;
  }
  lastScrollY = currentY;
};

onMounted(() => {
  updateNavbarHeight();
  window.addEventListener("resize", updateNavbarHeight);
  window.addEventListener("scroll", handleScroll);
});
</script>

<style>
/* Highlight menu aktif */
.router-link-active span {
  background-color: var(--color-brand-700);
}
</style>
