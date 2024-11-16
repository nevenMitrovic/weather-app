export interface SearchType {
  query: string
  lazyLoad: number | undefined
  results: AutocompleteResponse[] | null
}

export interface AutocompleteResponse {
  id: number
  name: string
  region: string
  country: string
  lat: number
  lon: number
  url: string
}

export interface WeatherInfoData {
  value: string
  img: string
  label: string
}
