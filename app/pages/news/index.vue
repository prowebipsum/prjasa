<template>
  <div>
    <div v-if="status === 'pending'">
      <loading />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
      <div v-for="item in posts" class="group">
        <nuxt-link :to="`/news/${item.slug}`">
          <img
            :src="item.featured_image"
            alt=""
            class="w-full h-56 object-cover rounded-xl mb-5 group-hover:border border-gray-200 group-hover:shadow-2xl duration-300"
          />
        </nuxt-link>
        <span class="text-xs flex items-center gap-1 text-gray-500 mb-1">
          <icon
            name="material-symbols-light:calendar-month-outline-rounded"
            class="text-lg"
          />
          {{ formatDate(item?.date) || item.date }}
        </span>
        <nuxt-link :to="`/news/${item.slug}`">
          <h5 v-html="item.title"></h5>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: posts, status, error } = useWpPosts<PostContent>("post", {
  taxonomy: "category",
  term: "berita-csr",
});

const { formatDate } = useDateFormat();
</script>

<style></style>
