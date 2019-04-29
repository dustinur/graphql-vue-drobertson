# Vue With GraphQL & RESTful APIs

Final project for Utah Valley University course DGM4790 to demonstrate ability to build a Full Stack Web Application using a front-end framework, a RESTful API server with datastore, and a GraphQL API server with associated datastore.

This is a Witcher book and game character database with a Vue and Apollo frontend using Prisma data modeling tool with PostgreSQL data store. AXIOS is also used to interact with a RESTful API using Node.js, Express and MongoDB Atlas.

## Overview
- Netlify URL for deplyed site: [drobertson4790.netlify.com](https://drobertson4790.netlify.com/). Heroku is hosting both the Prisma Cloud deployed PostgresSQL data store and RESTful API.
- REST API: [github.com/dustinur/restfulCrud-DRobertson](https://github.com/dustinur/restfulCrud-DRobertson).
- GraphQL API: [github.com/dustinur/graphql-server-practice](https://github.com/dustinur/graphql-server-practice).

## Getting Started

- To access and run graphql server download and install it from here: [github.com/dustinur/graphql-server-practice](https://github.com/dustinur/graphql-server-practice). 
- Follow instructions in project `README.md`. 
- Once Docker is up and running, return back to this Vue app directory and go to `/src/vue-apollo.js`. 
- Replace both heroku endpoints with the localhost Docker server (you should be running on your process.env.PORT || 4000). Example edit to `vue-apollo.js` below:
```
const httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || 'http://localhost:4400'

wsEndpoint: process.env.VUE_APP_GRAPHQL_WS || "ws://localhost:4000",
```

- Make sure your GraphQl server us up and running before serving up the Vue app.

- In graphql-vue-drobertson root, run:

```
npm install

npm run serve
```
- App will be running on specified localhost


### GraphQL CRUD

All GraphQL and REST CRUD operations can be perfomed within each of the character cards. 'Order by Name ASC' query and the 'createCharacter' mutations are found in the toolbar. GraphQL queries and mutations found at `/src/constants/graphql.js`:
```
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

export const ALL_CHARACTERS_ASC_QUERY = gql`
  query AllCharactersQuery {
    characters(orderBy: name_ASC) {
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
```

\RESTful CRUD operations found at [github.com/dustinur/restfulCrud-DRobertson](https://github.com/dustinur/restfulCrud-DRobertson). In the app root directory, navigate to `controllers/character.controller.js`


```
const Character = require("../models/character.model");

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send("This is the test controller!");
};

exports.character_all = function(req, res) {
  Character.find(req.params.id, function(err, character) {
    if (err) return next(err);
    res.send(character);
  });
};

exports.character_create = function(req, res) {
  let character = new Character({
    name: req.body.name,
    classType: req.body.classType,
    imageUrl: req.body.imageUrl,
    description: req.body.description
  });

  character.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Character Created successfully");
  });
};

exports.character_details = function(req, res) {
  Character.findById(req.params.id, function(err, character) {
    if (err) return next(err);
    res.send(character);
  });
};

exports.character_update = function(req, res) {
  Character.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    character
  ) {
    if (err) return next(err);
    res.send("Character udpated.");
  });
};

exports.character_delete = function(req, res) {
  Character.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Character deleted successfully!");
  });
};

```

Fully deployed app can be found here: [drobertson4790.netlify.com](https://drobertson4790.netlify.com/). 