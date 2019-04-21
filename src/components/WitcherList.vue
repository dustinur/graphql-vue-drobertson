<template>
  <v-container grid-list-xl fluid>
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else>
      <v-layout row wrap>
        <div v-if="$apollo.loading">Loading...</div>

        <v-flex v-else v-for="character in characters" :key="character.id">
          <CharCard :character="character"/>
        </v-flex>
      </v-layout>
    </section>
  </v-container>
</template>

<script>
/* eslint-disable no-console */
import { ALL_CHARACTERS_QUERY } from "../constants/graphql";
import CharCard from "./CharCard.vue";

export default {
  components: {
    CharCard
  },
  data() {
    return {
      characters: [],
      loading: true,
      errored: false
    };
  },
  apollo: {
    characters: {
      query: ALL_CHARACTERS_QUERY
    }
  }
};
</script>

<style>
.v-content__wrap {
  background: #111;
  color: #cecbcb;
}
</style>
