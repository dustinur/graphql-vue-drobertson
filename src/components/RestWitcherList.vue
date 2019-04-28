<template>
  <v-container grid-list-xl fluid>
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else>
      <v-layout row wrap>
        <div v-if="loading">Loading...</div>

        <v-flex v-else v-for="(character, index) in characters" :key="character.id">
          <v-layout>
            <v-flex>
              <v-card width="365px" class="ma-auto" color="#1d1d1d">
                <v-img
                  :src="character.imageUrl"
                  :aspect-ratio="9/16"
                  position="top center"
                  class="black lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-layout fill-height align-center justify-center ma-0>
                      <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>

                <v-card-title primary-title>
                  <v-flex>
                    <h4 class="char-class font-weight-light">{{ character.classType }}</h4>
                    <h2 class="headline font-weight-medium mb-0">{{ character.name }}</h2>
                  </v-flex>
                </v-card-title>

                <v-card-actions class="justify-space-between pl-1 pr-1 pt-0 pb-3">
                  <div class="text-xs-center">
                    <v-dialog v-model="dialog" max-width="900">
                      <template v-slot:activator="{ on }">
                        <v-btn class="font-weight-black" flat color="#158775" v-on="on">View</v-btn>
                      </template>
                      <RestCharDetails :character="character"/>
                    </v-dialog>
                  </div>
                  <v-btn
                    class="font-weight-black"
                    flat
                    color="#af4343"
                    @click.prevent="deleteCharacter(index, character._id)"
                  >Delete</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </section>
  </v-container>
</template>

<script>
/* eslint-disable no-console */
import axios from "axios";
import RestCharDetails from "./RestCharDetails";

export default {
  name: "RestWitcherList",
  components: {
    RestCharDetails
  },
  data() {
    return {
      characters: [],
      loading: true,
      errored: false
    };
  },
  created() {
    let uri = "https://restful4790-drobertson.herokuapp.com/characters";
    this.axios
      .get(uri)
      .then(response => {
        this.characters = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    deleteCharacter(i, id) {
      let uri = `https://restful4790-drobertson.herokuapp.com/characters/${id}/delete`;
      this.axios.delete(uri).then(response => {
        console.log(`Deleted Character: ${i}`);
        this.characters.splice(i, 1);
      });
    }
  }
};
</script>

<style>
.v-content__wrap {
  /* background: rgb(31, 30, 30); */
  background: #1d1717;
  color: #cecbcb;
}
.v-dialog {
  background: rgba(10, 10, 10, 0.9);
  border-radius: 10px;
}
</style>
