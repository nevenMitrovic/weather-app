<template>
  <div class="flex flex-col items-center p-6 gap-2 min-h-screen bg-background">
    <DateDisplay />

    <!-- Search Bar -->
    <SearchBar @place-data="handlePlaceData" />

    <!-- Weather Card -->
    <div v-for="(place, index) in placeData" :key="index">
      <WeatherCard :place="place" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DateDisplay from '@/components/DateDisplay.vue'
import SearchBar from '@/components/SearchBar.vue'
import WeatherCard from './components/WeatherCard.vue'

const placeData = ref([])
const handlePlaceData = (data) => {
  placeData.value.push(data)
}
</script>
