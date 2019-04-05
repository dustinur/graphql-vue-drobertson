<template>
  <v-app>
    <v-toolbar app dark>
      <v-toolbar-side-icon>
        <v-img :src="require('../src/assets/witcher-logo-w.png')"></v-img>
      </v-toolbar-side-icon>

      <v-toolbar-title class="headline text-uppercase">
        <span>The Witcher</span>
        <span class="font-weight-light">Charcter Guide</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn flat href="https://github.com/dustinur/graphql-vue-drobertson" target="_blank">
        <span class="mr-2">DR</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
</style>
