<template>
  <div class="min-h-screen pt-[60px]">
    <navbar />
      <slot />
       <div class="container">
      
    </div>

    <Footer />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const { activeMenu } = useActiveMenu();

const title = computed(() => {
  let label = activeMenu.value?.label
  if (label === "Program") {
    label = 'Program Spesial Primajasa'
  }else{
    label = activeMenu.value?.label 
  }
  return label
})


</script>

<style></style>
