<template>
  <div>
    <AppMessage />
    <hr>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/users/10">Go to Users for team 10</router-link>
    <router-link to="/users/12">Go to Users for team 12</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import AppMessage from "./components/AppMessage.vue";

export default {
  name: "App",
  components: {
    AppMessage,
  },
  data() {
    return {
      
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
