<template>
  <div class="">
    <ElementHero
      :title="cp?.title"
      :description="cp?.acf?.sub_title"
      :background="cp?.featured_image"
    />
    <div v-if="status === 'pending'">
      <loading />
    </div>
    <div class="container pt-16">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
        <sidebar-menu />
        <div class="lg:col-span-4">
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
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { avatar } from "#build/ui";

useSeoMeta({
  title: 'Profil Perusahaan',
  ogTitle: 'Profil Perusahaan',
  description: 'Primajasa salah satu perusahaan penyedia transportasi yang terpercaya di Indonesia.',
  ogDescription: 'Primajasa salah satu perusahaan penyedia transportasi yang terpercaya di Indonesia.'
})

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

const {
  data: cp,
  status,
  error,
} = useWpContent<PageContent>("profil-perusahaan");

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
