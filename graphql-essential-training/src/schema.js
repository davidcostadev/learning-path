const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: String
    languange: String
    email: String
  }

  type Query {
    friends: [Friend]
    getFriend(id: ID): Friend
  }

  input FriendInput {
    id: ID
    firstName: String!
    lastName: String!
    gender: String
    languange: String
    email: String!
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`);

module.exports = schema;
