// ~/composables/primajasa.ts
export const usePrimajasa = () => {
  const armadaData = ref([
    {
      city: "Jakarta",
      locations: [
        { name: "Pool Primajasa Kampung Rambutan", coordinates: [106.886, -6.308] },
        { name: "Terminal Lebak Bulus", coordinates: [106.775, -6.289] },
      ],
    },
    {
      city: "Bandung",
      locations: [
        { name: "Pool Primajasa Dipatiukur", coordinates: [107.618, -6.891] },
        { name: "Terminal Leuwi Panjang", coordinates: [107.584, -6.936] },
      ],
    },
    {
      city: "Tasikmalaya",
      locations: [
        { name: "Agen Primajasa Plaza Asia", coordinates: [108.221, -7.327] },
        { name: "Terminal Indihiang", coordinates: [108.204, -7.338] },
      ],
    },
  ]);

  return { armadaData };
};
