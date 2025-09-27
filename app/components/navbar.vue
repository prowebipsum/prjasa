<template>
  <div>
    <div
      class="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-brand-900 via-primary to-brand-950 z-[10000] overflow-y-auto"
      :style="{ width: `${progress}%` }"
    ></div>

    <div
      ref="navbar"
      class="bg-white text-primary border-b border-gray-300 text-sm fixed top-0 left-0 w-full z-[9999] transition-transform duration-300 flex flex-col justify-center h-16"
      :class="isVisible ? 'translate-y-0' : '-translate-y-full'"
    >
      <div class="container mx-auto w-full px-6">
        <nav class="flex items-center justify-between gap-5 relative w-full">
          <!-- Logo -->
          <nuxt-link to="/">
            <img
              src="/logo.png"
              alt="Logo Primajasa"
              class="h-12 w-full object-contain"
            />
          </nuxt-link>     

          <!-- Menu -->
          <div
            class="absolute lg:static left-0 w-full lg:w-auto bg-white lg:bg-transparent  transition-all duration-300 z-50"
            :class="[
              isOpen
                ? 'top-full opacity-100 visible'
                : 'top-[-500px] opacity-0 invisible',
              'lg:top-auto lg:opacity-100 lg:visible',
            ]"
          >
            <ul
              class="flex flex-col lg:flex-row items-start lg:items-center p-4 lg:p-0 lg:gap-4 w-full"
            >
              <li
                v-for="menu in menusList"
                :key="menu.id"
                class="relative w-full lg:w-auto group"
              >
                <div class="flex justify-between items-center" :style="{
                      height: navbarHeight + 'px',
                    }" @click="closeMenu(menu.to)">
                  <!-- Parent link -->
                  <nuxt-link
                    :to="localPath(menu.to)"
                    class="block group"
                  >
                    <span
                      class="px-3 py-2 rounded-full hover:bg-brand-100 duration-200 flex items-center gap-1 h-auto"
                    >
                      {{ menu.label }}
                      <icon
                        v-if="menu.children"
                        name="bi:chevron-down"
                        class="duration-200 text-md align-middle lg:group-hover:rotate-180 lg:block hidden"
                      />
                    </span>
                  </nuxt-link>

                  <!-- Tombol toggle khusus mobile -->
                  <button
                    v-if="menu.children"
                    class="lg:hidden ml-2 text-sm p-2 bg-brand-50 rounded-md flex items-center justify-center"
                    @click.prevent="toggleDropdown(menu.id)"
                  >
                    <icon
                      :name="
                        openDropdown === menu.id ? 'bi:chevron-up' : 'bi:chevron-down'
                      "
                      class="duration-200"
                    />
                  </button>
                </div>

                <!-- Submenu -->
                <ul
                  v-if="menu.children"
                  class="flex-col gap-2 bg-brand-50 lg:rounded-b-xl lg:border border-gray-300 lg:border-b lg:border-x lg:w-[200px] pb-2"
                  :class="[
                    isDesktop
                      ? 'lg:absolute lg:top-full lg:hidden lg:group-hover:flex'
                      : openDropdown === menu.id
                      ? 'flex'
                      : 'hidden',
                  ]"
                >
                  <li
                    v-for="child in menu.children"
                    :key="child.id"
                    class="hover:bg-primary hover:text-white duration-300 py-2 px-4"
                    @click="closeMenu(child.to)"
                  >
                    <nuxt-link :to="localPath(child.to)" class="flex gap-2 items-center">
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

          <div class="flex items-center gap-2">
 <!-- Language switcher -->
         
          <div class="flex gap-2 items-center">
            <button
              class="rounded-full w-8 h-8"
              @click="setLocale('id')"
              :class="{ ' text-white bg-primary/80 ': locale === 'id' }"
            >
              ID
            </button>
            |
            <button
              class="rounded-full w-8 h-8"
              @click="setLocale('en')"
              :class="{ ' text-white bg-primary/80 ': locale === 'en' }"
            >
              EN
            </button>
          </div>

             <!-- Hamburger -->
          <button
            @click="isOpen = !isOpen"
            class="lg:hidden flex flex-col gap-1"
            aria-label="Toggle menu"
          >
            <span class="w-6 h-0.5 bg-primary"></span>
            <span class="w-6 h-0.5 bg-primary"></span>
            <span class="w-6 h-0.5 bg-primary"></span>
          </button>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale, setLocale } = useI18n();
const localPath = useLocalePath();
const { menus } = useMenus();

const isOpen = ref(false);
const openDropdown = ref<string | null>(null); // simpan id parent yg terbuka
const isDesktop = ref(false);

const navbar = ref<HTMLElement | null>(null);
const navbarHeight = ref(0);

const updateNavbarHeight = () => {
  if (navbar.value) {
    navbarHeight.value = navbar.value.offsetHeight;
  }
};

// ✅ toggle pakai id
const toggleDropdown = (menuId: string) => {
  if (isDesktop.value) return; // di desktop tetap pakai hover
  openDropdown.value = openDropdown.value === menuId ? null : menuId;
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

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkDesktop);
  window.removeEventListener("resize", updateNavbarHeight);
  window.removeEventListener("scroll", handleScroll);
});

// loading indicator
const { progress } = useLoadingIndicator({
  duration: 2000,
  throttle: 200,
  estimatedProgress: (duration, elapsed) =>
    (2 / Math.PI) * 100 * Math.atan(((elapsed / duration) * 100) / 50),
});

// menusList sesuai locale
const menusList = computed(() => {
  if (Array.isArray(menus.value)) return menus.value;
  return menus.value?.[locale.value] || menus.value?.["id"] || [];
});


const closeMenu = (path: string) => {
  setTimeout(() => {
    router.go(path);
    isOpen.value = false;
    console.log(path);
  }, 100);
};  
</script>

<style>
/* Highlight menu aktif */
.router-link-active span {
  background-color: var(--color-brand-100);
}
</style>
