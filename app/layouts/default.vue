<template>
  <div class="min-h-screen pt-[60px]">
    <navbar />
    <ElementHero
      :title="title"
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

const title = computed(() => {
  let label = activeMenu.value?.label
  if (label === "Promo") {
    label = 'Program Spesial Primajasa'
  }else{
    label = activeMenu.value?.label 
  }
  return label
})


</script>

<style></style>
