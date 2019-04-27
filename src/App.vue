<template>
  <v-app dark>

    <AppHeader/>
    
    <v-content>
      <router-view></router-view>
    </v-content>
  
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>

<style>
.char-class { color: #b4b4b4; }
.text-red { color: #af4343; }
</style>
