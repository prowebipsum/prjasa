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
              <h4 class="text-gray-700">Dan temukan Armada terdekat di lokasi Anda</h4>
              <UButton
                to="/cek-rute"
                size="xl"
                class="rounded-full mb-5"
                icon="gis:route"
              >
                Cek Rute dan Tarif
              </UButton>
              <p>Tiket dapat di pesan melalui</p>
              <div class="flex items-center justify-center gap-4">
                <button class="">
                  <img
                    src="/img/redbus.png"
                    alt=""
                    class="w-20 h-20 object-contain rounded-xl hover:shadow-2xl duration-300"
                  />
                </button>
                <button>
                  <img
                    src="/img/traveloka.webp"
                    alt=""
                    class="w-20 h-20 object-contain border border-gray-300 rounded-xl hover:shadow-2xl duration-300"
                  />
                </button>
              </div>
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
