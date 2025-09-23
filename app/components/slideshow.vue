<script setup lang="ts">
import { Title } from "#components";

const { data: sliders, status } = useWpPosts("slideshow");

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
    :items="sliders?.posts"
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
    <img
      :src="item.featured_image"
      :alt="item.title"
      class="w-full h-full object-cover hidden md:block"
    />
    <img
      :src="item?.acf?.mobile_image?.url"
      :alt="item.title"
      class="w-full h-full object-cover md:hidden"
    />
  </UCarousel>
</template>
