<template>
  <div class="hero pt-20 pb-10 relative" :class="background">
    <div class="container">
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

<style>
.hero::after {
  content: "";
  width: 120px;
  height: 100px;
  display: block;
  background: url("/img/aksen.png") no-repeat bottom right;
  position: absolute;
  right: 0;
}
</style>
