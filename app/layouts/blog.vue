<template>
  <div class="min-h-screen pt-[60px]">
    <navbar />
    <ElementHero
      title="Blog"
      description=""
      background="/img/about-1.jpg"
    />
    <div class="container py-16">
      <slot />
      <ElementPoolTarif class="mt-16" />
    </div>

    <Footer />
  </div>
</template>

<script lang="ts" setup>
</script>

<style></style>
