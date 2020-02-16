const { buildSchema } = require('graphql');

const schema = buildSchema(`
  enum Gender {
    male
    female
    other
  }

  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    age: Int
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
