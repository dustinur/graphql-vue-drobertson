<template>
  <v-container grid-list-xl fluid>
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else>
      <v-layout row wrap>
        <div v-if="loading">Loading...</div>

        <v-flex v-else v-for="character in characters" :key="character.id">
          <v-layout>
            <v-flex>
              <v-card width="365px" class="ma-auto" color="#222">
                <v-img
                  :src="character.imageUrl"
                  aspect-ratio="1"
                  position="center top"
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
                    <h3 class="text-red subheading">{{ character.classType }}</h3>
                    <h2 class="headline mb-0">{{ character.name }}</h2>
                  </v-flex>
                </v-card-title>

                <v-card-actions class="justify-space-between">
                  <div class="text-xs-center">
                    <v-dialog v-model="dialog" max-width="900">
                      <template v-slot:activator="{ on }">
                        <v-btn flat color="#d70926" v-on="on">View</v-btn>
                      </template>
                      <RestCharDetails :character="character" />

                    </v-dialog>
                  </div>
                  <v-btn flat color="#d70926" @click.prevent="deleteCharacter(character._id)">Delete</v-btn>
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
    let uri = "https://restful4790-drobertson.herokuapp.com/characters/";
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
    deleteCharacter(id) {
      let uri = `https://restful4790-drobertson.herokuapp.com/characters/${id}/delete`;
      this.axios.delete(uri).then(response => {
        console.log(`Deleted Character: ${id}`)
        this.characters.splice(this.characters.indexOf(id), 1);
      });
    }
  }
};
</script>

<style>
.v-content__wrap {
  background: #111;
  color: #cecbcb;
}

.v-dialog {
  background: rgba(10, 10, 10, 0.9);
  border-radius: 10px;
}
</style>
