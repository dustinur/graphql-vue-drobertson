<template>
  <v-layout>
    <v-flex>
      <v-card width="300px" class="ma-auto">
        <video
          id="videoCard"
          :src="`${publicPath}img/${character.imageUrl}`"
          width="300"
          loop
          type="video/webm"
          @click="play()"
          @mouseover="play()"
          @mouseleave="pause()"
        />
        <v-card-title primary-title>
          <h3 class="headline mb-0">{{character.name}}</h3>
          <div v-if="playing">
            <p class="charBio">{{ character.description }}</p>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
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
