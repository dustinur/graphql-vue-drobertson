<template>
  <div>
    <div class="flex flex-column mt3">
      <input
        class="mb2"
        v-model="name"
        type="text"
        placeholder="A description for the link">
    </div>
    <button @click="createCharacter()">Submit</button>
  </div>
</template>

<script>
import { CREATE_CHARACTER_MUTATION } from "../constants/graphql"

export default {
    name: 'CreateChar',
    data () {
      return {
        name: ''
      }
    },
    methods: {
      createCharacter () {
        const { name } = this.$data
        this.$apollo.mutate({
            mutation: CREATE_CHARACTER_MUTATION,
            variables: {
            name
            }
        })
        }
    }
}
    

</script>