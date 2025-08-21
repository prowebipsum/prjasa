<template>
  <div>
    <Slideshow />

    <!-- kategori -->

    <div class="max-w-screen-lg mx-auto">
      <div
        class="grid grid-cols-2 lg:grid-cols-5 bg-white px-5 rounded-2xl shadow-2xl divide-y-1 lg:divide-x-1 divide-gray-200 relative -top-20 max-w-max mx-auto"
      >
        <div
          v-for="item in productCategory"
          :key="item.name"
          class="flex flex-col items-center justify-end gap-2 p-5 text-center group"
        >
          <img
            :src="item.image"
            alt=""
            class="group-hover:scale-110 transition-all duration-300 ease-in-out"
          />
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>

    <CekTarif />
    <News />
    <Blog />
  </div>
</template>

<script setup lang="ts">
const productCategory = ref([
  { name: "Bus Reguler", image: "/img/akap.png" },
  { name: "Red White Star", image: "/img/wisata.png" },
  { name: "Moda", image: "/img/moda.png" },
  { name: "Taxi", image: "/img/taxi.png" },
  { name: "Shuttle", image: "/img/shutle.png" },
]);
</script>
