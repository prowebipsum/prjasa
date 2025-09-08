<template>
  <div class="min-h-screen">
    <div class="prjasa-wrap">
      <iframe
        id="prjasaTarif"
        src="https://primajasa.co/cektarif/index.html?embed=1&bg=transparent&primary=%23B91C1C&accent=%23F59E0B"
        style="
          width: 100%;
          min-height: 720px;
          border: 0;
          overflow: hidden;
          border-radius: 12px;
        "
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allow="geolocation"
      >
      </iframe>
    </div>
    <wca class="py-20" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "home",
});

onMounted(() => {
  const f = document.getElementById("prjasaTarif");
  // Dengarkan pesan tinggi dari halaman di dalam iframe
  window.addEventListener("message", function (e) {
    if (e.origin !== "https://primajasa.co") return; // keamanan
    if (!e.data || e.data.type !== "prjasa-resize") return; // hanya pesan kita
    const h = Math.max(600, Number(e.data.height || 0));
    f.style.height = h + "px";
  });
});
</script>

<style></style>
