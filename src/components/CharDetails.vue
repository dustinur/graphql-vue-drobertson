<template>
  <v-container grid-list-md>
    <v-layout class="char-card justify-space-between" pt-4 pb-4 row wrap>
      <v-flex xs12 sm12 md5 ma-auto>
        <video
          id="videoCard"
          :src="character.imageUrl"
          :alt="character.name"
          :poster="character.poster"
          width="325"
          muted
          autoplay
          loop
          type="video/webm"
        />
      </v-flex>

      <v-flex pa-2 xs12 sm10 md6 ma-auto>
        <h3>{{ character.charClass }}</h3>
        <h1>{{ character.name }}</h1>
        <p>{{ character.description }}</p>

        <v-layout class="justify-space-between" row wrap>
          <v-btn
            flat
            color="#d70926"
            :to=" { 
              name: 'Update', 
              params: { 
                id: character.id
              }, 
              props: true
              } "
          >Details</v-btn>
          <v-btn v-if="!editForm" flat color="#d70926" @click="toggleEdit()">Edit</v-btn>
          <v-btn v-else color="#d70926" @click="toggleEdit()">Cancel</v-btn>
        </v-layout>
        <v-img :src="require('@/assets/witcher-logo-w2.png')" height="150" aspect-ratio="1"/>
      </v-flex>
      <v-flex xs12 pa-4 v-if="editForm">
        <UpdateCharTwo :currentChar="character"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import UpdateCharTwo from "./UpdateCharTwo";

export default {
  components: {
    UpdateCharTwo
  },
  props: ["character"],
  data() {
    return {
      editForm: false
    };
  },
  methods: {
    toggleEdit() {
      this.editForm = !this.editForm;
    }
  }
};
</script>

<style>
</style>
