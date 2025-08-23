<template>
  <div>
    <section class="bg-gray-50">
      <!-- kategori -->
      <div class="max-w-screen-lg mx-auto px-6">
        <div
          class="featured grid grid-cols-2 lg:grid-cols-4 bg-white px-5 rounded-2xl shadow-2xl divide-y-1 lg:divide-x-1 divide-gray-200 relative -top-20 w-full mx-auto"
        >
          <div
            v-for="item in productCategory"
            :key="item.name"
            class="featured-item flex flex-col items-center justify-end gap-2 p-5 text-center group"
          >
            <img
              :src="item.image"
              alt=""
              class="group-hover:scale-110 transition-all duration-300 ease-in-out h-20 w-auto"
            />
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const productCategory = ref([
  { name: "Bus Reguler", image: "/img/bus-cartoon.webp" },
  { name: "Moda", image: "/img/moda.png" },
  { name: "Shuttle", image: "/img/shutle.png" },
  { name: "Pariwisata", image: "/img/wisata.png" },
]);
</script>

<style scoped>
.featured:hover .featured-item {
  opacity: 0.5;
}
.featured:hover .featured-item:hover {
  opacity: 1;
  transition: all 0.35 ease-in;
}
</style>
