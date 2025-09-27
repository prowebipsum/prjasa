<script setup lang="ts">
const currentPage = ref(1)
const perPage = 9
const taxonomy = ref("kategori-promo")

// ✅ Tambah opsi "All"
const terms = [
  { label: "All", value: undefined  },
  { label: "Bis Reguler", value: "bis-reguler" },
  { label: "Bis Moda Bandara", value: "bis-moda-bandara" },
  { label: "Shuttle", value: "shuttle" },
  { label: "Pariwisata", value: "pariwisata" },
]

const term = ref(terms[0].value) // default = "All"

const localPath = useLocalePath()

// reactive query options
const queryOptions = computed(() => {
  const opt: any = {
    per_page: perPage,
    page: currentPage.value,
    taxonomy: taxonomy.value,
  }
  if (term.value) {
    opt.term = term.value
  }
  return opt
})

// API call (otomatis reactive kalau term/currentPage berubah)
const { data, status, error } = useWpPosts<PostContent>("promo",queryOptions)

const { data: promo, status: statusPromo } = useWpContent<PageContent>("promo")

const posts = computed(() => data.value?.posts || [])
const totalPages = computed(() => data.value?.pagination.total_pages ?? 1)
const totalPosts = computed(() => data.value?.pagination.total ?? 0)

const { formatDate } = useDateFormat()

// reset page ke 1 kalau term berubah
watch(term, () => {
  currentPage.value = 1
})

// ✅ Debug: log setiap kali query berubah
watchEffect(() => {
  console.log("🔍 API Params:", queryOptions.value)
})
</script>

<template>
  <div>
    <div class="container mt-16">
      <h1 v-html="promo?.title" class="text-primary"></h1>
    </div>

    <!-- Tabs -->
    <div class="container my-6">
      <UTabs v-model="term" :items="terms" variant="link" />
    </div>

    <!-- Loading -->
    <div v-if="status === 'pending'">
      <loading />
    </div>

    <!-- Grid posts -->
    <div v-else-if="posts.length" class="container">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
      >
        <div v-for="item in posts" :key="item.id" class="group">
          <nuxt-link :to="localPath(`/promo/${item.slug}`)">
            <img
              :src="item.featured_image"
              alt=""
              class="w-full h-56 object-cover rounded-xl mb-5 border border-gray-300 border-dashed group-hover:shadow-2xl duration-300"
            />
          </nuxt-link>
          <span class="text-xs flex items-center gap-1 text-gray-500 mb-1">
            <icon
              name="material-symbols-light:calendar-month-outline-rounded"
              class="text-lg"
            />
            {{ formatDate(item.date) }}
          </span>
          <nuxt-link :to="`/promo/${item.slug}`">
            <h5 v-html="item.title"></h5>
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- Empty -->
    <div v-else class="container text-center text-gray-500 py-10">
      Tidak ada postingan.
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
