const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  enum Gender {
    male
    female
    other
  }
  type Contact {
    firstName: String
    lastName: String
  }

  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    age: Int
    language: String
    email: String
    contacts: [Contact]
  }

  type Aliens {
    firstName: String
    lastName: String
    planet: String
  }

  type Query {
    friends: [Friend]
    aliens: [Aliens]
    getFriend(id: ID): Friend
  }

  input ContactInput {
    firstName: String
    lastName: String
  }

  input CreateFriendInput {
    firstName: String!
    lastName: String!
    gender: String
    age: Int
    language: String
    email: String!
    contacts: [ContactInput]
  }

  input UpdateFriendInput {
    id: ID!
    firstName: String
    lastName: String
    gender: String
    age: Int
    language: String
    email: String
    contacts: [ContactInput]
  }

  type Mutation {
    createFriend(input: CreateFriendInput): Friend
    updateFriend(input: UpdateFriendInput): Friend
    removeFriend(id: ID!): String
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
