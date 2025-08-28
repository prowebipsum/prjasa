<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
      <div
        v-for="item in promos"
        class="border border-gray-300 border-dashed rounded-xl overflow-hidden"
      >
        <img :src="item.image" alt="" />
        <div class="p-6">
          <h5 class="mb-2">{{ item.title }}</h5>
          <p class="text-sm mb-0">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { promos } = usePromo();
</script>

<style></style>
