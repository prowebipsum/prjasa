<template>
  <div>
    <div v-if="status === 'loading'">Loading...</div>
    <div
      v-if="penghargaan?.content"
      v-html="penghargaan.content"
      class="flex flex-col gap-2"
    ></div>
    <UTimeline v-model="active" :default-value="2" :items="items" class="w-96">
      <template #description="{ item }">
        <div v-html="item?.description" class="" />
      </template>
    </UTimeline>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "about",
});

const { data: penghargaan, status, error } = useWpContent<PageContent>("penghargaan");

const items = computed(() =>
  penghargaan.value?.acf?.penghargaan.map((h) => ({
    date: h.tahun,
    title: h.titel,
    description: h.deskripsi,
  }))
);

const active = ref(0);

onMounted(() => {
  setInterval(() => {
    active.value = (active.value + 1) % penghargaan.value.length;
  }, 1000);
});
</script>

<style></style>
