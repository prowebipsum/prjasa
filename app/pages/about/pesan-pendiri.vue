<template>
  <div>
    <ElementHero
      :title="pendiri?.title"
      :description="pendiri?.acf?.sub_title"
      :background="pendiri?.featured_image"
    />
    <div v-if="status === 'pending'"><Loading /></div>
    <div class="container pt-16">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
        <sidebar-menu />
        <div class="lg:col-span-4">
          <div class="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-10">
            <div class="lg:col-span-2">
              <img
                :src="pendiri?.acf?.photo?.url"
                alt=""
                class="rounded-xl shadow"
              />
            </div>
            <div
              class="lg:col-span-4 flex flex-col gap-2"
              v-html="pendiri?.content"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "about",
});

interface PageContent {
  id: number;
  title: string;
  content: string;
  photo: string | null;
}

const {
  data: pendiri,
  status,
  error,
} = useWpContent<PageContent>("pesan-pendiri");
</script>

<style></style>
