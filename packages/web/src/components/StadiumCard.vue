<template>
  <div
    class="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
  >
    <div class="relative h-64 w-full">
      <img :src="stadium.imageUrl" :alt="stadium.name" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-6">
        <h2 class="text-2xl font-bold text-white mb-1">{{ stadium.name }}</h2>
        <p class="text-white/90">{{ stadium.city }}</p>
      </div>
    </div>

    <div class="p-6">
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-1">
          <p class="text-sm text-gray-500">Home Team</p>
          <p class="font-semibold text-gray-900">{{ stadium.homeTeam }}</p>
        </div>
        <div class="space-y-1">
          <p class="text-sm text-gray-500">Capacity</p>
          <p class="font-semibold text-gray-900">{{ stadium.capacity.toLocaleString() }} seats</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Stadium } from "types";

const { stadium } = defineProps<{
  stadium: Stadium;
}>();
</script>
