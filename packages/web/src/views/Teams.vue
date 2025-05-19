<template>
  <div class="space-y-8">
    <section class="text-center py-8">
      <h2 class="text-4xl font-bold text-gray-800 mb-4">Premier League Teams</h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Click on a team card to view detailed statistics and performance metrics
      </p>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <TeamCard v-for="team in teams" :key="team.id" :team="team" />
    </section>

    <div v-if="loading" class="text-center py-12">
      <p class="text-gray-600">Loading teams...</p>
    </div>

    <div v-if="error" class="text-center py-12">
      <p class="text-red-600">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import TeamCard from "../components/TeamCard.vue";
import { Team } from "types";

const teams = ref<Team[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

const fetchTeams = async () => {
  try {
    loading.value = true;
    const response = await fetch("/api/teams");
    if (!response.ok) {
      throw new Error("Failed to fetch teams");
    }
    const data = await response.json();
    teams.value = data.data;
  } catch (err) {
    error.value = err instanceof Error ? err.message : "An error occurred";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchTeams();
});
</script>
