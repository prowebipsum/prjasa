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
        <div class="flex flex-col gap-2">
          <div class="flex gap-2" v-for="post in posts">
            <img
              :src="post.featured_image"
              alt=""
              class="w-12 h-12 object-cover rounded"
            />
            <nuxt-link :to="`/news/${post.slug}`">{{ post.title }}</nuxt-link>
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
const { data: posts, status, error } = useWpPosts<PostContent>("post");

const route = useRoute();

const { whatsapp, telegram, facebook, twitter } = useSocialShare();
const shareText = "Cek artikel keren ini 🚀";
const shareUrl = route.fullPath;
</script>

<style></style>
