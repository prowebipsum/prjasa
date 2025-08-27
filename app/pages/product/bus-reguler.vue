<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>

    <div class="relative pt-28">
      <img src="/img/icon-wisata.png" alt="" class="absolute top-0 left-0 h-52" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
        <div class="lg:col-span-2">
          <div class="p-6 pt-20 rounded-xl bg-gray-50 border border-gray-300">
            <h5 class="mb-3 text-primary">Bus Reguler 1</h5>
            <ul class="flex flex-col gap-2">
              <li class="flex gap-2 items-center">
                <icon name="hugeicons:airplane-seat" class="text-2xl text-primary" />
                <span class="ml-2">39/57 seat</span>
              </li>
              <li class="flex gap-2 items-center">
                <icon name="material-symbols:ac-unit" class="text-2xl text-primary" />
                <span class="ml-2">AC</span>
              </li>
              <li class="flex gap-2 items-center">
                <icon name="maki:karaoke" class="text-2xl text-primary" />
                <span class="ml-2">Karaoke</span>
              </li>
              <li class="flex gap-2 items-center">
                <icon name="mdi:smoking" class="text-2xl text-primary" />
                <span class="ml-2"> Smoking Area</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- end kiri -->
        <div class="lg:col-span-5">
          <!-- kanan -->
          <div class="p-6 pt-20 rounded-xl bg-gray-50 border border-gray-300 h-full">
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor ea laborum
              culpa dicta. Hic magni natus dolorem voluptatum laboriosam quae tempore
              deserunt corrupti, debitis, tenetur et expedita, similique vel vero.
            </p>
          </div>
          <!-- end kanan -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "product",
});

const speks = ref([]);
</script>

<style></style>
