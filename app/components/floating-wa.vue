<template>
  <div>
    <transition name="fade">
 <div v-if="openChat"  class="bg-gray-50  p-4 rounded-lg shadow-xl">
     <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="nama" name="nama">
      <UInput v-model="state.nama" color="primary" class="bg-white w-full"/>
    </UFormField>

    <UFormField label="Pesan" name="pesan">
      <UTextarea v-model="state.pesan" class="w-full bg-white" :rows="3" color="primary" />
    </UFormField>
    <div class="flex items-center justify-between gap-2">
    <UButton type="submit" color="primary">
      Send <icon name="bi:whatsapp" class="text-xl" />
    </UButton>
    </div>  
  </UForm>
  </div>
  </transition>
  <div class="flex justify-end mt-4">
    <div class="flex items-center gap-2 p-2 rounded-full bg-white shadow"> 
      <span class="text-sm"> Tanya Kami</span>
        <UButton  @click="openChat = !openChat" class="rounded-full  cursor-pointer" color="primary" :icon="openChat ? 'bi:x-lg' : 'bi:whatsapp'"/>
    </div>
</div>
  </div>

</template>

<script lang="ts" setup>
const openChat = ref(false);

import type { FormError, FormSubmitEvent } from "@nuxt/ui";
const state = reactive({
  nama: "",
  pesan: "",
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.pesan) errors.push("Pesan harus diisi.");
  if (!state.nama) errors.push("Nama harus diisi.");
  return errors;
};

const onSubmit = async (event: FormSubmitEvent<typeof state>) => {
  const phoneNumber = "628121219545" // ✅ ganti dengan nomor tujuan (format internasional)

  const message = `Halo, saya ${state.nama}.\n${state.pesan}`
  const encodedMessage = encodeURIComponent(message)

  // detect device
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

  let url = ""
  if (isMobile) {
    // langsung buka aplikasi WhatsApp
    url = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
  } else {
    // buka WhatsApp Web
    url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  }

  window.open(url, "_blank")
}

</script>

<style>
</style>