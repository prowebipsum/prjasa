<template>
  <div>
    <Slideshow />
    <ProductCategory />

    <section class="bg-gray-50">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="flex flex-col gap-10 justify-center items-center">
            <div class="text-center">
              <h2>Lihat Rute dan Tarif</h2>
              <UButton to="/cek-rute" size="xl" class="rounded-full" icon="gis:route">
                Cek Rute dan Tarif
              </UButton>
            </div>
            <div class="text-center">
              <h2>Cari Pool Bus</h2>
              <UButton to="/cek-pool" size="xl" class="rounded-full" icon="tabler:bus">
                Cari Armada terdekat
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
    <News />
    <Blog />
  </div>
</template>

<script setup lang="ts">
import CariArmada from "~/components/cari-armada.vue";
</script>
