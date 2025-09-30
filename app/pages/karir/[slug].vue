<template>
  <div>
    <div v-if="status === 'pending'">
      <loading />
    </div>
    <article v-else class="container mt-20">
      <h1 class="text-3xl mb-3 text-primary">{{ karir?.title }}</h1>
   
      <img
        v-if="karir?.featured_image"
        :src="karir.featured_image"
        class="mb-5 rounded-lg w-full"
      />
      <div v-html="karir?.content" class="text-justify"></div>
    </article>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "single-karir",
});
const route = useRoute();

type PageContent = {
  title: string;
  content: string;
  featured_image: string | null;
  date: string;
  tags: string[];
};
const { data: karir, status } = useWpContent<PageContent>(route.params.slug as string);

const { formatDate } = useDateFormat();
</script>

<style>
@reference '@/assets/css/main.css';
iframe {
  @apply w-full;
}
</style>
