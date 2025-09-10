<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
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
</template>

<script lang="ts" setup>
const { news } = useNews();
</script>

<style></style>
