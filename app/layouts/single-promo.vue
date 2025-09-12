<template>
  <navbar />
  <div class="container mt-24 mb-16">
    <div class="grid grid-cols-1 lg:grid-cols-7 gap-6 lg:gap-10">
      <div class="lg:col-span-1">
        <div class="p-4 rounded-xl bg-white border border-gray-300 lg:sticky top-20">
          <div class="flex gap-2 items-center justify-center mb-3">
            <span class="text-primary">Share</span>
            <icon name="bi:share-fill" class="text-primary" />
          </div>

          <div class="flex flex-wrap gap-3 justify-center items-center">
            <u-button
              size="lg"
              :href="whatsapp(shareText, shareUrl)"
              variant="ghost"
              trailing-icon="bi:whatsapp"
              target="_blank"
              class="max-w-max"
            />

            <u-button
              size="lg"
              :href="facebook(shareText, shareUrl)"
              variant="ghost"
              trailing-icon="bi:facebook"
              target="_blank"
              class="max-w-max"
            />

            <u-button
              size="lg"
              :href="telegram(shareText, shareUrl)"
              variant="ghost"
              trailing-icon="bi:telegram"
              target="_blank"
              class="max-w-max"
            />

            <u-button
              size="lg"
              :href="twitter(shareText, shareUrl)"
              variant="ghost"
              trailing-icon="bi:twitter-x"
              target="_blank"
              class="max-w-max"
            />
          </div>
        </div>
        <!-- end rounded widget -->
      </div>
      <div class="lg:col-span-4 flex flex-col gap-2">
        <slot />
      </div>
      <div class="lg:col-span-2">
        <div class="flex flex-col">
          <div
            class="flex gap-3 p-2 rounded-xl hover:bg-gray-50 duration-300"
            v-for="post in posts?.posts"
          >
            <nuxt-link :to="`/promo/${post.slug}`" class="shrink-0 w-max">
              <img
                :src="post.featured_image"
                alt=""
                class="w-16 h-16 object-cover rounded"
              />
            </nuxt-link>
            <div>
              <span class="text-xs flex items-center gap-1 text-gray-500 mb-1">
                <icon
                  name="material-symbols-light:calendar-month-outline-rounded"
                  class="text-lg"
                />
                {{ formatDate(post?.date) || post.date }}
              </span>
              <nuxt-link :to="`/promo/${post.slug}`" class="text-sm">{{
                post.title
              }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script lang="ts" setup>
type PostContent = {
  title: string;
  content: string;
  featured_image: string;
  date: string;
};
const { data: posts, status, error } = useWpPosts<PostContent>("promo", {
  per_page: 5,
});

const route = useRoute();

const { whatsapp, telegram, facebook, twitter } = useSocialShare();
const shareText = "Cek artikel keren ini 🚀";
const shareUrl = route.fullPath;

const { formatDate } = useDateFormat();
</script>

<style>
@reference '@/assets/css/main.css';

h1 {
  @apply text-4xl font-bold;
}

h2 {
  @apply text-2xl font-bold;
}

h3 {
  @apply text-xl font-bold;
}
</style>
