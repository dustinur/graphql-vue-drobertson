<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 md2 offset-md1 offset-lg3>
        <v-img
          :src="character.imageUrl"
          :alt="character.name"
          position="center top"
          aspect-ratio=".72"
          class="grey lighten-2"
        />
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 md3 offset-md3 offset-lg2 offset-xl1>
        <h3 class="char-name">{{ character.classType }}</h3>
        <h1>{{ character.name }}</h1>
        <p>{{ character.description }}</p>
      </v-flex>

      <v-flex xs12 sm6 offset-sm3 offset-md1 offset-lg3 xl6 pt-4>
        <form>
          <v-text-field
            v-model="character.name"
            :counter="25"
            label="Name"
            color="#af4343"
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="character.imageUrl"
            :counter="25"
            label="Image URL"
            color="#af4343"
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>

          <v-btn color="#158775" @click="updateCharacter()">submit</v-btn>
          <v-btn @click="clear()">clear</v-btn>
          <v-btn color="#af4343" to="/restlist">cancel</v-btn>
        </form>
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
  created() {
    let uri = `http://localhost:4402/characters/${this.$route.params.id}`;
    this.axios.get(uri).then(response => {
      this.character = response.data;
    });
  },
  methods: {
    updateCharacter() {
      let uri = `http://localhost:4402/characters/${
        this.$route.params.id
      }/update`;
      this.axios.put(uri, this.character).then(() => {
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