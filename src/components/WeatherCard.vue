<template>
  <div
    class="relative bg-gradient-to-b from-primary to-secondary text-white p-6 rounded-xl shadow-lg w-full max-w-sm"
  >
    <div class="flex justify-between items-center mb-4">
      <div class="text-lg font-medium">{{ place.location.name }}</div>
      <div class="text-sm">{{ place.location.localtime.split(' ')[1] }}</div>
    </div>
    <div class="flex flex-col items-center">
      <img :src="place.current.condition.icon" alt="icon" width="200px" class="mx-auto -mb-10" />
      <div class="text-8xl font-light">{{ Math.round(place.current.temp_c) }}&deg;</div>
      <div class="text-lg mb-2">{{ place.current.condition.text }}</div>
    </div>

    <!-- Weekly Forecast -->
    <div class="mt-4 border-t border-accent pt-4">
      <div
        v-for="(day, index) in place.forecast.forecastday"
        :key="index"
        class="flex justify-between mb-2"
      >
        <div class="w-1/3">
          {{ new Date(day.date).toLocaleDateString('en-us', { weekday: 'long' }) }}
        </div>
        <div class="w-1/3 flex items-center">
          <img :src="day.day.condition.icon" alt="icon" width="30px" class="mx-auto" />
        </div>
        <div class="w-1/3 flex justify-center items-center space-x-1">
          <span>{{ Math.round(day.day.maxtemp_c) }}&deg;</span><span>/</span
          ><span>{{ Math.round(day.day.mintemp_c) }}&deg;</span>
        </div>
      </div>
      <div class="text-right">
        <button class="text-sm text-white hover:text-accent" @click="handleInfoVisibilty">
          More &rarr;
        </button>
      </div>
    </div>
    <WeatherInfo :place="place" :show="infoVisibility" :handle-visibility="handleInfoVisibilty" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeatherInfo from '@/components/WeatherInfo.vue'

defineProps({
  place: {
    type: Object,
    required: true,
  },
})

const infoVisibility = ref<boolean>(false)
const handleInfoVisibilty = (): void => {
  infoVisibility.value = !infoVisibility.value
}
</script>
