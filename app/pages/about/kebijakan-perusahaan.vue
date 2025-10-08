<template>
     <ElementHero
      :title="kebijakan?.title"
      :description="kebijakan?.acf?.sub_title"
      :background="kebijakan?.featured_image"
    />

  <div v-if="status === 'pending'">
    <loading />
  </div>

    <div class="container py-16">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
        <sidebar-menu />

        <div class="lg:col-span-4">
          <div class="flex flex-col gap-2" v-html="kebijakan?.content"></div>
        </div>
      </div>
    </div>

</template>

<script lang="ts" setup>
definePageMeta({
 layout: "about",
});

const { data: kebijakan, status, error } = useWpContent<PageContent>(
  "kebijakan-perusahaan"
);
</script>

<style></style>
