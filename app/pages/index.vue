<template>
  <div>
    <Slideshow />
    <ProductCategory />

    <section class="bg-gray-50 relative">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="flex flex-col gap-10 justify-center items-center">
            <div class="text-center">
              <h2>{{ $t('cta.title') }}</h2>
              <h4 class="text-gray-700">{{ $t('cta.subTitle') }}</h4>
               <UButton
          :href=" option?.acf?.tombol?.url "
          size="xl"
          class="rounded-full"
          icon="gis:route"
          :target="option?.acf?.tombol?.target"
        >
        {{ $t('cta.tombolCek') }}
        
        </UButton>

             <!--  <p> {{ $t('cta.pesanTiket') }} </p>
              <div class="flex items-center justify-center gap-4">
               <a v-for="item in option?.acf?.platform" :href="item?.link" class="" target="_blank">
            <img
              :src="item?.logo?.url"
              alt=""
              class="w-20 h-20 object-contain rounded-xl hover:shadow-2xl duration-300"
            />
          </a>
              
              </div> -->
            </div>
          </div>
          <div>
            <img :src="option?.acf?.gambar?.url" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- 
    <CariArmada />
    <CekTarif /> -->
    <Promo />
    <News />
    <Blog />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "home",
});

useSeoMeta({
  title: 'Primajasa',
  ogTitle: 'Primajasa',
  description: 'penyedia transportasi yang terpercaya di Indonesia.',
  ogDescription: 'penyedia transportasi yang terpercaya di Indonesia.'
})

const {locale} = useI18n();
const {data:option, status} = useWpOptions(locale.value);
</script>
