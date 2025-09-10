<template>
  <div class="text-center mb-10">
    <h4 class="text-primary" v-html="layanan?.acf?.sub_judul"></h4>
    <div v-html="layanan?.description" class="flex flex-col gap-2"></div>
  </div>

  <div v-for="item in layanan?.posts" class="relative mb-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-10">
      <div class="lg:col-span-2">
        <!-- kiri -->
        <!-- bus item -->

        <div class="p-6 rounded-xl bg-gray-50 border border-gray-300 h-full">
          <h5 class="mb-3 text-primary">{{ item?.title }}</h5>
          <ul class="flex flex-col gap-2">
            <li v-for="value in item?.acf?.fasilitas" class="flex gap-2 items-center">
              <span class="leading-none"
                ><icon :name="value.icon" class="text-xl"
              /></span>
              <span class="">{{ value.titel }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="lg:col-span-5 lg:px-6">
        <!-- kanan -->
        <UCarousel
          v-slot="{ item }"
          :items="item?.acf?.foto"
          class="w-full mx-auto"
          :ui="{ item: 'basis-1/2' }"
          arrows
        >
          <img
            :src="item?.url"
            class="w-full h-[180px] lg:h-[340px] object-cover rounded-lg"
          />
        </UCarousel>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "product",
});

interface TaxonomyPost {
  id: number;
  title: string;
  slug: string;
  featured_image: string | null;
}

const route = useRoute();
const { data: layanan, status } = useWpTaxonomy<TaxonomyPost[]>(
  "kategori-layanan", // taxonomy
  route.params.slug, // term slug
  { type: "layanan" },
  { per_page: 5 }
);
</script>
