import axios from "axios";
const apiKey = "159e8f3335019f3dd1541459a44034c2";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5";

export const getTodayWeather = city => {
  return axios({
    method: "GET",
    url: "weather?q=" + city + "&appid=" + apiKey
  });
};
