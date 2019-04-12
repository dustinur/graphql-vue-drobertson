<template>
  <v-container fluid>
    <v-flex xs12 sm6 offset-sm3>
      <form>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="25"
          label="Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="charClass"
          :error-messages="nameErrors"
          label="Character Class"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="imageUrl"
          :error-messages="nameErrors"
          label="Image / Video URL"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="poster"
          :error-messages="nameErrors"
          label="Poster Image URL"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="description"
          :error-messages="nameErrors"
          label="Character Description"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>

        <v-btn @click="createCharacter()">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form>
    </v-flex>
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
            data.allCharacters.push(createCharacter);
            store.writeQuery({ query: ALL_CHARACTERS_QUERY, data });
          }
        })
        .then(data => {
          this.$router.push({ path: "/" }).go({ path: "/" });
        })
        .catch(error => {
          console.error(error);
        });
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.name = "";
      this.select = null;
      this.checkbox = false;
    }
  }
};
</script>