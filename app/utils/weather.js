export const convertIdsProvince = (inputProvinces, provincesTxt) => {
  let idsProvince = [];
  let idsInputProvinceFail = [];
  inputProvinces.forEach(inputProvince => {
    let index = provincesTxt.indexOf(inputProvince.get('name').toLowerCase());
    if (![0, -1].includes(index)) {
      idsProvince.push(provincesTxt.slice(index - 50, index).trim().split(' ').splice(-1));
    } else {
      idsInputProvinceFail.push(inputProvince.get('id'));
    }
  });
  return {
    idsInputProvinceFail,
    idsProvince
  }
};

export const convertWeatherProperty = (oldProps, weathers) => {
  weathers.map(weather => {
    let windSpeed = weather.wind.speed * 3.6;
    let visibility = weather.visibility / 1000;
    weather.wind.speed = windSpeed.toFixed(2);
    weather.visibility = visibility.toFixed(2);
    weather.diffArgTemp = (weather.main.temp - oldProps.argTemp).toFixed(2);
    if (weather.main.temp_day > 200) {
      weather.main.temp_day = (weather.main.temp_day - 273.15).toFixed(2);
      weather.main.temp_min = (weather.main.temp_min - 273.15).toFixed(2);
      weather.main.temp_max = (weather.main.temp_max - 273.15).toFixed(2);
    }
  });
  return weathers;
}
