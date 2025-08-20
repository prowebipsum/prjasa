<template>
  <div>
    <div class="container">
      <div class="text-center min-h-[70vh] flex flex-col justify-center items-center">
        <h1>Element Website</h1>
        <p class="text-xl">Mulai dari pewarnaan, typography dan component</p>

        <div class="flex items-center justify-center gap-5">
          <u-button size="xl" to="/component/color">Pallet Warna </u-button>
          <u-button size="xl" to="/component/typography" variant="outline"
            >Typography</u-button
          >
          <u-button size="xl" to="/component/card" color="secondary"> Card </u-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "blank",
});
</script>

<style></style>
