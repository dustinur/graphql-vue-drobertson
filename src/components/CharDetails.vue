<template>
  <v-container grid-list-md>
      <v-btn color="#999" flat @click="closeDialog()">Close</v-btn>
    <v-layout class="justify-space-between" pt-4 pb-4 row wrap>
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
        <h3 class="char-name">{{ character.charClass }}</h3>
        <h1 class="">{{ character.name }}</h1>
        <p class="char-class">{{ character.description }}</p>

        <v-layout class="justify-space-between" row wrap>
          <v-btn v-if="!editForm" flat color="#158775" @click="toggleEdit()">Edit</v-btn>
          <v-btn v-else color="#222" @click="toggleEdit()">Cancel</v-btn>
          <v-btn
            flat
            color="#af4343"
            :to=" { 
              name: 'Update', 
              params: { 
                id: character.id
              }, 
              props: true
              } "
          >Details</v-btn>
        </v-layout>
        <v-img :src="require('@/assets/witcher-logo-w2.png')" height="150" aspect-ratio="1"/>
      </v-flex>
      <v-flex xs12 pa-4 v-if="editForm">
        <UpdateCharTwo :currentChar="character" @toggleEdit="toggleEdit"/>
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
    closeDialog() {
      console.log("close dialog 1");
      this.editForm = false;
      this.$emit("close-dialog");
    },
    toggleEdit() {
      this.editForm = !this.editForm;
    }
  }
};
</script>

<style>
.char-class {
  color: #b4b4b4;
}
.char-name {
  color: #EDCD95;
}
</style>
