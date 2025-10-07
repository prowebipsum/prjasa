<template>
  <div>
    <ElementHero
      :title="$t('contact.title')"
      :description="kontak?.acf?.sub_title"
      :background="kontak?.featured_image"
    />
    <div class="container mt-16 ">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <!-- kiri -->
          <p>{{  $t('contact.description') }}</p>

          <div
            v-if="success"
            class="text-green-600 mt-2 w-full h-full flex flex-col justify-center items-center rounded-xl border border-green-600 border-dashed bg-gray-50"
          >
            ✅ {{ $t('contact.success') }}
          </div>

          <div
            v-else-if="error"
            class="text-red-600 mt-2 w-full h-full flex flex-col justify-center items-center rounded-xl border border-red-600 border-dashed bg-gray-50"
          >
            ❌ {{  $t('contact.error') }}
          </div>

          <u-form
            v-else
            :state="formState"
            @submit="onSubmit"
            class="space-y-4 mb-4"
          >
            <u-form-field :label="$t('contact.name')">
              <u-input
                :placeholder="$t('contact.placeholderName')"
                type="text"
                size="lg"
                class="w-full"
                v-model="formState.name"
                required
              />
            </u-form-field>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <u-form-field :label="$t('contact.email')">
                <u-input
                  :placeholder="$t('contact.placeholderEmail')"
                  type="email"
                  size="lg"
                  class="w-full"
                  v-model="formState.email"
                  required
                />
              </u-form-field>
              <u-form-field :label="$t('contact.phone')">
                <u-input
                  :placeholder="$t('contact.placeholderPhone')"
                  type="number"
                  size="lg"
                  class="w-full"
                  v-model="formState.phone"
                  required
                />
              </u-form-field>
            </div>
            <u-form-field :label="$t('contact.subject')">
              <u-input
                :placeholder="$t('contact.placeholderSubject')"
                type="text"
                size="lg"
                class="w-full"
                v-model="formState.subject"
                required
              />
            </u-form-field>
            <u-form-field :label="$t('contact.message')">
              <u-textarea
                :placeholder="$t('contact.placeholderMessage')"
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
              {{ $t('contact.submit') }}
            </u-button>
          </u-form>
        </div>
        <!--  end kiri -->
        <div>
          <!-- kanan -->
          <div
            class="flex flex-col gap-2 max-w-[400px] mx-auto p-6 rounded-xl border border-gray-300"
          >
            <img
              :src="option?.acf?.logo?.url"
              :alt="option?.acf?.logo?.title"
              class="w-40 object-contain"
            />
            <h5 class="mb-0">PT. Primajasa Perdanarayautama</h5>
            <div class="flex gap-2">
              <icon name="fluent:mail-16-regular" class="text-xl shrink-0" />
              <span>{{ option?.acf?.email }}</span>
            </div>
            <div class="flex gap-2">
              <icon name="fluent:call-20-regular" class="text-xl shrink-0" />
              <span>{{ option?.acf?.tel }}</span>
            </div>
            <div class="flex gap-2">
              <icon
                name="material-symbols:home-pin-rounded"
                class="text-xl shrink-0"
              />
              <span v-html="option?.acf?.alamat"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { FormSubmitEvent } from "@nuxt/ui";

const { locale } = useI18n();
const { data: option } = useWpOptions(locale.value);
const { data: kontak } = useWpContent<PageContent>("kontak");

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
  proses.value = true;
  success.value = false;
  error.value = null;

  try {
    const { data } = await useFetch("/wp-json/api/v1/contact", {
      method: "POST",
      baseURL: "https://primajasa.sementara.net", // ganti dengan domain WP kamu
      body: {
        nama: formState.name,
        email: formState.email,
        no_tel: formState.phone,
        subject: formState.subject,
        pesan: formState.message,
      },
    });

    if (data.value?.success) {
      success.value = true;
      Object.keys(formState).forEach((k) => (formState[k as keyof typeof formState] = "")); // reset form
    } else {
      error.value = data.value?.message || "Gagal mengirim pesan";
    }
  } catch (err: any) {
    error.value = err?.data?.message || "Terjadi kesalahan server";
  } finally {
    proses.value = false;
  }
}


</script>

