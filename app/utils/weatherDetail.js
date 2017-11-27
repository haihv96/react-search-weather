export const convertWeatherDetailProperty = (weather) => {
  return Object.assign({}, weather, {
    speed: (weather.wind.speed * 3.6).toFixed(2),
    visibility: (weather.visibility / 1000).toFixed(2),
    main: {
      temp: (weather.main.temp - 273.15).toFixed(2),
      temp_min: (weather.main.temp_min - 273.15).toFixed(2),
      temp_max: (weather.main.temp_max - 273.15).toFixed(2),
    }
  });
}
