<template>
  <v-layout>
    <v-flex>
      <v-card width="340px" class="ma-auto" color="#222">
        <v-img
          :src="character.poster"
          aspect-ratio=".4"
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
        <v-card-actions>
          <div class="text-xs-center">
            <v-dialog width="332">
              <template v-slot:activator="{ on }">
                <v-btn flat color="#d70926" v-on="on">View</v-btn>
              </template>

              <charDetails :character="character"/>
            </v-dialog>
          </div>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
import CharDetails from "./CharDetails.vue";

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
      publicPath: process.env.BASE_URL,
      playing: false,
      characters: []
    };
  },
  methods: {
    play() {
      event.target.play();
      this.playing = true;
    },
    pause() {
      event.target.pause();
      this.playing = false;
    }
  }
};
</script>

<style>
.hidden {
  display: none;
}

</style>
