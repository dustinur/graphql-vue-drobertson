<template>
  <v-layout>
    <v-flex>
      <v-card width="325px" color="#222" class="ma-auto">
        <video
          id="videoCard"
          :src="`${publicPath}img/${character.imageUrl}` || character.imageUrl"
          :poster="character.poster"
          width="325"
          muted
          autoplay
          loop
          type="video/webm"
        />
        <v-card-title primary-title>
          <v-flex>
            <h3 class="subheading text-red">{{ character.charClass }}</h3>
            <h2 class="headline mb-0">{{ character.name }}</h2>
            <blockquote class="blockquote body-1 pt-2 pl-1">{{ character.description }}</blockquote>
          </v-flex>
        </v-card-title>

        <v-card-actions class="pb-4">
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
