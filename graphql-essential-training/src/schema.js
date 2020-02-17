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

  input FriendInput {
    id: ID
    firstName: String!
    lastName: String!
    gender: String
    age: Int
    language: String
    email: String!
    contacts: [ContactInput]
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
