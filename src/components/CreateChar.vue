<template>
  <v-container grid-list-md>
    <h1 class="headline font-weight-thin text-xs-center text-md-left pl-4">Character Creation</h1>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg5 offset-lg0 pa-4>
        <v-img
          width="100%"
          :src="poster"
          :alt="name"
          position="center top"
          aspect-ratio=".72"
          class="grey lighten-2 elevation-2"
        />
      </v-flex>
      <v-flex xs12 sm10 offset-sm1 md10 offset-md1 lg6 offset-lg0 pa-2>
        <h3 class="char-name">{{ charClass }}</h3>
        <h1>{{ name }}</h1>
        <p>{{ description }}</p>

        <v-flex p-4>
          <form>
            <v-text-field
              v-model="name"
              :counter="25"
              label="Name"
              color="#edcd95"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="charClass"
              :counter="25"
              label="Class"
              color="#edcd95"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="imageUrl"
              :counter="250"
              label="Video URL"
              color="#edcd95"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="poster"
              :counter="250"
              label="Image URL"
              color="#edcd95"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="description"
              :counter="300"
              label="Bio / Info"
              color="#edcd95"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-btn color="#158775" @click="createCharacter()">submit</v-btn>
            <v-btn @click="clear()">clear</v-btn>
            <v-btn color="#af4343" to="/">cancel</v-btn>
          </form>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
import {
  ALL_CHARACTERS_QUERY,
  CREATE_CHARACTER_MUTATION
} from "../constants/graphql";

export default {
  name: "CreateChar",
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(25) }
  },

  data() {
    return {
      name: "",
      charClass: "",
      imageUrl: "",
      poster: "",
      description: ""
    };
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
    createCharacter() {
      const { name, charClass, imageUrl, poster, description } = this.$data;
      this.$apollo
        .mutate({
          mutation: CREATE_CHARACTER_MUTATION,
          variables: {
            name,
            charClass,
            imageUrl,
            poster,
            description
          },
          update: (store, { data: { createCharacter } }) => {
            const data = store.readQuery({
              query: ALL_CHARACTERS_QUERY
            });
            data.characters.push(createCharacter);
            store.writeQuery({ query: ALL_CHARACTERS_QUERY, data });
          }
        })
        .then(data => {
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