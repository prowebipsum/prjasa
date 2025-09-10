<template>
  <div class="min-h-screen pt-[60px]">
    <navbar />
    <ElementHero :title="layanan?.name" :background="layanan?.acf?.image" class="pb-32" />

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
const route = useRoute();
const { data: layanan } = useWpTerm<any>("kategori-layanan", route.params.slug);
</script>

<style></style>
