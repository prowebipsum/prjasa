<template>
  <div>
    <div v-if="status === 'loading'">Loading...</div>
    <article v-else class="">
      <h1>{{ news?.title }}</h1>
      <span class="text-sm flex items-center gap-1 text-gray-500 mb-1"
        ><icon name="material-symbols-light:calendar-month-outline-rounded" />
        {{ news?.date }}</span
      >
      <img
        v-if="news?.featured_image"
        :src="news.featured_image"
        class="mb-5 rounded-lg"
      />
      <div v-html="news?.content"></div>
    </article>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "single-post",
});
const route = useRoute();

type PageContent = {
  title: string;
  content: string;
  featured_image: string | null;
  date: string;
  tags: string[];
};
const { data: news, status } = useWpContent<PageContent>(route.params.slug as string);
</script>

<style></style>
