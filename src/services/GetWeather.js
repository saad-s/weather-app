import axios from "axios";

// NOTE: this requires API key from openweathermap.org

const apiClient = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  ofLocation(city) {
    return apiClient.get("/weather", {
      params: {
        units: "metric",
        appid: process.env.VUE_APP_WEATHER_API_KEY,
        q: city,
      },
    });
  },
};
