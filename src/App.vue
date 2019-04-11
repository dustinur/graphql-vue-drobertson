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
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.text-red {
  color: #d70926;
}
</style>
