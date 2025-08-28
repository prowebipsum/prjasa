<template>
  <div>
    <div class="">
      <div class="text-center mb-10">
        <h4 class="text-primary">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </h4>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
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
      "Non AC",
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
