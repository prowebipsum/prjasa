<script setup lang="ts">
const items = ["img/slider1a.jpg", "img/slide2.jpg"];
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
    class="w-full mx-auto"
  >
    <img :src="item" class="w-full h-screen object-cover" alt="Slideshow Image" />
  </UCarousel>
</template>
