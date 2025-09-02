<template>
  <div>
    <section class="py-20 bg-primary">
      <div class="container">
        <h3 class="text-center mb-10 text-brand-50">Promo</h3>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          <div
            v-for="item in promos.slice(0, 3)"
            :key="item"
            class="border border-brand-400 border-dashed rounded-xl overflow-hidden"
          >
            <NuxtImg :src="item.image" alt="" width="400" height="400" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const { promos } = usePromo();
</script>

<style></style>
