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
export const CHARACTER_QUERY = gql`
  query CharacterQuery(
    $id: ID!
    ) {
    character( where:{ 
      id: $id
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

export const UPDATE_CHARACTER_MUTATION = gql`
  # 3
  mutation UpdateCharacterMutation(
    $id: ID!,
    $name: String!,
    ) {
    updateCharacter(
      data: {
        name: $name,
        }
        where: {
          id: $id
        }
        ) {
      name
    }
  }
`

export const UPDATE_CHARACTER_TWO = gql`
mutation UpdateCharacter($id: ID!, $character: CharacterUpdateInput!) {
    updateCharacter(data: $character, where: { id: $id } ) {
        id
        name
        charClass
    }
  }
`

export const DELETE_CHARACTER_MUTATION = gql`
  mutation deleteCharacterMutation($id: ID!) {
    deleteCharacter( where: { 
      id: $id
    }) {
      id
    }
  }
`