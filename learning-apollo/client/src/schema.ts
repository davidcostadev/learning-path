export const typeDefs = `
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
