import { gql } from 'apollo-server-express';

export const typeDefs = gql`
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
    getContact(id: ID!): Contact
  }

  type Mutation {
    addContact(firstName: String!, lastName: String!, email: String!): Contact
    editContact(id: ID!, data: ContactEdit!): Contact
    deleteContact(id: ID!): String
  }

  type Subscription {
    contactAdded: Contact
    contactDeleted: Contact
    contactUpdated: Contact
  }
`;
