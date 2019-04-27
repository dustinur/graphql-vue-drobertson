<template>
  <v-container grid-list-md>
    <h1 class="headline font-weight-thin text-xs-center text-md-left pl-4">Character Creation</h1>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg5 offset-lg0 pa-4>
        <v-img
          width="100%"
          :src="character.imageUrl"
          :alt="character.name"
          position="center top"
          aspect-ratio=".72"
          class="grey lighten-2 elevation-2"
        />
      </v-flex>
      <v-flex xs12 sm10 offset-sm1 md10 offset-md1 lg6 offset-lg0 pa-2>
        <h3 class="char-name">{{ character.classType }}</h3>
        <h1>{{ character.name }}</h1>
        <p>{{ character.description }}</p>
        <!-- </v-flex>

        <v-flex xs12 sm10 offset-sm1 offset-md1 lg6 offset-lg0 xl6 pt-4>-->
        <v-flex p-4>
          <form>
            <v-text-field
              v-model="character.name"
              :counter="25"
              label="Name"
              color="#edcd95"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="character.classType"
              :counter="25"
              label="Class"
              color="#edcd95"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="character.imageUrl"
              :counter="250"
              label="Image URL"
              color="#edcd95"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="character.description"
              :counter="300"
              label="Bio / Info"
              color="#edcd95"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-btn color="#158775" @click="createCharacter()">submit</v-btn>
            <v-btn @click="clear()">clear</v-btn>
            <v-btn color="#af4343" to="/restlist">cancel</v-btn>
          </form>
        </v-flex>
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
      // fetch(API_URL, {
      //   method: "POST",
      //   body: JSON.stringify(this.character),
      //   headers: {
      //     "content-type": "application/json"
      //   }
      // }).then(response => {
      //   response.json();
      //   this.$router.push({ path: "/restlist" });
      // });
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
      let uri = "http://localhost:4402/characters/create";
      this.axios.post(uri, this.character).then(() => {
        this.$router.push({ path: "/restlist" });
      });
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