<template>




  <v-layout>
    <v-flex>
      <v-hover>
        <v-card width="300px" class="ma-auto">
          <video
            id="videoCard"
            :src="`${publicPath}img/${character.imageUrl}`"
            width="300"
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
            <div class="text-xs-center">
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on }">
                  <v-btn color="red lighten-2" dark v-on="on">View Bio</v-btn>
                </template>

                <v-card>
                  <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>

                  <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" flat @click="dialog = false">I accept</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>

          </v-card-actions>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      playing: false,
      dialog: false,
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
