<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Players</h1>
    </div>

    <div v-if="loading" class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>

    <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
      {{ error }}
    </div>

    <div v-else class="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr class="bg-gradient-to-r from-gray-50 to-gray-100">
            <th scope="col" class="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" class="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Team
            </th>
            <th scope="col" class="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Position
            </th>
            <th scope="col" class="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Number
            </th>
            <th scope="col" class="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Goals
            </th>
            <th scope="col" class="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Assists
            </th>
            <th scope="col" class="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Appearances
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="player in players" :key="player.id" class="hover:bg-gray-50 transition-colors duration-200">
            <td class="px-8 py-5 whitespace-nowrap">
              <div class="flex items-center space-x-4">
                <div>
                  <div class="text-sm font-semibold text-gray-900">{{ player.name }}</div>
                  <div class="text-sm text-gray-500">{{ player.position }}</div>
                </div>
              </div>
            </td>
            <td class="px-8 py-5 whitespace-nowrap">
              <div class="text-sm text-gray-900 font-medium">{{ player.team }}</div>
            </td>
            <td class="px-8 py-5 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ player.position }}</div>
            </td>
            <td class="px-8 py-5 whitespace-nowrap">
              <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                {{ player.number }}
              </div>
            </td>
            <td class="px-8 py-5 whitespace-nowrap">
              <div class="text-sm font-semibold text-gray-900">{{ player.stats.goals }}</div>
            </td>
            <td class="px-8 py-5 whitespace-nowrap">
              <div class="text-sm font-semibold text-gray-900">{{ player.stats.assists }}</div>
            </td>
            <td class="px-8 py-5 whitespace-nowrap">
              <div class="text-sm font-semibold text-gray-900">{{ player.stats.appearances }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Player } from "types";

const players = ref<Player[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

const fetchPlayers = async () => {
  try {
    const response = await fetch("/api/players");
    if (!response.ok) {
      throw new Error("Failed to fetch players");
    }
    players.value = (await response.json()).data;
  } catch (err) {
    error.value = err instanceof Error ? err.message : "An error occurred";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchPlayers();
});
</script>
