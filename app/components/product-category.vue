<template>
  <div>
    <section class="bg-gray-50 -mb-20 pb-10" :class="background">
      <!-- kategori -->
      <div class="max-w-screen-lg mx-auto px-6">
        <div
          class="featured grid grid-cols-2 lg:grid-cols-4 bg-white px-5 rounded-2xl shadow-xl divide-y-1 lg:divide-x-1 divide-gray-200 relative -top-20 w-full mx-auto"
        >
          <div
            v-for="item in layanan?.terms"
            :key="item?.to"
            class="featured-item flex flex-col items-center justify-end gap-2 p-5 text-center group"
          >
            <nuxt-link
              :to="`/product/${item?.slug}`"
              :class="{ 'router-link-active': $route.params.slug === item?.slug }"
            >
              <img
                :src="item?.acf?.icon"
                alt=""
                class="group-hover:scale-110 transition-all duration-300 ease-in-out h-20 w-auto"
              />
              <span>{{ item?.name }}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  background: {
    type: String,
    default: "bg-gray-50",
  },
});
const productCategory = ref([
  { name: "Bus Reguler", image: "/img/icon-wisata.png" },
  { name: "Moda", image: "/img/icon-moda.png" },
  { name: "Shuttle", image: "/img/icon-shutle.png" },
  { name: "Pariwisata", image: "/img/icon-wisata.png" },
]);

const { menus } = useMenus();
const productMenu = computed(() => menus.value[2]?.children);

// Ambil semua kategori-layanan sesuai bahasa aktif
const { data: layanan, pending, error } = useWpTerms<any>("kategori-layanan");
</script>

<style scoped>
.featured:hover .featured-item {
  opacity: 0.5;
}
.featured:hover .featured-item:hover {
  opacity: 1;
  transition: all 0.35 ease-in;
}
.featured-item .router-link-active span {
  background-color: transparent;
  font-weight: bold;
  color: var(--color-primary);
}
</style>
