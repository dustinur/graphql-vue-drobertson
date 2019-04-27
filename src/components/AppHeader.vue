<template>
  <div>
    <v-toolbar app dark color="#111">
      <v-toolbar-side-icon class="ml-2">
        <router-link to="/">
          <img src="../assets/witcher-logo-b2.png" height="35">
        </router-link>
      </v-toolbar-side-icon>

      <v-toolbar-title class="headline text-uppercase font-weight-black">
        <span>The</span>
        <span class="text-header">W</span>
        <span>itcher</span>
        <span class="font-weight-light char-class">Character<span class="">DB</span></span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="link in links" :key="link.icon" :to="link.where" flat class=" text-uppercase font-weight-medium">
          {{
          link.title
          }}
        </v-btn>
      </v-toolbar-items>

      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list id="mobile-menu" two-line>
          <v-list-tile color="#fff" v-for="link in links" :key="link.icon" :to="link.where">
            <v-list-tile-content>
              <v-list-tile-title class="subheading text-uppercase font-weight-medium">{{ link.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn
        color="#edcd95"
        flat
        href="https://github.com/dustinur/graphql-vue-drobertson"
        target="_blank"
      >
        <span class="text-uppercase font-weight-medium mr-2">github</span>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      links: [
        { title: "GQL Characters", where: "/", icon: "home" },
        { title: "GQL Create", where: "/create", icon: "info" },
        { title: "Rest Characters", where: "/restlist", icon: "warning" },
        { title: "Rest Create", where: "/rest-create", icon: "test" }
      ]
    };
  }
};
</script>

<style>
#mobile-menu {
  background: #111;
}
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
