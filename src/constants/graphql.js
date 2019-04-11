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
  mutation CreateCharacterMutation(
    $name: String!,
    $charClass: String,
    $imageUrl: String,
    $poster: String,
    $description: String
    ) {
    createCharacter(data: {
        name: $name,
        charClass: $charClass,
        imageUrl: $imageUrl,
        poster: $poster,
        description: $description
        }) {
      id
      name
      charClass
      imageUrl
      poster
      description
    }
  }
`
