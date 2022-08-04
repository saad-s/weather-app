<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
html {
  /* to fix banding in gradient */
  height: 100%;
}

body {
  background: #008793;
  background-image: linear-gradient(
    to right bottom,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #919191; */
  color: black;
}

nav {
  padding: 30px;
  color: #ffffff;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.header-div {
  background-color: rgb(147, 147, 147);
  margin: 20px;
  padding: 100px 0 0 0;
}

.header-div div {
  background-color: white;
  text-align: center;
  padding-bottom: 10px;
}

button {
  border-radius: 20px;
  padding: 10px;
  outline: none;
  border: transparent 1px;
  color: rgb(255, 255, 255);
  background-color: black;
  font-weight: 500;
}

.title {
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 0;
}

.location {
  font-weight: 400;
  font-size: 40px;
  margin-bottom: 0;
}

.data img {
  border-radius: 50%;
  background-color: #18232b;
  padding: 10px;
  margin-top: -60px;
}

.header-div {
  background-color: rgb(147, 147, 147);
  margin: 20px;
  padding: 100px 0 0 0;
}

.header-div div {
  background-color: white;
  text-align: center;
  padding-bottom: 10px;
}
</style>
