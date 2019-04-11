import gql from "graphql-tag"

export const ALL_CHARACTERS_QUERY = gql`
  query AllCharactersQuery {
    characters {
      id
      name
      charClass
      imageUrl
      poster
      description
    }
  }
`

export const CREATE_CHARACTER_MUTATION = gql`
  # 2
  mutation CreateCharacterMutation($name: String!) {
    createCharacter(data: {
        name: $name
        }) {
      id
      name
    }
  }
`
