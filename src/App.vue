<template>
  <v-app dark>
    <v-toolbar app dark>
      <v-toolbar-side-icon>
        <v-img :src="require('../src/assets/witcher-logo-b2.png')"></v-img>
      </v-toolbar-side-icon>

      <v-toolbar-title class="headline text-uppercase">
        <span>The</span>
        <span class="text-red">W</span>
        <span>itcher</span>
        <span class="font-weight-light">Character Database</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn flat href="https://github.com/dustinur/graphql-vue-drobertson" target="_blank">
        <span class="mr-2">DR</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <CreateChar/>
      <WitcherList/>
    </v-content>
  </v-app>
</template>

<script>
import WitcherList from "./components/WitcherList";
import CreateChar from "./components/CreateChar";

export default {
  name: "App",
  components: {
    CreateChar,
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
.text-red {
  color: #d70926;
}
</style>
