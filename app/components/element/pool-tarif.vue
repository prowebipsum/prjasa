<template>
  <div class="relative">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 justify-between p-6 rounded-xl bg-light border border-brand-100 relative"
    >
      <div class="lg:col-span-2">
        <h4 class="mb-0">Lihat Rute dan Tarif</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <UButton to="/cek-rute" size="xl" class="rounded-full" icon="gis:route">
          Cek Rute dan Tarif
        </UButton>
      </div>

      <div class="lg:col-span-2">
        <h4 class="mb-0">Cari Pool Bus</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <UButton to="/cek-pool" size="xl" class="rounded-full" icon="tabler:bus">
          Cari Armada terdekat
        </UButton>
      </div>

      <div>
        <img
          src="/img/pulkam.webp"
          alt=""
          class="absolute -top-1/2 w-[220px] hidden lg:block"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
