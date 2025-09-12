<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <!-- kiri -->
        <p>Anda bisa hubungi kami melalui form di bawah ini.</p>

        <div
          v-if="success"
          class="text-green-600 mt-2 w-full h-full flex flex-col justify-center items-center"
        >
          ✅ Data berhasil dikirim!
        </div>

        <div
          v-else-if="error"
          class="text-red-600 mt-2 w-full h-full flex flex-col justify-center items-center"
        >
          ❌ {{ error }}
        </div>

        <u-form v-else :state="formState" @submit="onSubmit" class="space-y-4">
          <u-form-field label="Nama">
            <u-input
              placeholder="Masukan Nama"
              type="text"
              size="lg"
              class="w-full"
              v-model="formState.name"
              required
            />
          </u-form-field>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <u-form-field label="Email">
              <u-input
                placeholder="Masukan Email"
                type="email"
                size="lg"
                class="w-full"
                v-model="formState.email"
                required
              />
            </u-form-field>
            <u-form-field label="No Telepon">
              <u-input
                placeholder="Masukan No Telepon"
                type="number"
                size="lg"
                class="w-full"
                v-model="formState.phone"
                required
              />
            </u-form-field>
          </div>
          <u-form-field label="Subjek">
            <u-input
              placeholder="Masukan Subjek"
              type="text"
              size="lg"
              class="w-full"
              v-model="formState.subject"
              required
            />
          </u-form-field>
          <u-form-field label="Pesan">
            <u-textarea
              placeholder="Masukan Pesan"
              size="lg"
              v-model="formState.message"
              class="w-full"
              required
            />
          </u-form-field>

          <u-button
            size="xl"
            type="submit"
            class="flex gap-2 items-center"
            trailing-icon="bi:send-fill"
            :ui="{ trailingIcon: 'w-4' }"
          >
            <span class="text-2xl text-light" v-if="proses">
              <icon name="line-md:loading-twotone-loop" />
            </span>
            Kirim
          </u-button>
        </u-form>
      </div>
      <!--  end kiri -->
      <div>
        <!-- kanan -->
        <div
          class="flex flex-col gap-2 max-w-[400px] mx-auto p-6 rounded-xl border border-gray-300"
        >
          <img src="/logo.png" alt="" class="w-40 object-contain" />
          <h5 class="mb-0">PT. Primajasa Perdanarayautama</h5>
          <div class="flex gap-2">
            <icon name="fluent:mail-16-regular" class="text-xl shrink-0" />
            <span> info.primajasa@gmail.com</span>
          </div>
          <div class="flex gap-2">
            <icon name="fluent:call-20-regular" class="text-xl shrink-0" />
            <span> +628 1212 19545</span>
          </div>
          <div class="flex gap-2">
            <icon name="material-symbols:home-pin-rounded" class="text-xl shrink-0" />
            <span>
              Jl. Mayjen Sutoyo No.32, RT.8/RW.8, <br />
              Cililitan, Kec. Kramat jati Jakarta Timur, <br />
              Daerah Khusus Ibukota Jakarta 13630</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { FormSubmitEvent } from "@nuxt/ui";

const formState = reactive({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const proses = ref(false);
const success = ref(false);
const error = ref<string | null>(null);

async function onSubmit(event: FormSubmitEvent<typeof formState>) {
  if (proses.value) return;
  proses.value = true;
  success.value = false;
  error.value = null;

  try {
    // === Simulasi submit (nanti ganti dengan call API Resend) ===
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        // misal 70% sukses, 30% gagal
        Math.random() > 0.3 ? resolve(true) : reject(new Error("Gagal kirim data"));
      }, 1000);
    });
    // ==========================================================

    success.value = true;
    // setelah sukses
    if (success.value) {
      // reset form setelah sukses
      formState.name = "";
      formState.email = "";
      formState.phone = "";
      formState.subject = "";
      formState.message = "";
    }

    setTimeout(() => {
      success.value = false;
    }, 2000);
  } catch (err: any) {
    error.value = err.message || "Terjadi kesalahan";
  } finally {
    proses.value = false;
  }

  console.log("Data dikirim:", event.data);
}
</script>
