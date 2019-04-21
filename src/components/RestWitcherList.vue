<template>
  <v-container grid-list-xl fluid>
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else>
      <v-layout row wrap>
        <div v-if="loading">Loading...</div>

        <v-flex v-else v-for="character in characters" :key="character.id">
          <!-- {{ character.name }} -->
          <RestCharCard :character="character"/>
        </v-flex>
      </v-layout>
    </section>
  </v-container>
</template>

<script>
/* eslint-disable no-console */
import axios from "axios";
import RestCharCard from "./RestCharCard"
const API_URL = "http://localhost:3200/characters";

export default {
  name: "RestWitcherList",
  components: {
    RestCharCard
  },
  data() {
    return {
      characters: [],
      loading: true,
      errored: false
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
        this.errored = true;
      })
      .finally(() => (this.loading = false));
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
};
</script>

<style>
.v-content__wrap {
  background: #111;
  color: #cecbcb;
}
</style>
