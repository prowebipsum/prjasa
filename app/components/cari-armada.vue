<template>
  <div>
    <section class="mb-20 pb-16 bg-gray-50">
      <div class="max-w-screen-lg mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div>
            <img src="/logo.png" alt="" class="h-12 object-contain mb-5" />
            <h1 class="text-5xl lg:text-6xl font-bold mb-5">Cari Armada di Kota Kamu</h1>
            <!-- ⬇️ Klik item ATAU tekan Enter akan memanggil applyCity -->
            <UInputMenu
              v-model="selectedCity"
              :items="armadaData"
              label-key="city"
              value-key="city"
              placeholder="Pilih kota..."
              trailing-icon="i-lucide-search"
              size="xl"
              class="w-full mb-5 rounded-xl"
              open-on-focus
            />

            <!-- 👇 map hanya render di client -->

            <client-only>
              <div
                v-if="isMapVisible"
                id="map"
                class="w-full h-[300px] rounded-xl shadow mb-5"
              ></div>
            </client-only>

            <div
              v-if="selectedLocations.length"
              class="flex flex-wrap items-center gap-4"
            >
              <div
                v-for="loc in selectedLocations"
                :key="loc.name"
                class="cursor-pointer hover:bg-gray-50 transition focus:outline-none focus:ring-1 focus:ring-primary px-2 rounded-full"
                @click="focusLocation(loc)"
                @keyup.enter="focusLocation(loc)"
                tabindex="0"
                role="button"
                :aria-label="`Fokus ke ${loc.name}`"
              >
                <span class="text-xs leading-tight">{{ loc.name }}</span>
                <!-- <p class="text-gray-600 text-xs mb-0">{{ selectedCity }}</p> -->
              </div>
            </div>
          </div>

          <div>
            <img src="/img/cari-armada.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { usePrimajasa } from "~/composables/primajasa";

const { armadaData } = usePrimajasa();

const selectedCity = ref<string | null>(null);
const selectedLocations = ref<any[]>([]);

const map = ref<any>(null);
const markers = ref<any[]>([]);
const isMapVisible = ref(false);

async function initMap() {
  const L = await import("leaflet");
  await import("leaflet/dist/leaflet.css");

  map.value = L.map("map").setView([-6.5, 107], 7);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map.value);
  (window as any).L = L;
}

function applyCity(cityName: string) {
  if (!map.value) return;
  const L = (window as any).L;

  // hapus marker lama
  markers.value.forEach((m) => map.value.removeLayer(m));
  markers.value = [];

  const city = armadaData.value.find(
    (c) => c.city.toLowerCase() === cityName.toLowerCase()
  );
  if (!city) {
    selectedLocations.value = [];
    return;
  }

  selectedLocations.value = city.locations;

  city.locations.forEach((loc) => {
    const marker = L.marker([loc.coordinates[1], loc.coordinates[0]])
      .bindPopup(`<b>${loc.name}</b><br/>${city.city}`)
      .addTo(map.value);

    markers.value.push(marker);
  });

  if (city.locations.length > 0) {
    map.value.setView(
      [city.locations[0].coordinates[1], city.locations[0].coordinates[0]],
      12
    );
  }
}

// ketika user pilih kota
watch(selectedCity, async (val) => {
  if (!val) return;
  // tampilkan map dulu
  isMapVisible.value = true;
  await nextTick();
  if (!map.value) await initMap();
  applyCity(val);
});

function focusLocation(loc: any) {
  if (!map.value) return;
  map.value.setView([loc.coordinates[1], loc.coordinates[0]], 15);

  const marker = markers.value.find((m) => {
    const { lat, lng } = m.getLatLng();
    return (
      Math.abs(lat - loc.coordinates[1]) < 0.0001 &&
      Math.abs(lng - loc.coordinates[0]) < 0.0001
    );
  });
  marker?.openPopup();
}
</script>
