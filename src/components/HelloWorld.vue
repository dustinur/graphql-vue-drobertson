// Play on hover

<template>
  <v-container>
    <v-layout row wrap align-center justify-center fill-height>
      <v-flex xs12>
        <h2 class="pb-3">Characters</h2>
      </v-flex>
      <v-flex v-for="c in characters" v-bind:key="c.id" m5 xs12 sm6 lg4 xl3>
        <h2>{{ c.name }}</h2>
        <video 
        :src="`${publicPath}img/${c.imageUrl}`" 
        width="300" 
        loop 
        type="video/webm"
        @mouseover="play()"
        @mouseleave="pause()"
      />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import axios from "axios";
import gql from "graphql-tag";

export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      videoElement: null,
      paused: null
    };
  },
  mounted() {
    // return axios
    //   .get("https://pokeapi.co/api/v2/pokemon/1")
    //   .then(response => (this.info = response));
  },
  methods: {
    play() {
      event.target.play();
    },
    pause() {
      event.target.pause();
    }
  },
  apollo: {
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
  background: #111;
  color: #cecbcb;
}
</style>
