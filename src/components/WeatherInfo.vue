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
      <div class="flex flex-col items-center gap-1">
        <div class="w-[20px]">
          <img src="@/assets/img/wind.png" alt="wind_icons" width="w-[20px]" />
        </div>
        <div class="font-bold">{{ place.current.wind_kph }} km/h</div>
        <div class="opacity-80">wind</div>
      </div>
      <div class="flex items-center space-x-2">
        <span class="w-4 h-4 bg-gray-500 rounded-full"></span>
        <span>93% humidity</span>
      </div>
      <div class="flex items-center space-x-2">
        <span class="w-4 h-4 bg-gray-500 rounded-full"></span>
        <span>0.59 mm precipitation</span>
      </div>
      <div class="flex items-center space-x-2">
        <span class="w-4 h-4 bg-gray-500 rounded-full"></span>
        <span>SE direction</span>
      </div>
      <div class="flex items-center space-x-2">
        <span class="w-4 h-4 bg-gray-500 rounded-full"></span>
        <span>Feels 6</span>
      </div>
      <div class="flex items-center space-x-2">
        <span class="w-4 h-4 bg-gray-500 rounded-full"></span>
        <span>UV index 1</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
</script>
