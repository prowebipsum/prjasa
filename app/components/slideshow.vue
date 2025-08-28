<script setup lang="ts">
import { Title } from "#components";

const items = [
  {
    src: "img/slider1a.jpg",
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    src: "img/slide2.jpg",
    title: "Consectetur adipisicing elit.",
  },
];
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    :autoplay="{ delay: 4000 }"
    :items="items"
    :loop="true"
    :dots="true"
    wheel-gestures
    :ui="{
      item: 'w-full ps-0',
      dots:
        'absolute right-0 left-3 -translate-y-1/2 top-1/2 w-max h-max flex-col px-1 py-2 rounded-full bg-primary',
      dot: '',
    }"
    class="relative"
  >
    <div
      class="w-full min-h-[calc(100vh+100px)] bg-cover bg-center flex flex-col justify-end py-20"
      :style="{ backgroundImage: `url(${item.src})` }"
    >
      <div class="max-w-screen-lg mx-auto w-full px-6">
        <div class="max-w-[600px]">
          <h1 class="text-white mb-10 lg:mb-42 text-shadow-2xl">{{ item.title }}</h1>
        </div>
      </div>
    </div>
  </UCarousel>
</template>
