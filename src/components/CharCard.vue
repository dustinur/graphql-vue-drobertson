<template>
  <v-layout>
    <v-flex>
      <v-hover>
        <v-card width="300px" class="ma-auto">
          <video
            id="videoCard"
            :src="`${publicPath}img/${character.imageUrl}`"
            width="300"
            :poster="character.poster"
            loop
            type="video/webm"
            @mouseover="play()"
            @mouseleave="pause()"
            @click="play()"
          />
          <v-card-title primary-title>
            <h3 class="headline mb-0">{{ character.name }}</h3>
            <div v-if="playing">
              <p class="charBio">{{ character.description }}</p>
            </div>
          </v-card-title>

          <v-card-actions>
            <!-- <v-btn flat color="red">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn> -->

            <div class="text-xs-center">
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on }">
                  <v-btn flat color="red" dark v-on="on">View Bio</v-btn>
                </template>

                <charDetails :character="character"/>
              </v-dialog>
            </div>
          </v-card-actions>
        </v-card>
      </v-hover>
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

<style scoped>
.hidden {
  display: none;
}
</style>
