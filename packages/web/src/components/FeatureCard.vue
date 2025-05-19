<template>
  <router-link :to="route">
    <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div class="relative h-48 w-full">
        <img :src="imageUrl" :alt="title" class="w-full h-full object-cover" />
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold text-blue-600 mb-3">{{ title }}</h3>
        <p class="text-gray-600">{{ description }}</p>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { CardData } from "types";

const { card } = defineProps<{
  card: CardData;
}>();

const { title, description, imageUrl, route } = card;
</script>
