<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 md2 offset-md1 offset-lg3>
        <v-img
          :src="character.imageUrl"
          :alt="character.name"
          aspect-ratio="1"
          class="grey lighten-2"
        />
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 md3 offset-md3 offset-lg2 offset-xl1>
        <h3>{{ character.classType }}</h3>
        <h1>{{ character.name }}</h1>
        <p>{{ character.description }}</p>
      </v-flex>

      <v-flex xs12 sm6 offset-sm3 offset-md1 offset-lg3 xl6 pt-4>
        <form>
          <v-text-field
            v-model="character.name"
            :error-messages="nameErrors"
            :counter="25"
            label="Name"
            required
            color="#d70926"
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>

          <v-btn color="#d70926" @click="updateCharacter()">submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </form>
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
  name: "RestUpdateChar",
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(25) }
  },
  data() {
    return {
      character: {}
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
  created() {
    let uri = `http://localhost:4402/characters/${
      this.$route.params.id
    }/update`;
    this.axios.get(uri).then(response => {
      this.character = response.data;
    });
  },
  methods: {
    updateCharacter() {
      let uri = `http://localhost:4402/characters/${
        this.$route.params.id
      }/update`;
      this.axios.post(uri, this.character).then(() => {
        this.$router.push({ path: "/restlist" });
      });
    }
  },
  clear() {
    this.$v.$reset();
    this.name = "";
  }
};
</script>