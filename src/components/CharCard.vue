<template>
  <v-layout>
    <v-flex>
      <v-card width="300px" class="ma-auto" color="#222">
        <v-img
          :src="character.poster"
          aspect-ratio=".7"
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
            <h3 class="text-red subheading">{{ character.charClass }}</h3>
            <h2 class="headline mb-0">{{ character.name }}</h2>
          </v-flex>
        </v-card-title>

        <v-card-actions class="justify-space-between">
            <div class="text-xs-center">
              <v-dialog width="332">
                <template v-slot:activator="{ on }">
                  <v-btn flat color="#d70926" v-on="on">View</v-btn>
                </template>
                <charDetails :character="character"/>
              </v-dialog>
            </div>
            <v-btn flat color="#d70926" @click="deleteCharacter()">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
import CharDetails from "./CharDetails.vue";
import {
  ALL_CHARACTERS_QUERY,
  DELETE_CHARACTER_MUTATION
} from "../constants/graphql";

export default {
  components: {
    CharDetails
  },
  props: {
    character: {
      type: Object,
      dialog: false,
      required: true
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  methods: {
    deleteCharacter() {
      const { id } = this.$data;
      // Mutation
      this.$apollo
        .mutate({
          mutation: DELETE_CHARACTER_MUTATION,
          variables: {
            id: this.character.id
          },
          refetchQueries: [
            {
              query: ALL_CHARACTERS_QUERY,
              variables: {
                characters: []
              }
            }
          ],
          optimisticResponse: {
            __typename: "Mutation",
            deleteCharacter: {
              __typename: "Character", // graphQL type of the card
              id: this.character.id
            }
          }
        })
        .then(data => {
          console.log(data);
          this.$router.push({ path: "/" });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style>
</style>
