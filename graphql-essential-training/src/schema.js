const { buildSchema } = require('graphql');

const schema = buildSchema(`
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

  type Query {
    friends: [Friend]
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
    language: String
    email: String!
    contacts: [ContactInput]
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`);

module.exports = schema;
