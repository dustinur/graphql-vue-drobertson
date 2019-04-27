<template>
  <v-layout>
    <v-flex>
      <v-card width="365px" class="ma-auto" color="#1d1d1d">
        <v-img
          :src="character.poster"
          :aspect-ratio="9/16"
          position="center top"
          class="black lighten-2"
        >
          <template v-slot:placeholder>
            <v-layout fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
            </v-layout>
          </template>
        </v-img>

        <v-card-title primary-title class="pb-0">
          <v-flex>
            <h4 class="char-class font-weight-light
            ">{{ character.charClass }}</h4>
            <h2 class="headline font-weight-medium mb-0">{{ character.name }}</h2>
          </v-flex>
        </v-card-title>

        <v-card-actions class="justify-space-between pl-1 pr-1 pt-0 pb-3">
          <div class="text-xs-center">
            <v-dialog v-model="dialog" max-width="900">
              <template v-slot:activator="{ on }">
                <v-btn class="font-weight-black" flat color="#158775" v-on="on">View</v-btn>
              </template>
              <charDetails :character="character" @close-dialog="closeDialog"/>
            </v-dialog>
          </div>
          <v-btn class="font-weight-black" flat color="#af4343" @click="deleteCharacter()">Delete</v-btn>
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
  props: ["character"],
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    closeDialog() {
      console.log("From card" + this.dialog);
      this.dialog = false;
    },
    deleteCharacter() {
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
              __typename: "Character",
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
.v-dialog {
  background: rgba(10, 10, 10, 0.9);
  border-radius: 10px;
}
</style>
