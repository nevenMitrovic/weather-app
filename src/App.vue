<template>
  <div class="flex flex-col items-center p-6 min-h-screen bg-background">
    <DateDisplay />

    <!-- Search Bar -->
    <SearchBar />

    <!-- Weather Card -->
    <div
      class="bg-gradient-to-b from-purple-800 to-purple-900 text-white p-6 rounded-xl shadow-lg w-full max-w-sm"
    >
      <div class="flex justify-between items-center mb-4">
        <div class="text-lg font-medium">London</div>
        <div class="text-sm">1:46</div>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-8xl font-light">8</div>
        <div class="text-lg mb-2">Light rain</div>
      </div>

      <!-- Weekly Forecast -->
      <div class="mt-4 border-t border-purple-700 pt-4">
        <div class="flex justify-between mb-2">
          <div>Saturday</div>
          <div class="flex items-center space-x-1">
            <span>14°</span><span>/</span><span>8°</span>
          </div>
        </div>
        <div class="flex justify-between mb-2">
          <div>Sunday</div>
          <div class="flex items-center space-x-1">
            <span>12°</span><span>/</span><span>11°</span>
          </div>
        </div>
        <div class="flex justify-between mb-2">
          <div>Monday</div>
          <div class="flex items-center space-x-1">
            <span>11°</span><span>/</span><span>9°</span>
          </div>
        </div>
        <div class="text-right">
          <button class="text-sm text-purple-300 hover:text-purple-400">More &rarr;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DateDisplay from '@/components/DateDisplay.vue'
import SearchBar from '@/components/SearchBar.vue'
</script>
