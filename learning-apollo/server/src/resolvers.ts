const contacts = [
  {
    id: '1',
    firstName: 'David',
    lastName: ' Costa',
    email: 'davidcostadev@gmail.com',
  },
];

interface addContactType {
  firstName: string;
  lastName: string;
  email: string;
}

export const resolvers = {
  Query: {
    contacts: () => {
      return contacts;
    },
  },
  Mutation: {
    addContact: (root: any, args: addContactType) => {
      const id = require('crypto')
        .randomBytes(5)
        .toString('hex');
      const contact = {
        id,
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
      };

      contacts.push(contact);
      return contact;
    },
  },
};
