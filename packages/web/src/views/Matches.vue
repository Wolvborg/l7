<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Matches</h1>

    <div v-if="loading" class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>

    <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
      {{ error }}
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <MatchCard v-for="match in matches" :key="match.id" :match="match" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import MatchCard from "../components/MatchCard.vue";
import { Match } from "types";

const matches = ref<Match[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

const fetchMatches = async () => {
  try {
    const response = await fetch("/api/matches");
    if (!response.ok) {
      throw new Error("Failed to fetch matches");
    }
    matches.value = (await response.json()).data;
  } catch (err) {
    error.value = err instanceof Error ? err.message : "An error occurred";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchMatches();
});
</script>
