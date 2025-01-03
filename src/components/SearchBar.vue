<template>
  <div class="w-full max-w-md mb-6">
    <input
      v-model="search.query"
      @input="handleSearch"
      type="text"
      placeholder="Search city..."
      class="w-full px-4 py-2 border-2 border-primary rounded-xl focus:outline-none focus:border-secondary transition-colors shadow-md mb-1"
    />
    <div
      class="w-full bg-white text-sm px-4 py-1 shadow-md rounded-xl focus:outline-none"
      v-if="search.results?.length > 0 && search.results != null"
    >
      <div v-for="suggestion in search.results" :key="suggestion.id">
        <button @click="getWeather(suggestion.id)" class="w-full text-left hover:text-secondary">
          {{ suggestion.name }}, {{ suggestion.region }}, {{ suggestion.country }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { SearchType } from '@/types/index'
import { usePlaceStore } from '../stores/index'

const placeStore = usePlaceStore()

const emit = defineEmits(['place-data'])

const search = reactive<SearchType>({
  query: '',
  lazyLoad: undefined,
  results: null,
})

const handleSearch = () => {
  if (search.query !== '') {
    clearTimeout(search.lazyLoad)
    search.lazyLoad = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/search.json?key=40c5956ff1da43adb10142231241311&q=${search.query}`,
        )
        const data = await res.json()
        search.results = data
      } catch (error) {
        search.results = null
        console.error(error)
        throw error
      }
    }, 500)
  } else {
    search.results = null
  }
}

const getWeather = async (id: number) => {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=40c5956ff1da43adb10142231241311&q=id:${id}&days=3&aqi=no&alerts=no`,
    )
    const data = await res.json()
    emit('place-data', data)
    search.query = ''
    search.results = null
    placeStore.addPlace(data)
  } catch (error) {
    console.error(error)
    throw error
  }
}
</script>
