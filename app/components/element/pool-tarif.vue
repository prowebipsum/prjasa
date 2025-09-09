<template>
  <div class="relative lg:pt-10">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 justify-between p-6 rounded-xl bg-light border border-brand-100 relative"
    >
      <div class="lg:col-span-2">
        <h3 class="mb-0 text-primary">Cek Rute dan Tarif</h3>
        <p class="text-lg">dan temukan armada terdekat di lokasi Anda.</p>
        <UButton
          href="https://primajasa.co/cektarif/index.html?embed=1&bg=transparent&primary=%23B91C1C&accent=%23F59E0B"
          size="xl"
          class="rounded-full"
          icon="gis:route"
          target="_blank"
        >
          Cek Rute dan Tarif
        </UButton>
      </div>

      <div class="lg:col-span-2 flex flex-col items-center justify-center">
        <p class="text-xl font-medium text-primary">Tiket dapat di pesan melalui.</p>
        <div class="flex items-center gap-4">
          <a href="https://www.redbus.id/" class="" target="_blank">
            <img
              src="/img/redbus.png"
              alt=""
              class="w-20 h-20 object-contain rounded-xl hover:shadow-2xl duration-300"
            />
          </a>
          <a href="https://www.traveloka.com/id/" class="" target="_blank">
            <img
              src="/img/traveloka.webp"
              alt=""
              class="w-20 h-20 object-contain border border-gray-300 rounded-xl hover:shadow-2xl duration-300"
            />
          </a>
        </div>
      </div>

      <div>
        <img
          src="/img/pulkam.webp"
          alt=""
          class="absolute -top-1/2 w-[240px] hidden lg:block"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
