<template>
  <div class="min-h-screen pt-[60px]">
    <navbar />
   <!--  <ElementHero :title="activeMenu?.label" :background="layanan?.acf?.image" class="pb-32" /> -->

      <slot />
       <div class="container mb-20">
      <ElementPoolTarif v-if="route.params.slug !== 'moda' && route.params.slug !== 'pariwisata'" class="mt-16" />
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
