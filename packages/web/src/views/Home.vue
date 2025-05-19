<template>
  <div class="space-y-8">
    <section class="text-center py-12">
      <h2 class="text-4xl font-bold text-gray-800 mb-4">Welcome to FootballSphere</h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Your ultimate destination for football statistics, live scores, and team analytics
      </p>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <FeatureCard v-for="card in cards" :key="card.id" :card="card" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import FeatureCard from "../components/FeatureCard.vue";
import { CardData } from "types";

const cards = ref<CardData[]>([]);

const fetchCards = async () => {
  try {
    const response = await fetch("/api/cards");
    if (!response.ok) {
      throw new Error("Failed to fetch cards");
    }
    cards.value = (await response.json()).data;
  } catch (error) {
    console.error("Error fetching cards:", error);
  }
};

onMounted(() => {
  fetchCards();
});
</script>
