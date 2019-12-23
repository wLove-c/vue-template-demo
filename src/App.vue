<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
}
#app {
  padding-top: 100px;
  min-height: 100vh;
  text-align: center;
}
</style>
