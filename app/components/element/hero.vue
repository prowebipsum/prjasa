<template>
  <div
    class="hero pt-20 pb-10 relative bg-cover bg-center min-h-[300px] flex flex-col justify-center"
    :class="!isImage ? backgroundClass : ''"
    :style="isImage ? { backgroundImage: `url(${background})` } : {}"
  >
    <div v-if="isImage" class="absolute inset-0 bg-white/40"></div>
    <div class="container relative">
      <h1 class="text-4xl mb-2 text-primary">{{ title }}</h1>
      <p v-if="description">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  description?: string;
  background?: string;
}>();

const isImage = computed(() => {
  if (!props.background) return false;
  return props.background.startsWith("http") || props.background.startsWith("/");
});

// fallback ke bg-gray-50 jika kosong
const backgroundClass = computed(() => props.background || "bg-gray-50");
</script>
