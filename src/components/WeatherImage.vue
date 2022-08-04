<template>
  <img
    :src="`https://openweathermap.org/img/wn/${code}@2x.png`"
    :alt="alternate"
    class="img"
  />
</template>

<script>
export default {
  name: "WeatherImage",
  props: {
    code: String,
    alternate: String,
  },
};
</script>

<style></style>
