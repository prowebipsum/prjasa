<template>
  <div class="">
    <div class="flex flex-col gap-2" v-html="cp?.content"></div>
    <h4>History</h4>
    <UTimeline
      v-model="active"
      :items="items"
      :ui="{ title: 'text-xl', date: 'text-sm font-medium' }"
      class="max-w-xl"
      size="sm"
    >
      <template #description="{ item }">
        <div v-html="item?.description" class="" />
      </template>
    </UTimeline>
  </div>
</template>

<script lang="ts" setup>
import { avatar } from "#build/ui";

definePageMeta({
  layout: "about",
});

// const { data: cp, status, error } = useFetchApi(`/content/id/profil-perusahaan`);

const route = useRoute();

interface PageContent {
  id: number;
  title: string;
  content: string;
  featured_image: string | null;
}

const { data: cp, status, error } = useWpContent<PageContent>("profil-perusahaan");

const items = computed(() =>
  cp.value?.acf?.history.map((h) => ({
    date: h.tahun,
    title: h.titel,
    description: h.deskripsi,
  }))
);

const active = ref(0);
onMounted(() => {
  setInterval(() => {
    active.value = (active.value + 1) % history.value.length;
  }, 1000);
});
</script>

<style></style>
