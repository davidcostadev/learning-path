import { PubSub, withFilter } from 'graphql-subscriptions';

const pubsub = new PubSub();

interface addContactType {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface Entity {
  id: string;
}

interface editContact {
  id: string;
  data: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

const contacts: [addContactType] = [
  {
    id: '1',
    firstName: 'David',
    lastName: ' Costa',
    email: 'davidcostadev@gmail.com',
  },
];

export const resolvers = {
  Query: {
    contacts: () => {
      return contacts;
    },
    getContact: (root: any, { id }: Entity) => {
      return contacts.find(contact => contact.id === id);
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
      pubsub.publish('CONTACT_ADDED', { contactAdded: contact });
      return contact;
    },
    editContact: (root: any, { id, data }: editContact) => {
      const contactIndex = contacts.findIndex(contact => contact.id === id);
      if (contactIndex === -1) return null;
      const newContact = {
        ...contacts[contactIndex],
        ...data,
      };
      contacts.splice(contactIndex, 1, newContact);
      pubsub.publish('CONTACT_UPDATED', { contactUpdated: newContact });
      return newContact;
    },
    deleteContact: (root: any, { id }: Entity) => {
      const contactIndex = contacts.findIndex(contact => contact.id === id);

      if (contactIndex === -1) return null;

      const contactDeleted = contacts[contactIndex];
      contacts.splice(contactIndex, 1);

      pubsub.publish('CONTACT_DELETED', { contactDeleted });
      return 'OK';
    },
  },
  Subscription: {
    contactAdded: {
      subscribe: () => {
        return pubsub.asyncIterator('CONTACT_ADDED');
      },
    },
    contactDeleted: {
      subscribe: () => {
        return pubsub.asyncIterator('CONTACT_DELETED');
      },
    },
    contactUpdated: {
      subscribe: () => {
        return pubsub.asyncIterator('CONTACT_UPDATED');
      },
    },
  },
};
