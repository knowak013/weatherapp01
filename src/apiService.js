export const getWeatherByCity = (city) => {
  return fetch(
    `http://api.weatherapi.com/v1/current.json?key=9e9b575d1574482e89d155449232102&q=${city}&aqi=no`
  )
    .then((resp) => resp.json())
    .then((data) => data);
};
