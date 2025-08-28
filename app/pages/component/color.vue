<template>
  <div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 divide-gray-100 divide-dashed"
    >
      <div class="lg:col-span-3">
        <p class="font-bold text-xl">Color</p>
        <div class="">
          <div>
            <div class="w-full h-12 bg-primary"></div>
            <p class="text-sm font-mono">Primary / #9d181d</p>
          </div>
          <div>
            <div>
              <div class="w-full h-12 bg-secondary"></div>
              <p class="text-sm font-mono">Secondary / #dfc779</p>
            </div>
            <div>
              <div class="w-full h-12 bg-light"></div>
              <p class="text-sm font-mono">Light / #fcf8e8</p>
            </div>
            <div>
              <div class="w-full h-12 bg-gray-900 text-white"></div>
              <p class="text-sm font-mono">Heading Text / #0d1828</p>
            </div>
            <div>
              <div class="w-full h-12 bg-gray-700 text-white"></div>
              <p class="text-sm font-mono">Body Text / #324153</p>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:col-span-3">
        <p class="font-bold text-xl">Sparation Color</p>
        <div class="grid grid-cols-1 lg:grid-cols-9 text-sm">
          <div class="bg-brand-950 h-12"></div>
          <div class="bg-brand-900 h-12"></div>
          <div class="bg-brand-800 h-12"></div>
          <div class="bg-brand-700 h-12 flex items-center justify-center text-white">
            Brand
          </div>
          <div class="bg-brand-600 h-12"></div>
          <div class="bg-brand-500 h-12"></div>
          <div class="bg-brand-400 h-12"></div>
          <div class="bg-brand-300 h-12"></div>
          <div class="bg-brand-200 h-12"></div>
          <div class="bg-brand-100 h-12"></div>
          <div class="bg-brand-50 h-12"></div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-9">
          <div class="bg-secondary/90 h-12"></div>
          <div class="bg-secondary/80 h-12"></div>
          <div class="bg-secondary/70 h-12"></div>
          <div class="bg-secondary/60 h-12"></div>
          <div class="bg-secondary/50 h-12"></div>
          <div class="bg-secondary/40 h-12"></div>
          <div class="bg-secondary/30 h-12"></div>
          <div class="bg-secondary/20 h-12"></div>
          <div class="bg-secondary/10 h-12"></div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-9">
          <div class="bg-light/90 h-12"></div>
          <div class="bg-light/80 h-12"></div>
          <div class="bg-light/70 h-12"></div>
          <div class="bg-light/60 h-12"></div>
          <div class="bg-light/50 h-12"></div>
          <div class="bg-light/40 h-12"></div>
          <div class="bg-light/30 h-12"></div>
          <div class="bg-light/20 h-12"></div>
          <div class="bg-light/10 h-12"></div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-9">
          <div class="bg-gray-900 h-12"></div>
          <div class="bg-gray-800 h-12"></div>
          <div class="bg-gray-700 h-12"></div>
          <div class="bg-gray-600 h-12"></div>
          <div class="bg-gray-500 h-12"></div>
          <div class="bg-gray-400 h-12"></div>
          <div class="bg-gray-300 h-12"></div>
          <div class="bg-gray-200 h-12"></div>
          <div class="bg-gray-100 h-12"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "blank",
});
</script>

<style></style>
