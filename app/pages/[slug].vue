<script setup lang="ts">
import { useRoute } from "vue-router";

interface PageContent {
  id: number;
  title: string;
  content: string;
  featured_image: string | null;
}

const route = useRoute();
const { data, pending } = useWpContent<PageContent>(route.params.slug as string);
</script>

<template>
  <div>
    <div v-if="pending">Loading...</div>
    <article v-else>
      <h1>{{ data?.title }}</h1>
      <img v-if="data?.featured_image" :src="data.featured_image" />
      <div v-html="data?.content"></div>
    </article>
  </div>
</template>
