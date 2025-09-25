<template>
  <div
    class="hero pt-20 pb-10 relative bg-cover w-full h-auto bg-center lg:aspect-[32/9] aspect-[3/1] md:aspect-[3/2] flex flex-col justify-center  overflow-hidden "
    :class="!isImage ? backgroundClass : ''"
    :style="backgroundStyle.style"
  >
 <!--    <div v-if="isImage" class="absolute inset-0 bg-white/40"></div> -->
    <div class="container relative text-white">
      <div class="relative z-30">
   <h1 class="text-4xl mb-2 text-white">{{ title }}</h1>
      <!-- <p v-if="description">{{ description }}</p> -->
      </div>
   
      <div class="max-w-[700px] w-full min-h-[300px] bg-brand-950 p-6 rounded-full absolute blur-2xl opacity-70  -bottom-10 -left-40 translate-y-1/2 ">
      </div>
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

const backgroundStyle = computed(() => {
  if (props.background?.startsWith("http") || props.background?.startsWith("/")) {
    return { style: { backgroundImage: `url('${props.background}')` }, class: "" }
  }
  return { style: {}, class: props.background || "bg-gray-50" }
})
</script>
