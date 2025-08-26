<template>
  <div class="hero pt-20 pb-10 relative" :class="background">
    <div class="container text-center">
      <h1 class="text-4xl mb-2 text-primary">{{ title }}</h1>
      <p v-if="description">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  description: String,
  background: String,
});
</script>

<style></style>
