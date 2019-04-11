<template>
  <v-layout>
    <v-flex>
      <v-card width="325px" color="#222" class="ma-auto">
        <video
          id="videoCard"
          :src="`${publicPath}img/${character.imageUrl}`"
          width="325"
          muted
          autoplay
          loop
          type="video/webm"
        />
        <v-card-title primary-title>
          <v-flex>
            <h3 class="text-red">{{ character.charClass }}</h3>
            <h2 class="headline mb-0">{{ character.name }}</h2>
            <!-- <v-spacer></v-spacer> -->
            <p class="charBio pt-2">{{ character.description }}</p>
          </v-flex>
        </v-card-title>

        <v-card-actions class="pb-4">
          <!-- <v-spacer></v-spacer> -->
          <!-- <v-btn color="primary" flat @click="esc">Close</v-btn> -->
          <v-img :src="require('@/assets/witcher-logo-w2.png')" height="100" aspect-ratio="1"/>
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
      dialog: false,
      characters: []
    };
  },
  methods: {}
};
</script>

<style scoped>
.hidden {
  display: none;
}
</style>
