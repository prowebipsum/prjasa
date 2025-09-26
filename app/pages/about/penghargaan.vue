<template>
  <div>
    <ElementHero
      :title="penghargaan?.title"
      :description="penghargaan?.acf?.sub_title"
      :background="penghargaan?.featured_image"
    />

    <div v-if="status === 'pending'">
      <Loading />
    </div>
    <div class="container pt-16">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
        <sidebar-menu />

        <div class="lg:col-span-4">
          <div
            v-if="penghargaan?.content"
            v-html="penghargaan.content"
            class="flex flex-col gap-2"
          ></div>
          <UTimeline
            v-model="active"
            :default-value="2"
            :items="items"
            class="w-96"
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
definePageMeta({

});

const {
  data: penghargaan,
  status,
  error,
} = useWpContent<PageContent>("penghargaan");

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
