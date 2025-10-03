<template>

   <ElementHero
    :title="layanan?.name"
    :background="layanan?.acf?.image"
    class="pb-32"
  />
  <ProductCategory background="bg-white " />

  <div v-if="status === 'pending'"><Loading /></div>
  <div class="container">
    <div class="text-center mb-10">
      <h4 class="text-primary" v-html="layanan?.acf?.sub_judul"></h4>
      <div v-html="layanan?.description" class="flex flex-col gap-2"></div>
    </div>

    <div v-for="item in layanan?.posts" class="relative mb-10">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-10"
      >
        <!-- kiri -->
        <div class="lg:col-span-2">
          <div class="p-6 rounded-xl bg-gray-50 border border-gray-300 h-full">
            <h5 class="mb-3 text-primary">{{ item?.title }}</h5>
            <ul class="flex flex-col gap-2">
              <li
                v-for="value in item?.acf?.fasilitas"
                class="flex gap-2 items-center"
              >
                <icon :name="value.icon" class="text-xl" />
                <span>{{ value.titel }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- kanan -->
        <div class="lg:col-span-5 lg:px-6">
          <UCarousel
            v-slot="{ item: foto }"
            :items="item?.acf?.foto"
            class="w-full mx-auto"
            :ui="{ item: 'w-full' }"
            arrows
          >
            <div class="relative group rounded-lg overflow-hidden bg-primary">
              <icon
                name="bi:fullscreen-exit"
                class="absolute top-1/2 right-1/2 text-2xl translate-1/2 z-30 text-white opacity-0 group-hover:opacity-100 duration-300 cursor-pointer"
                 @click="openLightbox(foto?.url)"
              />
              <img
                :src="foto?.url"
                class="w-full h-[180px] lg:h-[340px] bg-primary object-cover rounded-lg cursor-pointer group-hover:opacity-60 duration-300 "
                @click="openLightbox(foto?.url)"
              />
            </div>
          </UCarousel>
        </div>
      </div>
    </div>
  </div>

  <!-- Lightbox -->
  <transition>
    <div
      v-if="showLightbox"
      class="fixed inset-0 bg-white/80 z-[10000] flex items-center justify-center"
      @click="closeLightbox"
    >
      <img
        :src="selectedImage"
        class="max-h-[90%] max-w-[90%] rounded-lg shadow-lg animate-jelly"
        @click.stop
      />
      <button
        class="absolute top-4 right-4 text-primary text-3xl"
        @click="closeLightbox"
      >
        ✕
      </button>
    </div>
  </transition>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "product",
});

const {locale} = useI18n();

interface TaxonomyPost {
  id: number;
  title: string;
  slug: string;
  featured_image: string | null;
}

const route = useRoute();
const {
  data: layanan,
  status,
  error,
} = useWpTaxonomy<TaxonomyPost[]>(
  "kategori-layanan", // taxonomy
  route.params.slug, // term slug
  { type: "layanan" },
  { 
    per_page: 5,
    lang:locale.value
   },

);

const showLightbox = ref(false);
const selectedImage = ref<string | null>(null);

function openLightbox(img: string) {
  selectedImage.value = img;
  showLightbox.value = true;
}

function closeLightbox() {
  showLightbox.value = false;
  selectedImage.value = null;
}
</script>
