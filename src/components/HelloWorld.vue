<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <div>{{ characters }}</div>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import gql from "graphql-tag";

export default {
  data() {
    return {
      info: ""
    };
  },
  mounted() {
    // return axios
    //   .get("https://pokeapi.co/api/v2/pokemon/1")
    //   .then(response => (this.info = response));
  },
  apollo: {
    // Simple query that will update the 'characters' vue property
    characters: gql`
      query {
        characters {
          id
          name
        }
      }
    `
  }
};
</script>

<style>
</style>
