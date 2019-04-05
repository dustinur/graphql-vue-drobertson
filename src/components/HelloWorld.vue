<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs10 offset-xs5>
        <h2 class="pb-3">Characters</h2>
      </v-flex>
      <v-flex v-for="c in characters" pa-3 xs4 sm2 md2>
        <h2>{{ c.name }}</h2>
        <!-- <h2>{{ c.imageUrl }}</h2> -->
        <!-- <video
          :src="'../assets/webm/' + c.imageUrl"
          width="249"
          height="357"
          autoplay
          loop
          type="video/webm"
        /> -->
      </v-flex>
      <video
        src="../assets/webm/assire-01.webm"
        width="249"
        height="357"
        autoplay
        loop
        type="video/webm"
      />
    </v-layout>
  </v-container>
</template>

<script>
// import axios from "axios";
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
          imageUrl
        }
      }
    `
  }
};
</script>

<style>
.v-content__wrap {
  background: #333;
  color: #cecbcb;
}
</style>
