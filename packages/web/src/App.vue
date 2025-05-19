<template>
  <div class="min-h-screen bg-gray-50">
    <Header>
      <div class="flex items-center justify-between">
        <router-link to="/"><h1 class="text-3xl font-bold text-blue-600">FootballSphere</h1></router-link>
        <nav class="space-x-6">
          <router-link to="/matches" class="text-gray-600 hover:text-blue-600 transition-colors">Matches</router-link>
          <router-link to="/teams" class="text-gray-600 hover:text-blue-600 transition-colors">Teams</router-link>
          <router-link to="/players" class="text-gray-600 hover:text-blue-600 transition-colors">Players</router-link>
          <router-link to="/stadiums" class="text-gray-600 hover:text-blue-600 transition-colors">Stadiums</router-link>
        </nav>
      </div>
    </Header>

    <main class="container mx-auto px-4 py-8">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from "./components/Header.vue";
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
