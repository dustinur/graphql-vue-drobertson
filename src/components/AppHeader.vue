<template>
  <div>
    <v-toolbar app dark>
      <v-toolbar-side-icon>
        <router-link to="/">
          <img src="../assets/witcher-logo-b2.png" height="35" />
        </router-link>
      </v-toolbar-side-icon>

      <v-toolbar-title class="headline text-uppercase">
        <span>The</span>
        <span class="text-red">W</span>
        <span>itcher</span>
        <span class="font-weight-light">Character Database</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">Characters</v-btn>
        <v-btn flat to="/create">Create Character</v-btn>
`        <v-btn flat to="/restlist">Rest Characters</v-btn>
        <v-btn flat to="/rest-create">Rest Create</v-btn>
`      </v-toolbar-items>

      <v-btn flat href="https://github.com/dustinur/graphql-vue-drobertson" target="_blank">
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