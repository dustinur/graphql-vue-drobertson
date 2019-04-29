<template>
  <v-dialog v-model="dialog" max-width="900">
    <template v-slot:activator="{ on }">
      <v-btn class="font-weight-black" flat color="#158775" v-on="on">View</v-btn>
    </template>
  <v-container grid-list-md pt-0 pb-4>
    <v-btn class="btn-close font-weight-bold mt-0 pt-4" color="#999" flat @click="dialog = false">Close</v-btn>
      <v-layout class="justify-space-between" pt-4 pb-4 row wrap>
        <v-flex xs12 sm6 offset-sm3 md5 ma-auto>
          <v-img
            :src="character.imageUrl"
            :alt="character.name"
            position="center top"
            :aspect-ratio="9/16"
            class="grey lighten-2"
          />
        </v-flex>

        <v-flex pa-2 xs12 sm10 md6 ma-auto>
          <h3 class="char-name">{{ character.classType }}</h3>
          <h1>{{ character.name }}</h1>
          <p class="char-class">{{ character.description }}</p>

          <v-layout class="justify-start" row wrap>
            <v-btn
              class="font-weight-black"
              flat
              color="#158775"
              :to=" { 
              name: 'RestUpdate', 
              params: { id: character._id },
              props: true
              } "
            >Update</v-btn>
          </v-layout>
          <v-img :src="require('@/assets/witcher-logo-w2.png')" height="150" aspect-ratio="1"/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-dialog>
</template>

<script>
export default {
  name: "RestCharDetails",
  props: ["character"],
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style>
</style>
