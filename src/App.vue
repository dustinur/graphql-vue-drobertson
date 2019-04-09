<template>
  <v-app dark>
    <v-toolbar app light>
      <v-toolbar-side-icon>
        <v-img :src="require('../src/assets/witcher-logo-b.png')"></v-img>
      </v-toolbar-side-icon>

      <v-toolbar-title class="headline text-uppercase">
        <span>The Witcher</span>
        <span class="font-weight-light">Charcter Database</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn flat href="https://github.com/dustinur/graphql-vue-drobertson" target="_blank">
        <span class="mr-2">DR</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <WitcherList/>
    </v-content>
  </v-app>
</template>

<script>
import WitcherList from "./components/WitcherList";

export default {
  name: "App",
  components: {
    WitcherList
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
