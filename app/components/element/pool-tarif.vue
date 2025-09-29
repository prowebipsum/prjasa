<template>
  <div class="relative lg:pt-10 mb-16">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 justify-between p-6 rounded-xl bg-light border border-brand-100 relative"
    >
      <div class="lg:col-span-2">
        <h3 class="mb-0 text-primary">
  {{ option?.acf?.judul }}
        </h3>
        <p class="text-lg">{{  option?.acf?.sub_judul }}</p>
        <UButton
          :href=" option?.acf?.tombol?.url "
          size="xl"
          class="rounded-full"
          icon="gis:route"
          :target="option?.acf?.tombol?.target"
        >
        {{  option?.acf?.tombol?.title }}
        
        </UButton>
      </div>

      <div class="lg:col-span-2 flex flex-col items-center justify-center">
        <p class="text-xl font-medium text-primary">{{ option?.acf?.pesan_tiket }}</p>
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
          src="/img/pulkam3-min.png"
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
