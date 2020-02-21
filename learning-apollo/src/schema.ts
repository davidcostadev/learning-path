export const typeDefs = `
  type Contact {
    id: ID!
    fistName: String
    lastName: String
  }

  type Query {
    contacts: [Contact]
  }
`;
