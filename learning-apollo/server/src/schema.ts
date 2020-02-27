import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Contact {
    id: ID!
    firstName: String
    lastName: String
    email: String
  }
  type Query {
    contacts: [Contact]
  }
`;
