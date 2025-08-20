import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
export default defineNuxtPlugin((nuxtApp) => {
  // contoh fungsi
    nuxtApp.vueApp.component('Splide', Splide);
})
