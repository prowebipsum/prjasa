<template>
  <div class="flex flex-col gap-2" v-html="kebijakan?.content"></div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "about",
});

const { data: kebijakan, status, error } = useWpContent<PageContent>(
  "kebijakan-perusahaan"
);
</script>

<style></style>
