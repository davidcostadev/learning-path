export const typeDefs = `
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

  type Query {
    contacts: [Contact]
  }

  type Subscription {
    noteAdded(contactId: ID!): Note
  }
`;
