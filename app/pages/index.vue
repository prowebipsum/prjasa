<template>
  <div>
    <Slideshow />
    <div class="max-w-screen-md mx-auto">
      <div
        class="grid grid-cols-2 lg:grid-cols-4 bg-white px-5 rounded-2xl shadow-2xl divide-y-1 lg:divide-x-1 divide-gray-200 relative -top-20 max-w-max mx-auto"
      >
        <div
          v-for="item in productCategory"
          class="flex flex-col items-center justify-end gap-2 p-5 text-center group"
        >
          <!-- product item -->
          <img
            :src="item.image"
            alt=""
            class="group-hover:scale-110 transition-all duration-300 ease-in-out"
          />
          <span>{{ item.name }}</span>
        </div>
        <!--  end product item -->
      </div>
    </div>
    <section class="mb-20">
      <div class="container">
        <h4 class="text-center">Cek Rute dan Tarif Primajasa</h4>
        <div class="space-y-4">
          <!-- Filter pakai Select Menu -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-screen-lg mx-auto">
            <USelectMenu
              v-model="asalInput"
              :items="asalList"
              placeholder="Select status"
              size="xl"
              class="w-full "
            />
            <USelectMenu
              v-model="tujuanInput"
              :items="tujuanList"
              placeholder="Pilih Tujuan"
              size="xl"
              :disabled="!asalInput"
              class="w-full "
            />
            <USelectMenu
              v-model="kelasInput"
              :items="kelasList"
              placeholder="Pilih Kelas"
              size="xl"
              :disabled="!tujuanInput"
              class="w-full"
            />
          </div>

          <!-- Hasil Filtering -->
          <div v-if="hasil.length" class="mt-4 max-w-screen-lg mx-auto ">
            <div
              v-for="r in hasil"
              :key="r.id"
              class="p-4 border border-dashed border-gray-300 rounded-xl mb-2 bg-gray-50"
            >
              <h4>{{ r.asal }} – {{ r.tujuan }} ({{ r.kelas }})</h4>
              <div class="flex items-center gap-4">
               <span class="flex items-center"> <icon name="hugeicons:airplane-seat" class="text-xl"/> Seat</span>
               <span> {{ r.seat }}</span>
              </div>
              <div class="flex items-center gap-4">
               <span class="flex items-center"> <icon name="tdesign:money" class="text-xl" /> Tarif</span>
               <span class="text-xl font-semibold"> Rp{{ r.tarif.toLocaleString() }} </span>
              </div>
              <div v-if="r.id" class="flex flex-wrap items-center gap-2 mt-2">
                <u-button v-for="rute in r.rute_detail"> {{ rute.asal }} </u-button>
              </div>
            </div>
          </div>
          <div v-else class="text-gray-500 italic mt-4 text-center text-sm">
            Pilih asal, tujuan, dan kelas untuk melihat hasil rute
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useFilterRute } from "~/composable/filterRute";
import { useRute } from "~/composable/rute";

const productCategory = ref([
  { name: "Bus Reguler", image: "/img/bus.png" },
  { name: "Moda", image: "/img/bus.png" },
  { name: "Taxi", image: "/img/taxi.png" },
  { name: "Shuttel", image: "/img/shutle.png" },
]);

const { rute } = useRute();

// input pencarian
const asalInput = ref("Pilih Asal");
const tujuanInput = ref("Pilih Tujuan");
const kelasInput = ref("Pilih Kelas");

// ambil daftar unik untuk Asal
const asalList = computed(() => [...new Set(rute.value.map((r) => r.asal))]);

// tujuan tergantung asal
const tujuanList = computed(() => {
  if (!asalInput.value) return [];
  return [
    ...new Set(rute.value.filter((r) => r.asal === asalInput.value).map((r) => r.tujuan)),
  ];
});

// kelas tergantung asal & tujuan
const kelasList = computed(() => {
  if (!asalInput.value || !tujuanInput.value) return [];
  return [
    ...new Set(
      rute.value
        .filter((r) => r.asal === asalInput.value && r.tujuan === tujuanInput.value)
        .map((r) => r.kelas)
    ),
  ];
});

// hasil filter
const hasil = computed(() => {
  if (!asalInput.value || !tujuanInput.value || !kelasInput.value) {
    return [];
  }
  return rute.value.filter(
    (r) =>
      r.asal === asalInput.value &&
      r.tujuan === tujuanInput.value &&
      r.kelas === kelasInput.value
  );
});
</script>

<style></style>
