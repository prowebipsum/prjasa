<template>
  <div>
    <Slideshow />
    <div class="max-w-screen-md mx-auto">
     <div class="grid grid-cols-2 lg:grid-cols-4 bg-white px-5 rounded-2xl shadow-2xl divide-y-1  lg:divide-x-1 divide-gray-200 relative -top-20 max-w-max mx-auto">
      
      <div v-for="item in productCategory" class="flex flex-col items-center justify-end gap-2 p-5 text-center group"> <!-- product item -->
        <img :src="item.image" alt="" class="group-hover:scale-110 transition-all duration-300 ease-in-out">
        <span>{{ item.name }}</span>
      </div><!--  end product item -->
     </div>
    </div>
<div class="contaner">
</div>
  
  </div>
</template>

<script lang="ts" setup>
const productCategory = ref( [
  { name: 'Bus Reguler', image: '/img/bus.png' },
  { name: 'Moda', image: '/img/bus.png' },
  { name: 'Taxi', image: '/img/taxi.png' },
  { name: 'Shuttel', image: '/img/shutle.png' },
])

</script>

<style>

</style>