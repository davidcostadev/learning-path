import { PubSub, withFilter } from 'graphql-subscriptions';

const pubsub = new PubSub();

interface Note {
  id: string;
  details: string;
}

interface NoteInput {
  note: {
    contactId: string;
    details: string;
  };
}

interface addContactType {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  notes: Note[];
}

const contacts: [addContactType] = [
  {
    id: '1',
    firstName: 'David',
    lastName: ' Costa',
    email: 'davidcostadev@gmail.com',
    notes: [],
  },
];

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
        notes: [],
      };

      contacts.push(contact);
      return contact;
    },
    addNote: (root: any, { note }: NoteInput) => {
      const contact = contacts.find(contact => contact.id === note.contactId);

      if (!contact) {
        throw new Error('Contact does not found!');
      }

      const id = require('crypto')
        .randomBytes(5)
        .toString('hex');
      const newNote = {
        id: String(id),
        details: note.details,
      };
      contact.notes.push(newNote);

      pubsub.publish('noteAdded', {
        noteAdded: newNote,
        contactId: contact.id,
      });
      return newNote;
    },
  },
  Subscription: {
    noteAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator('noteAdded'),
        (payload, variables) => {
          console.log('subscript', payload);
          return payload.contactId === variables.contactId;
        },
      ),
    },
  },
};
