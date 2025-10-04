<template>
  <div class="relative lg:pt-10 mb-16">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 justify-between p-6 rounded-xl bg-light border border-brand-100 relative"
    >
      <div class="lg:col-span-2">
        <h4 class="mb-0 text-primary">
  {{ $t('cta.title') }}
        </h4>
        <p class="text-lg">{{ $t('cta.subTitle') }}</p>
        <UButton
          :href=" option?.acf?.tombol?.url "
          size="xl"
          class="rounded-full"
          icon="gis:route"
          :target="option?.acf?.tombol?.target"
        >
        {{ $t('cta.tombolCek') }}
        
        </UButton>
      </div>

      <div class="lg:col-span-2 flex flex-col items-center justify-center">
        <p class="text-xl font-medium text-primary">{{ $t('cta.pesanTiket') }}</p>
        <div class="flex items-center gap-4">
          <a v-for="item in option?.acf?.platform" :href="item?.link" class="" target="_blank">
            <img
              :src="item?.logo?.url"
              alt=""
              class="w-20 h-20 object-contain rounded-xl hover:shadow-2xl duration-300"
            />
          </a>
        </div>
      </div>

      <div>
        <img
          :src="option?.acf?.gambar?.url"
          alt=""
          class="absolute -top-1/2 w-[240px] hidden lg:block"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const {locale} = useI18n();
const {data:option, status} = useWpOptions(locale.value);
</script>

<style></style>
