<template>
  <v-layout>
    <v-flex>
      <v-card width="300px" style="margin: auto;">
        <video
          id="videoCard"
          :src="`${publicPath}img/${character.imageUrl}`"
          width="300"
          loop
          type="video/webm"
          @mouseover="play()"
          @mouseleave="pause()"
        />
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{character.name}}</h3>
            <div class="charBio">{{ character.description }}</div>
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
      characters: [],
      myVideo: document.getElementById("videoCard")
    };
  },
  methods: {
    play() {
      event.target.play();
    },
    pause() {
      event.target.pause();
    }
  }
};
</script>

<style scoped>
    .hidden { display: none; }
</style>
