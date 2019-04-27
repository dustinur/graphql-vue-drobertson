<template>
  <div>
    <v-toolbar app dark color="#111">
      <v-toolbar-side-icon>
        <router-link to="/">
          <img src="../assets/witcher-logo-b2.png" height="35">
        </router-link>
      </v-toolbar-side-icon>

      <v-toolbar-title class="headline text-uppercase">
        <span>The</span>
        <span class="text-header">W</span>
        <span>itcher</span>
        <span class="font-weight-light char-class">Character Database</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down char-class">
        <v-btn flat to="/">Graphql characters</v-btn>
        <v-btn flat to="/create">Graphql Create</v-btn>
        <v-btn flat to="/restlist">Rest Characters</v-btn>
        <v-btn flat to="/rest-create">Rest Create</v-btn>
      </v-toolbar-items>

      <v-btn color="#edcd95" flat href="https://github.com/dustinur/graphql-vue-drobertson" target="_blank">
        <span class="mr-2">github</span>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style>
.char-button {
  color: #158775;
}
.char-class {
  color: #b4b4b4;
}
.text-header {
  color: #af4343;
}
.char-name {
  color: #edcd95;
}
</style>
