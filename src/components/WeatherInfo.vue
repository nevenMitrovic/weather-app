<template>
  <div
    v-show="isVisible"
    class="w-full max-w-sm p-6 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#D6E6FB]/85 z-10 p-4 rounded-xl"
  >
    <button
      @click="handleClick"
      class="absolute top-2 right-2 text-white bg-gray-700 bg-opacity-50 hover:bg-opacity-30 rounded-full w-[20px] h-[20px] flex items-center justify-center"
    >
      <span class="text-lg font-semibold">×</span>
    </button>
    <div class="space-y-2 text-gray-900">
      <div
        v-for="(sections, index) in data"
        :key="index"
        class="flex items-center justify-between gap-2 py-4 text-sm text-center"
      >
        <div
          v-for="(section, index) in sections"
          :key="index"
          class="w-1/3 flex flex-col items-center justify-center gap-1"
        >
          <div class="w-[20px]">
            <img :src="section.img" alt="icon" />
          </div>
          <div class="font-bold">{{ section.value }} km/h</div>
          <div class="opacity-80 text-xs">{{ section.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { generateWeatherData } from '@/data'
import type { WeatherInfoData } from '@/types'
import { computed, type PropType } from 'vue'

const props = defineProps({
  place: {
    type: Object,
    required: true,
  },
  show: {
    type: Boolean,
    default: false,
    required: true,
  },
  handleVisibility: {
    type: Function as PropType<() => void>,
    required: true,
  },
})

const isVisible = computed(() => props.show)
const handleClick = () => {
  props.handleVisibility()
}

const data: WeatherInfoData[][] = generateWeatherData(props)
</script>
