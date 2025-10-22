<script setup lang="ts">
import { useRoute } from "vue-router";

interface PageContent {
  id: number;
  title: string;
  content: string;
  featured_image: string | null;
}

const route = useRoute();
const { data, status } = useWpContent<PageContent>(route.params.slug as string);
</script>

<template>
  <div>
    <div v-if="status === 'pending'">
      <loading />
    </div>
    <article v-else>
      <div class="container mt-10">
        <h1>{{ data?.title }}</h1>
      <img v-if="data?.featured_image" :src="data.featured_image" />
        <div v-html="data?.content"></div>
      </div>
      
    </article>
  </div>
</template>
