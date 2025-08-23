<template>
  <div>
    <section class="mb-20 py-20 bg-gray-50">
      <div class="container">
        <h3 class="text-center mb-10 text-primary">News</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          <div v-for="item in news" class="group">
            <img
              :src="item.image_url"
              alt=""
              class="w-full h-56 object-cover rounded-xl mb-5 group-hover:border border-gray-200 group-hover:shadow-2xl duration-300"
            />

            <span class="text-sm flex items-center gap-1 text-gray-500 mb-1">
              <icon
                name="material-symbols-light:calendar-month-outline-rounded"
                class="text-lg"
              />
              {{ item.date }}
            </span>
            <h5 v-html="item.title"></h5>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useNews } from "~/composables/news";

const { news } = useNews();
</script>

<style></style>
