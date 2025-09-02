<template>
  <div>
    <section class="py-20 bg-brand-50">
      <div class="container">
        <h3 class="text-center mb-10 text-primary">Blog</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-6 justify-between">
          <div
            v-for="(item, index) in blog"
            :key="index"
            class="bg-cover bg-center text-white border border-gray-300 rounded-xl overflow-hidden h-full min-h-[300px] flex flex-col justify-end relative group"
            :class="{ 'lg:row-span-2': index === 0 }"
            :style="{ backgroundImage: `url(${item.image_url})` }"
          >
            <div
              class="absolute top-0 left-0 w-full h-full inset-0 bg-gradient-to-t from-black to-black/10 opacity-70 group-hover:opacity-95 duration-300"
            ></div>
            <div class="p-6 relative">
              <h4 class="text-white">
                {{ item.title }}
              </h4>

              <UButton size="xl" class="rounded-full px-6">Read more</UButton>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <UButton to="/blog" size="xl" class="rounded-full px-6 mt-10 mx-auto"
            >Selengkapnya</UButton
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { blog } = useBlog();
</script>
