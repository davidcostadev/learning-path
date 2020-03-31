import { gql } from 'apollo-boost';

export const typeDefs = gql`
  type Note {
    id: ID!
    details: String
  }

  type Contact {
    id: ID!
    firstName: String
    lastName: String
    email: String
  }

  input ContactEdit {
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    contacts: [Contact]
  }

  type Subscription {
    noteAdded(contactId: ID!): Note
  }
`;
