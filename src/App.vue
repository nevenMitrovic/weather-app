<template>
  <div class="flex flex-col items-center p-6 gap-2 min-h-screen bg-background">
    <DateDisplay />

    <!-- Search Bar -->
    <SearchBar @place-data="handlePlaceData" />

    <!-- Weather Card -->
    <div class="flex flex-row flex-wrap gap-2 max-w-[1100px]">
      <div v-for="(place, index) in placeData" :key="index">
        <WeatherCard :place="place" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DateDisplay from '@/components/DateDisplay.vue'
import SearchBar from '@/components/SearchBar.vue'
import WeatherCard from './components/WeatherCard.vue'
import { usePlaceStore } from './stores/index'

const placeStore = usePlaceStore()

const placeData = ref([])
if (placeStore.place.length != 0) {
  placeData.value = placeStore.place
}
const handlePlaceData = (data: any) => {
  placeData.value.push(data)
}
</script>
