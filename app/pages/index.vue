<template>
  <div>
    <Slideshow />
    <ProductCategory />

    <section class="bg-gray-50 relative">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="flex flex-col gap-10 justify-center items-center">
            <div class="text-center">
              <h2>Cek Rute dan Tarif</h2>
              <h4>Dan temukan Armada terdekat di lokasi Anda</h4>
              <UButton to="/cek-rute" size="xl" class="rounded-full" icon="gis:route">
                Cek Rute dan Tarif
              </UButton>
            </div>
          </div>
          <div>
            <img src="/img/pulkam.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- 
    <CariArmada />
    <CekTarif /> -->
    <Promo />
    <News />
    <Blog />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "home",
});
</script>
