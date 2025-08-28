<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>

    <div class="">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="relative pt-28" v-for="item in reguler">
          <!-- bus item -->
          <img src="/img/icon-wisata.png" alt="" class="absolute top-0 right-0 h-52" />
          <div class="p-6 pt-20 rounded-xl bg-gray-50 border border-gray-300">
            <h5 class="mb-3 text-primary">{{ item.name }}</h5>
            <ul class="flex flex-col gap-2">
              <li v-for="value in item.facility" class="flex gap-2 items-center">
                <span><icon name="ci:dot-02-s" class="text-sm" /></span>
                <span class="">{{ value }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "product",
});
const reguler = ref([
  {
    name: "Bus Reguler ",
    facility: [
      "Seat 2-3 ",
      "Alat Pemadam Kebakaran",
      "Smoking Room",
      "Window Breaker",
      "Kapasitas Bagasi Besar (Free)",
    ],
  },
  {
    name: "Bus AC Ekonomi ",
    facility: [
      "AC",
      "Seat 2-3",
      "Alat Pemadam Kebakaran",
      "Smoking Room",
      "Window Breaker",
      "Kapasitas Bagasi Besar (Free)",
    ],
  },
  {
    name: "Bus AC Bisnis ",
    facility: [
      "AC",
      "Seat 2-3",
      "Alat Pemadam Kebakaran",
      "Smoking Room",
      "Window Breaker",
      "Kapasitas Bagasi Besar (Free)",
    ],
  },
  {
    name: "Bus Eksekutif ",
    facility: [
      "AC",
      "Seat 2-2",
      "Alat Pemadam Kebakaran",
      "Smoking Room",
      "Toilet",
      "TV",
      "Window Breaker",
      "Kapasitas Bagasi Besar (Free)",
    ],
  },
  {
    name: "Bus Super Eksekutif ",
    facility: [
      "AC",
      "Seat 2-2",
      "Alat Pemadam Kebakaran",
      "Smoking Room",
      "Toilet",
      "TV",
      "Window Breaker",
      "Kapasitas Bagasi Besar (Free)",
    ],
  },
]);
</script>

<style></style>
