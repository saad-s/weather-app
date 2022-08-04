<template>
  <div class="home">
    <form @submit.prevent="handleSearch">
      <v-search label="location" v-model="location" type="text" />
      <v-button title="Search" />
    </form>
    <section>
      <div class="header-div">
        <div>
          <WeatherData :weather="weather" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueButton from "@/components/VueButton.vue";
import VueInput from "@/components/VueInput.vue";
import GetWeather from "@/services/GetWeather.js";
import WeatherData from "@/components/WeatherData.vue";

export default {
  name: "HomeView",
  components: {
    "v-button": VueButton,
    "v-search": VueInput,
    WeatherData,
  },
  data() {
    return {
      weather: null,
      location: "Karachi",
    };
  },
  methods: {
    handleSearch() {
      if (this.location.length) {
        GetWeather.ofLocation(this.location)
          .then((response) => {
            this.weather = response;
          })
          .catch((error) => {
            console.log(error);
          });
      }
      this.location = "";
    },
  },
  created() {
    if (this.location.length) {
      GetWeather.ofLocation(this.location)
        .then((response) => {
          this.weather = response;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    this.location = "";
  },
};
</script>
