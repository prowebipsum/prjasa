<script setup lang="ts">
interface TaxonomyPost {
  id: number;
  title: string;
  slug: string;
  featured_image: string | null;
}

const route = useRoute();
const { data: categoryPosts, status } = useWpTaxonomy<TaxonomyPost[]>(
  "category", // taxonomy
  "bus-regular", // term slug
  { per_page: 5 }
);
</script>

<template>
  <section>
    <h2 class="text-2xl font-bold mb-4">Category: News</h2>
    <div v-if="status === 'pending'">Loading...</div>
    <ul v-else>
      <li v-for="post in categoryPosts" :key="post.id">
        <NuxtLink :to="`/product/${post.slug}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>
