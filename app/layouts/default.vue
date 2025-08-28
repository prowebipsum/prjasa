<template>
  <div class="min-h-screen pt-[60px]">
    <navbar />
    <ElementHero
      :title="activeMenu?.label"
      :description="activeMenu?.description"
      :background="activeMenu?.background"
    />
    <div class="container py-16">
      <slot />
      <ElementPoolTarif class="mt-16" />
    </div>

    <Footer />
  </div>
</template>

<script lang="ts" setup>
const { activeMenu } = useActiveMenu();
</script>

<style></style>
