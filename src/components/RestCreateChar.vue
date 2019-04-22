<template>
  <v-container fluid>
    <v-flex xs12 sm6 offset-sm3>
      <form>
        <v-text-field
          v-model="character.name"
          :error-messages="nameErrors"
          :counter="25"
          label="Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="character.classType"
          :error-messages="nameErrors"
          label="Character Class"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="character.imageUrl"
          :error-messages="nameErrors"
          label="Image URL"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="character.description"
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

    <v-layout class="text-xs-center" justify-center pt-4 pb-4 row wrap>
      <v-flex pa-2 xs12>
        <h3>{{ character.classType }}</h3>
        <h1>{{ character.name }}</h1>
        <p>{{ character.description }}</p>
      </v-flex>
      <v-flex xs12 offset-sm2 offset-md4>
        <v-img
          max-width="500"
          :src="character.imageUrl"
          :alt="character.name"
          aspect-ratio="1"
          class="grey darken-4"
        >
          <template v-slot:placeholder>
            <v-layout fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey darken-3"></v-progress-circular>
            </v-layout>
          </template>
        </v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
const API_URL = "http://localhost:4402/characters/create";

export default {
  name: "RestCreateChar",
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(25) }
  },
  data() {
    return {
      character: {
        name: "",
        classType: "",
        imageUrl: "",
        description: ""
      }
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
      console.log(this.character);
      fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(this.character),
        headers: {
          "content-type": "application/json"
        }
      }).then(response => {
        response.json();
        this.$router.push({ path: "/restlist" });
      });
      // .then(result => {
      //   //   if (result.details) {
      //   //     // there was an error...
      //   //     const error = result.details
      //   //       .map(detail => detail.character)
      //   //       .join(". ");
      //   //     this.error = error;
      //   //   } else {
      //   //     this.error = "";
      //   this.characters.push(result);
      //   this.$router.push({ path: "/" });
      // });
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.select = null;
      this.checkbox = false;
    }
  }
};
</script>