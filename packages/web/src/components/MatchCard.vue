<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6">
    <div class="flex items-center justify-between">
      <div class="flex-1 flex items-center space-x-4">
        <img :src="match.homeTeam.logo" :alt="match.homeTeam.name" class="w-12 h-12 object-contain" />
        <span class="font-semibold text-gray-800">{{ match.homeTeam.name }}</span>
      </div>

      <div class="flex items-center space-x-4" v-if="match.score">
        <span class="text-2xl font-bold text-gray-800">{{ match.score.home }}</span>
        <span class="text-gray-400">-</span>
        <span class="text-2xl font-bold text-gray-800">{{ match.score.away }}</span>
      </div>

      <div class="flex-1 flex items-center justify-end space-x-4">
        <span class="font-semibold text-gray-800">{{ match.awayTeam.name }}</span>
        <img :src="match.awayTeam.logo" :alt="match.awayTeam.name" class="w-12 h-12 object-contain" />
      </div>
    </div>

    <div class="mt-4 flex items-center justify-between text-sm text-gray-600">
      <div class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span>{{ formatDate(match.date) }}</span>
      </div>
      <div class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>{{ match.location }}</span>
      </div>
      <div class="flex items-center space-x-2">
        <span :class="getStatusClass(match.status)">{{ match.status }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Match } from "types";

const { match } = defineProps<{
  match: Match;
}>();

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const getStatusClass = (status: Match["status"]) => {
  const classes: Record<Match["status"], string> = {
    LIVE: "text-green-600 font-semibold",
    COMPLETED: "text-yellow-600",
    SCHEDULED: "text-blue-600",
    CANCELLED: "text-gray-600",
  };
  return classes[status] || "text-gray-600";
};
</script>
