<template>
  <div>
    <section class="py-20 bg-primary">
      <div class="container">
        <h3 class="text-center mb-10 text-brand-50">Program Spesial Primajasa</h3>
        <div class="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 ">
          <div
            v-for="item in promos?.posts"
            :key="item"
            class="border border-brand-400 border-dashed rounded-xl overflow-hidden"
          >
            <NuxtLink :to="localPath(`/promo/${item?.slug}`)">
              <img :src="item?.featured_image" :alt="item?.title" />
            </NuxtLink>
          </div>
        </div>
      <UCarousel
  v-slot="{ item }"
  :items="promos?.posts"
  loop
  drag
  wheel-gestures
  snap="center"
  :ui="{ item: 'basis-[80%] shrink-0 px-2' }"
  class="overflow-visible lg:hidden"
>
  <NuxtLink :to="localPath(`/promo/${item?.slug}`)" class="block">
    <img
      :src="item?.featured_image"
      :alt="item?.title"
      class="w-full rounded-xl border border-dashed border-brand-400"
    />
  </NuxtLink>
</UCarousel>

        <div class="flex justify-center items-center">
          <UButton
            to="/promo"
            size="xl"
            color="neutral"
            variant="soft"
            class="rounded-full px-6 mt-10 mx-auto"
            >Selengkapnya</UButton
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
type Promo = {
  id: number;
  title: string;
  slug: string;
  featured_image: string;
};
const { data: promos, status } = useWpPosts<Promo>("promo", {
  per_page: 3,
  page: 1,
});

const localPath = useLocalePath();
</script>

<style></style>
