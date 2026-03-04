<template>
  <div
    v-if="showPopup"
    class="fixed inset-0 z-[9999] flex items-center justify-center p-4"
  >
    <!-- Overlay Background -->
    <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="closePopup"></div>

    <!-- Popup Content -->
    <div class="relative z-10 max-w-xl w-full jelly-popup rounded-xl bg-white p-2">
      <!-- Close Button -->
      <button
        @click="showPopup = false"
        class="absolute -top-3 -right-3 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-200 z-20"
        aria-label="Tutup popup"
      >
        <icon name="bi:x-lg" class="text-xl" />
      </button>

      <!-- Popup Image -->
      <div class="">
        <img :src="popup?.acf?.image_popup?.url" alt="" />
      </div>
      <div class="max-w-max mx-auto mt-4">
        <UCheckbox v-model="janganTapilkan" label="Jangan tampilkan lagi" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Get current route for navigation detection
const router = useRouter();
// memanggil usepopup
const { showPopup, janganTapilkan, checkShouldShowPopup } = usePopup();
const tampilkanPopup = () => {
  setTimeout(() => {
    // Check if popup should be shown based on user preference
    if (checkShouldShowPopup()) {
      showPopup.value = true;
    }
  }, 2000);
};
// tapilkan indikasi route berubah
watch(
  // jika route berubah maka tampilkan popup
  () => router.currentRoute.value.name,
  () => {
    showPopup.value = false;
    if (!janganTapilkan.value) {
      tampilkanPopup();
    }
  }
);

onMounted(() => {
  tampilkanPopup();
});

const { data: popup } = useWpOptions("popup");
</script>

<style scoped>
/* Jelly animation for popup */
.jelly-popup {
  animation: jelly 0.6s ease-out forwards;
}

@keyframes jelly {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  25% {
    transform: scale(1.1);
    opacity: 1;
  }
  50% {
    transform: scale(0.95);
  }
  75% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
