<template>
  <div>
    <ElementHero
      :title="vimi?.title"
      :description="vimi?.acf?.sub_title"
      :background="vimi?.featured_image"
    />

    <div v-if="status === 'pending'">
      <loading />
    </div>
    <div class="container py-16">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
        <sidebar-menu />
        <div class="lg:col-span-4">
          <div class="flex flex-col gap-2" v-html="vimi?.content"></div>
          <div v-if="vimi?.acf?.values" class="p-6 mt-10 rounded-xl bg-gray-50">
            <h4 class="text-primary">Values</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="item in vimi?.acf?.values"
                class="p-4 rounded-xl bg-white border border-gray-300 flex gap-4"
              >
                <icon
                  :name="item.icon"
                  class="text-6xl text-primary shrink-0"
                />
                <div>
                  <h4 class="mb-1 text-lg text-primary">{{ item.titel }}</h4>
                  <div v-html="item.deskripsi"></div>
                </div>
              </div>
            </div>
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
  featured_image: string | null;
}

const { data: vimi, status, error } = useWpContent<PageContent>("visi-misi");
</script>

<style></style>
