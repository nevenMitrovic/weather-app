export interface SearchType {
  query: string
  lazyLoad: number | undefined
  results: AutocompleteResponse[] | null
}

export interface AutocompleteResponse {
  id: string | number
  name: string
  region: string
  country: string
  lat: number
  lon: number
  url: string
}
