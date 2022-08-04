<template>
  <div class="data" v-if="weather">
    <WeatherImage
      :code="`${weather.data.weather[0].icon}`"
      :alternate="`${weather.data.weather[0].description}`"
    />
    <h2 className="title">{{ weather.data.name }}</h2>
    <h2 className="location">{{ weather.data.sys.country }}</h2>
    <div className="weather-description">
      <div>
        <h3>Humidity</h3>
        <p>{{ weather.data.main.humidity }}%</p>
      </div>
      <div>
        <h3>Low</h3>
        <p>{{ weather.data.main.temp_min }}°C</p>
      </div>
      <div>
        <h3>Current</h3>
        <p>{{ weather.data.main.temp }}°C</p>
      </div>
      <div>
        <h3>High</h3>
        <p>{{ weather.data.main.temp_max }}°C</p>
      </div>
      <div>
        <h3>Feels like</h3>
        <p>{{ weather.data.main.feels_like }}°C</p>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherImage from "@/components/WeatherImage.vue";

export default {
  name: "WeatherData",
  components: {
    WeatherImage,
  },
  props: {
    weather: Object,
  },
};
</script>

<style scoped>
.weather-description h3 {
  color: rgb(21, 28, 28);
  font-weight: 500;
}

.weather-description p {
  color: rgb(21, 28, 28);
  font-size: 40px;
  margin: 0;
}

@media screen and (min-width: 768px) {
  .weather-description {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 50px;
    margin-top: 30px;
    text-align: center;
  }

  .header-div {
    margin: 20px 90px 20px 90px;
  }

  section {
    text-align: center;
  }
}
</style>
