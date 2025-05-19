<template>
  <div
    class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
    :class="{ 'ring-2 ring-blue-500 min-h-96': isExpanded, 'h-28': !isExpanded }"
    @click="toggleExpand"
  >
    <div class="p-6">
      <div class="flex items-center space-x-4">
        <img :src="logo" :alt="name" class="w-16 h-16 object-contain" />
        <div>
          <h3 class="text-xl font-semibold text-gray-800">{{ name }}</h3>
        </div>
      </div>
    </div>

    <div v-if="isExpanded" class="px-6 pb-6 border-t border-gray-100">
      <div class="mt-4 grid grid-cols-2 gap-4">
        <div class="bg-gray-50 p-3 rounded-lg">
          <p class="text-sm text-gray-600">Played</p>
          <p class="text-xl font-semibold text-gray-800">{{ stats.played }}</p>
        </div>
        <div class="bg-gray-50 p-3 rounded-lg">
          <p class="text-sm text-gray-600">Won</p>
          <p class="text-xl font-semibold text-green-600">{{ stats.won }}</p>
        </div>
        <div class="bg-gray-50 p-3 rounded-lg">
          <p class="text-sm text-gray-600">Drawn</p>
          <p class="text-xl font-semibold text-yellow-600">{{ stats.drawn }}</p>
        </div>
        <div class="bg-gray-50 p-3 rounded-lg">
          <p class="text-sm text-gray-600">Lost</p>
          <p class="text-xl font-semibold text-red-600">{{ stats.lost }}</p>
        </div>
      </div>
      <div class="mt-4 bg-blue-50 p-3 rounded-lg">
        <p class="text-sm text-gray-600">Points</p>
        <p class="text-2xl font-bold text-blue-600">{{ stats.points }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Team } from "types";

const { team } = defineProps<{
  team: Team;
}>();

const { name, logo, stats } = team;

const isExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>
