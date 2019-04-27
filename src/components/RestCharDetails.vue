<template>
  <v-container grid-list-md>
    <v-layout class="justify-space-between" pt-4 pb-4 row wrap>
      <v-flex xs12 sm12 md5 ma-auto>
        <v-img
          :src="character.imageUrl"
          :alt="character.name"
          aspect-ratio="1"
          class="grey lighten-2"
        />
      </v-flex>

      <v-flex pa-2 xs12 sm10 md6 ma-auto>
        <h3>{{ character.classType }}</h3>
        <h1>{{ character.name }}</h1>
        <p>{{ character.description }}</p>

        <v-layout class="justify-start" row wrap>
          <v-btn
            flat
            color="#d70926"
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
</template>

<script>
export default {
  name: "RestCharDetails",
  props: ["character"]
};
</script>

<style>
</style>
