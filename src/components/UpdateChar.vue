<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 md2 offset-md1 offset-lg3>
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
      <v-flex xs12 sm6 offset-sm3 md3 offset-md3 offset-lg2 offset-xl1>
        <h3 class="char-name">{{ character.charClass }}</h3>
        <h1>{{ character.name }}</h1>
        <p class="char-class">{{ character.description }}</p>
          <v-btn fllat to="/">Return</v-btn>
      </v-flex>

      <v-flex xs12 sm6 offset-sm3 offset-md1 offset-lg3 xl6 pt-4>
        <!-- <form>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="25"
            label="Name"
            required
            color="#edcd95"
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>

          <v-btn color="#158775" @click="updateCharacter()">submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </form> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
import {
  ALL_CHARACTERS_QUERY,
  CHARACTER_QUERY,
  UPDATE_CHARACTER_MUTATION
} from "../constants/graphql";

export default {
  name: "UpdateChar",
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(25) }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      character: {},
      name: "",
      charClass: "",
      imageUrl: "",
      poster: "",
      description: ""
    };
  },
  apollo: {
    character: {
      query: CHARACTER_QUERY,
      loadingKey: "loading",
      variables() {
        return {
          id: this.$route.params.id
        };
      }
    }
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 25 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    }
  },

  methods: {
    updateCharacter() {
      const { name, charClass, imageUrl, poster, description } = this.$data;
      this.$apollo
        .mutate({
          mutation: UPDATE_CHARACTER_MUTATION,
          variables: {
            id: this.character.id,
            name,
            charClass,
            imageUrl,
            poster,
            description
          },
          update: (store, { data: { updateCharacter } }) => {
            const data = store.readQuery({
              query: ALL_CHARACTERS_QUERY
            });
            data.characters.push(updateCharacter);
            store.writeQuery({ query: ALL_CHARACTERS_QUERY, data });
          }
        })
        .then(data => {
          console.log(data);
          this.$router.push({ path: "/" });
        })
        .catch(error => {
          console.error(error);
        });
    },
    clear() {
      this.$v.$reset();
      this.name = "";
    }
  }
};
</script>