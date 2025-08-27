<template>
  <div class="min-h-screen pt-[60px]">
    <navbar />
    <ElementHeroCenter
      :title="activeMenu.label"
      :description="activeMenu.description"
      background="bg-gray-50 pb-32"
    />
    <ProductCategory background="bg-white " />
    <div class="container pb-20">
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
