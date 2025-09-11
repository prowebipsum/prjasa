<template>
  <div>
    <div v-if="status === 'pending'">
      <loading />
    </div>
    <article v-else class="">
      <h1>{{ news?.title }}</h1>
      <div class="flex gap-2 items-center justify-between mb-3">
        <span class="text-sm flex items-center gap-1 text-gray-500 mb-1"
          ><icon name="material-symbols-light:calendar-month-outline-rounded" />
          {{ formatDate(news?.date) }}</span
        >
        <u-badge
          v-for="item in news?.terms"
          :key="item"
          :label="item?.name"
          color="neutral"
          variant="soft"
        >
        </u-badge>
      </div>

      <img
        v-if="news?.featured_image"
        :src="news.featured_image"
        class="mb-5 rounded-lg w-full"
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

const { formatDate } = useDateFormat();
</script>

<style>
@reference '@/assets/css/main.css';
iframe {
  @apply w-full;
}
</style>
