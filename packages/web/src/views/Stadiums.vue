<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Stadiums</h1>

    <div v-if="loading" class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>

    <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
      {{ error }}
    </div>

    <section v-else class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <StadiumCard v-for="stadium in stadiums" :key="stadium.id" :stadium="stadium" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import StadiumCard from "../components/StadiumCard.vue";
import { Stadium } from "types";

const stadiums = ref<Stadium[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

const fetchStadiums = async () => {
  try {
    const response = await fetch("/api/stadiums");
    if (!response.ok) {
      throw new Error("Failed to fetch stadiums");
    }
    stadiums.value = (await response.json()).data;
  } catch (err) {
    error.value = err instanceof Error ? err.message : "An error occurred";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchStadiums();
});
</script>
