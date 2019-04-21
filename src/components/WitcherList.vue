/* eslint-disable */
<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex v-for="character in characters" :key="character.id">
        {{ character.name }}
        <!-- <CharCard :character="character"/> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
// import { ALL_CHARACTERS_QUERY } from "../constants/graphql";
// import CharCard from "./CharCard.vue";
const API_URL = "http://localhost:3200/characters";

export default {
  components: {
    // CharCard
  },
  data() {
    return {
      characters: []
    };
  },

  methods: {},
  mounted() {
    axios
      .get(API_URL)
      .then(response => response.data)
      .then(result => {
        this.characters = result;
      })
      .catch(error => {
        console.log(error);
      });
  }
  // fetch(API_URL)
  //   .then(response => response.json())
  //   .then(result => {
  //     this.characters = result;
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
  // }
  // apollo: {
  //   characters: {
  //     query: ALL_CHARACTERS_QUERY
  //   }
  // }
};
</script>

<style>
.v-content__wrap {
  background: #111;
  color: #cecbcb;
}
</style>
