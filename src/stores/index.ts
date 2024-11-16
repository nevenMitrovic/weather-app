import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePlaceStore = defineStore(
  'place',
  () => {
    const place = ref([])

    //actions
    const addPlace = (newPlace) => {
      place.value = [newPlace]
    }

    return { place, addPlace }
  },
  {
    persist: {
      storage: localStorage,
      pick: ['place'],
    },
  },
)
