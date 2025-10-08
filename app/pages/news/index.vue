<script setup lang="ts">
definePageMeta({
  layout: "about"
})
useSeoMeta({
  title: 'News',
  ogTitle: 'News',
  description: 'Seputar Informasi tentang layanan dan kegiatan Primajasa',
  ogDescription: 'Seputar Informasi tentang layanan dan kegiatan Primajasa.'
})

const currentPage = ref(1);
const perPage = 9;

const { activeMenu } = useActiveMenu();
const localPath = useLocalePath();

// ✅ API sekarang return { posts, pagination }
const { data, status, error } = useWpPosts<PostContent>("post", {
  taxonomy: "category",
  term: "berita-csr",
  per_page: perPage,
  page: currentPage,
});

const { data: news, status: statusNews } = useWpContent<PageContent>("news");

// ✅ posts ambil dari data.value.posts
const posts = computed(() => data.value?.posts || []);

// ✅ pagination langsung dari data.value.pagination
const totalPages = computed(() => data.value?.pagination.total_pages ?? 1);
const totalPosts = computed(() => data.value?.pagination.total ?? 0);

const { formatDate } = useDateFormat();

console.log(activeMenu)
</script>

<template>
  <div>
    <ElementHero
      :title="news?.title"
      :description="news?.acf?.sub_title"
      :background="news?.featured_image"
    />
    <!-- Loading -->
    <div v-if="status === 'pending'">
      <loading />
    </div>
    <div v-else-if="posts.length" class="container mt-16">
      <!-- Grid posts -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
      >
        <div v-for="item in posts" :key="item.id" class="group">
          <nuxt-link :to="localPath(`/news/${item.slug}`)">
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
            {{ formatDate(item.date) }}
          </span>
          <nuxt-link :to="localPath(`/news/${item.slug}`)">
            <h5 v-html="item.title"></h5>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div v-else class="container">
      <!-- Empty -->
      <div  class="text-center text-gray-500 py-10">
        Tidak ada postingan.
      </div>
    </div>
    <!-- Pagination -->
      <div
        v-if="totalPages > 1"
        class="flex justify-center items-center pt-5 mb-20 px-6 max-w-xl mx-auto"
      >
        <button
          @click="currentPage--"
          :disabled="currentPage <= 1"
          class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          ←
        </button>

        <span class="px-4 py-2">
          Halaman {{ currentPage }} dari {{ totalPages }}
        </span>

        <button
          @click="currentPage++"
          :disabled="currentPage >= totalPages"
          class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          →
        </button>
      </div>
  </div>
</template>
