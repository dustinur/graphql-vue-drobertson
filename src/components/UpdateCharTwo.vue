<template>

        <form>
          <v-text-field
            v-model="character.name"
            :error-messages="nameErrors"
            :counter="30"
            label="Name"
            required
            color="#d70926"
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
                    <v-text-field
            v-model="character.charClass"
            :error-messages="nameErrors"
            :counter="30"
            label="Class"
            required
            color="#d70926"
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>

          <v-btn color="#d70926" @click="updateCharacter()">submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
import {
  ALL_CHARACTERS_QUERY,
  UPDATE_CHARACTER_TWO
} from "../constants/graphql";

export default {
  name: "UpdateCharTwo",
  props: ['currentChar'],
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(30) }
  },
  data() {
    return {
      character: Object.assign({}, this.currentChar),
      publicPath: process.env.BASE_URL
    };
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 30 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    }
  },

  methods: {
    updateCharacter() {
        this.$apollo
        .mutate({
          mutation: UPDATE_CHARACTER_TWO,
          variables: {
            id: this.character.id,
            character: {
              name: this.character.name,
              charClass: this.character.charClass
            }
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
    }
  }
};
</script>