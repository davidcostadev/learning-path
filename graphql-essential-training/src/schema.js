const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: String
    language: String
    email: String
  }
  
  type Query {
    friend: Friend
  }
`);

module.exports = schema;
