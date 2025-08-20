<script setup lang="ts">
const items = [
 'img/slide-1-min.png',
  'img/slide-2-min.png',
 'img/slide-3-min.png',
]
</script>

<template>
  <UCarousel v-slot="{ item }" :autoplay="{ delay: 2000 }" :items="items" :loop="true" :ui="{ item: 'w-full' }" class="w-full mx-auto">
    <img :src="item" class="w-full h-screen object-cover" alt="Slideshow Image">
  </UCarousel>
</template>

