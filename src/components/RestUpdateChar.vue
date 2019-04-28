<template>
  <v-container grid-list-md>
        <!-- <h1 class="headline text-uppercase font-weight-black text-xs-center pb-2">
      REST<span class="font-weight-light">Update</span>
    </h1> -->
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg5 offset-lg0 pa-4>
        <v-img
          width="100%"
          :src="character.imageUrl"
          :alt="character.name"
          position="center top"
          aspect-ratio=".72"
          class="grey darken-4 elevation-2"
        />
      </v-flex>
      <v-flex xs12 sm10 offset-sm1 md10 offset-md1 lg6 offset-lg0 pa-2>
                <h1 class="headline text-uppercase font-weight-black text-xs-center pt-3 pb-4">
      REST<span class="font-weight-light">Update</span>
    </h1>
        <h3 class="char-name">{{ character.classType }}</h3>
        <h1>{{ character.name }}</h1>
        <p class="char-class">{{ character.description }}</p>

        <v-flex p-4 mt-4>
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
            <v-btn class="font-weight-black" flat color="#158775" @click="updateCharacter()">submit</v-btn>
            <v-btn class="font-weight-black" flat @click="clear()">clear</v-btn>
            <v-btn class="font-weight-black" flat color="#af4343" to="/restlist">cancel</v-btn>
          </form>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

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
  // https://restful4790-drobertson.herokuapp.com/characters/
  created() {
    let uri = `https://restful4790-drobertson.herokuapp.com/characters/${this.$route.params.id}`;
    this.axios.get(uri).then(response => {
      this.character = response.data;
    });
  },
  methods: {
    updateCharacter() {
      let uri = `https://restful4790-drobertson.herokuapp.com/characters/${
        this.$route.params.id
      }/update`;
      this.axios.put(uri, this.character).then(() => {
        this.$router.push({ path: "/restlist" });
      });
    }
  },
  clear() {
    this.$v.$reset();
    this.character.name = "";
    this.character.classType = "";
    this.character.imageUrl = "";
    this.character.description = "";
  }
};
</script>