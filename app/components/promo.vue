<template>
  <div>
    <section class="py-20 bg-primary">
      <div class="container">
        <h3 class="text-center mb-10 text-brand-50">Promo</h3>
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
const { data: promos, status } = useWpPosts<Promo>("promo", { per_page: 3 });
</script>

<style></style>
