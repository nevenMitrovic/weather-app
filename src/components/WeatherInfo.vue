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
      <div class="flex items-center justify-between gap-2 py-4 text-sm text-center">
        <div class="w-1/3 flex flex-col items-center justify-center gap-1">
          <div class="w-[20px]">
            <img src="@/assets/img/wind.png" alt="wind_icons" />
          </div>
          <div class="font-bold">{{ place.current.wind_kph }} km/h</div>
          <div class="opacity-80 text-xs">wind</div>
        </div>
        <div class="w-1/3 flex flex-col items-center justify-center gap-1">
          <div class="w-[20px]">
            <img src="@/assets/img/humidity.png" alt="wind_icons" />
          </div>
          <div class="font-bold">{{ place.current.humidity }}%</div>
          <div class="opacity-80 text-xs">humidity</div>
        </div>
        <div class="w-1/3 flex flex-col items-center justify-center gap-1">
          <div class="w-[20px]">
            <img src="@/assets/img/precipitation.png" alt="wind_icons" />
          </div>
          <div class="font-bold">{{ place.current.precip_mm }} mm</div>
          <div class="opacity-80 text-xs">precipitation</div>
        </div>
      </div>

      <div class="flex items-center justify-between gap-2 py-4">
        <div class="w-1/3 flex flex-col items-center justify-center gap-1">
          <div class="w-[20px]">
            <img src="@/assets/img/wind-direction.png" alt="wind_icons" />
          </div>
          <div class="font-bold">{{ place.current.wind_dir }}</div>
          <div class="opacity-80 text-xs">direction</div>
        </div>
        <div class="w-1/3 flex flex-col items-center justify-center gap-1">
          <div class="w-[20px]">
            <img src="@/assets/img/thermometer.png" alt="wind_icons" />
          </div>
          <div class="font-bold">{{ place.current.feelslike_c }}&deg;</div>
          <div class="opacity-80 text-xs">Feels</div>
        </div>
        <div class="w-1/3 flex flex-col items-center justify-center gap-1">
          <div class="w-[20px]">
            <img src="@/assets/img/sun.png" alt="wind_icons" />
          </div>
          <div class="font-bold">{{ place.current.uv }}</div>
          <div class="opacity-80 text-xs">UV index</div>
        </div>
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
