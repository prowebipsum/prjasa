<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
      <div
        v-for="item in promos"
        :key="item"
        class="border border-brand-400 border-dashed rounded-xl overflow-hidden"
      >
        <NuxtLink :to="`/promo/${item?.slug}`">
          <img :src="item?.featured_image" :alt="item?.title" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Promo = {
  id: number;
  title: string;
  slug: string;
  featured_image: string;
};
const { data: promos, status } = useWpPosts<Promo>("promo");
</script>

<style></style>
