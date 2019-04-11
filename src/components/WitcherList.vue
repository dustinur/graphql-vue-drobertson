// Play on hover

<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex v-for="character in characters" :key="character.id">
        <CharCard :character="character"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import axios from "axios";
import gql from "graphql-tag";
import CharCard from "./CharCard.vue";

export default {
  components: {
    CharCard
  },
  data() {
    return {
      characters: []
    };
  },
  mounted() {
    // return axios
    //   .get("https://pokeapi.co/api/v2/pokemon/1")
    //   .then(response => (this.info = response));
  },
  apollo: {
    characters: gql`
      query {
        characters {
          id
          name
          charClass
          imageUrl
          poster
          description
        }
      }
    `
  }
};
</script>

<style>
.v-content__wrap {
  background: #111;
  color: #cecbcb;
}
</style>
