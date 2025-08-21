<template>
  <div>
    <!-- filter -->
    <section class="mb-20">
      <div class="container">
        <h3 class="text-center mb-10 text-primary">Cek Rute dan Tarif Primajasa</h3>
        <div class="space-y-4">
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-screen-lg mx-auto"
          >
            <USelectMenu
              v-model="asalInput"
              :items="asalList"
              placeholder="Pilih Asal"
              size="xl"
              class="w-full"
            />
            <USelectMenu
              v-model="tujuanInput"
              :items="tujuanList"
              placeholder="Pilih Tujuan"
              size="xl"
              :disabled="!asalInput"
              class="w-full"
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

          <!-- hasil filter -->
          <div v-if="hasil.length" class="mt-4 max-w-screen-lg mx-auto">
            <div
              v-for="r in hasil"
              :key="r.id"
              class="p-6 lg:p-10 border border-dashed border-gray-300 rounded-xl mb-2 bg-gray-50"
            >
              <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
                <!-- kiri -->
                <div class="flex flex-col gap-4 lg:col-span-2">
                  <div
                    class="p-4 rounded-xl bg-white border border-dashed border-gray-300 flex flex-col gap-2"
                  >
                    <div class="flex justify-between flex-wrap gap-4">
                      <span class="text-xl font-semibold">
                        {{ r.asal }} - {{ r.tujuan }}
                      </span>
                      <UBadge :label="r.kelas" />
                    </div>

                    <div class="flex items-center gap-4">
                      <span class="flex items-center">
                        <Icon name="tdesign:money" class="text-xl" /> Tarif
                      </span>
                      <span class="text-xl font-semibold">
                        Rp {{ r.tarif.toLocaleString() }}
                      </span>
                    </div>
                    <div class="flex items-center gap-4">
                      <span class="flex items-center">
                        <Icon name="hugeicons:airplane-seat" class="text-xl" /> Seat
                      </span>
                      <span>{{ r.seat }}</span>
                    </div>
                  </div>
                </div>

                <!-- kanan -->
                <div class="lg:col-span-3">
                  <p class="font-medium mb-2">Rute Detail</p>
                  <div
                    class="max-h-[300px] overflow-y-auto border border-dashed border-gray-300 rounded-xl"
                  >
                    <div class="flex flex-col divide-y divide-dashed divide-gray-300">
                      <div
                        class="flex items-center text-sm gap-4 py-1 px-2 font-medium bg-gray-300 rounded-md"
                      >
                        <span>
                          Dari <Icon name="bi:arrow-right" class="align-middle" /> Ke
                        </span>
                        <span class="ml-auto">Tarif</span>
                      </div>
                      <div
                        v-for="value in r.rute_detail"
                        :key="value.asal + value.tujuan"
                        class="flex text-xs lg:text-sm gap-4 py-1 px-2"
                      >
                        <span>
                          {{ value.asal }}
                          <Icon name="bi:arrow-right" class="align-middle" />
                          {{ value.tujuan }}
                        </span>
                        <span class="ml-auto">Rp {{ value.tarif.toLocaleString() }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- timeline -->
              <div class="mt-5 border-t border-gray-300 py-4">
                <p class="font-medium">Lintasan</p>
                <div class="overflow-x-auto pb-5 custom-scrollbar">
                  <UTimeline
                    orientation="horizontal"
                    :default-value="-1"
                    :items="
                      r.lintasan.map((lokasi, i) => ({
                        title: lokasi,
                        //  description: `Lintasan ke-${i + 1}`,
                        icon: `tabler:bus`,
                      }))
                    "
                    size="lg"
                    :ui="{
                      container: `min-w-44 flex-shrink-0`,
                      title: `text-xs`,
                      description: `text-2xs text-gray-500`,
                    }"
                  />
                </div>
              </div>

              <!-- timeline -->
              <div class="mt-5 border-t border-gray-300 py-4">
                <p class="font-medium">Pos Checker</p>
                <div class="overflow-x-auto pb-5 custom-scrollbar">
                  <UTimeline
                    orientation="horizontal"
                    :default-value="-1"
                    :items="
                      r.post_checker.map((lokasi, i) => ({
                        title: lokasi,
                        //  description: `Lintasan ke-${i + 1}`,
                        icon: `material-symbols-light:flag`,
                      }))
                    "
                    size="lg"
                    :ui="{
                      container: `min-w-44 flex-shrink-0`,
                      title: `text-xs`,
                      description: `text-2xs text-gray-500`,
                    }"
                  />
                </div>
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
import { useRute } from "~/composables/rute";

const { rute } = useRute();

// input
const asalInput = ref("Pilih Asal");
const tujuanInput = ref("Pilih Tujuan");
const kelasInput = ref(" Kelas");

// daftar unik
const asalList = computed(() => [...new Set(rute.value.map((r) => r.asal))]);

const tujuanList = computed(() => {
  if (!asalInput.value) return [];
  return [
    ...new Set(rute.value.filter((r) => r.asal === asalInput.value).map((r) => r.tujuan)),
  ];
});

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
  if (!asalInput.value || !tujuanInput.value || !kelasInput.value) return [];
  return rute.value.filter(
    (r) =>
      r.asal === asalInput.value &&
      r.tujuan === tujuanInput.value &&
      r.kelas === kelasInput.value
  );
});
</script>

<style></style>
