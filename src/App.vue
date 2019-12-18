<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>
