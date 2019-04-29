<template>
  <div>
    <h1 class="headline text-uppercase font-weight-black text-xs-left pb-2">
      GQL
      <span class="headline font-weight-light text-xs-center">Update</span>
    </h1>
    <form>
      <v-text-field
        v-model="character.name"
        :counter="30"
        label="Name"
        required
        color="#EDCD95"
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="character.charClass"
        :counter="30"
        label="Class"
        required
        color="#EDCD95"
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>

      <v-btn class="font-weight-black" flat color="#158775" @click="updateCharacter()">submit</v-btn>
      <v-btn class="font-weight-black" flat @click="clear">clear</v-btn>
      <v-btn class="font-weight-black" flat color="#af4343" @click="cancel()">cancel</v-btn>
    </form>
  </div>
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
  props: ["currentChar"],
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
    cancel() {
      console.log("toggle edit");
      // this.editForm = false;
      this.$emit("toggleEdit");
    },
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
          refetchQueries: [
            {
              query: ALL_CHARACTERS_QUERY,
              variables: {
                characters: []
              }
            }
          ],
          optimisticResponse: {
            __typename: "Mutation",
            updateCharacter: {
              __typename: "Character",
              id: this.character.id
            }
          }
        })
        .then(data => {
          console.log(data);
          // this.$router.push({ path: "/" });
        })
        .catch(error => {
          console.error(error);
        });
      this.$emit("toggleEdit");
    },
    clear() {
      this.$v.$reset();
      this.character.name = "";
      this.character.charClass = "";
    }
  }
};
</script>