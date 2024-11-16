import type { WeatherInfoData } from '@/types/index'

export const generateWeatherData = (props: any): WeatherInfoData[][] => {
  return [
    [
      {
        value: props.place.current.wind_kph,
        label: 'wind',
        img: '../assets/img/wind.png',
      },
      {
        value: props.place.current.humidity,
        label: 'humidity',
        img: '../assets/img/humidity.png',
      },
      {
        value: props.place.current.precip_mm,
        label: 'precipitation',
        img: '../assets/img/precipitation.png',
      },
    ],
    [
      {
        value: props.place.current.wind_dir,
        label: 'direction',
        img: '../assets/img/wind-direction.png',
      },
      {
        value: props.place.current.feelslike_c,
        label: 'Feels',
        img: '../assets/img/thermometer.png',
      },
      {
        value: props.place.current.uv,
        label: 'UV index',
        img: '../assets/img/sun.png',
      },
    ],
  ]
}
