import { gql } from 'apollo-server-express';

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
    notes: [Note]!
  }

  input NoteInput {
    contactId: ID!
    details: String
  }

  type Query {
    contacts: [Contact]
    getContact(id: ID!): Contact
  }

  type Mutation {
    addContact(firstName: String!, lastName: String!, email: String!): Contact
    addNote(note: NoteInput!): Note
  }

  type Subscription {
    noteAdded(contactId: ID!): Note
  }
`;
