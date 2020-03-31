import React from 'react';
import gql from 'graphql-tag';
import { graphql, useSubscription } from 'react-apollo';

interface contact {
  id: string;
  firstName: string;
  lastName: String;
}

const NOTE_ADDED_SUBSCRIPTION = gql`
  subscription onNoteAdded($contactId: ID!) {
    noteAdded(contactId: $contactId) {
      id
      details
    }
  }
`;

const Contacts = ({ id, firstName, lastName }: contact) => {
  console.log({ id });
  const a = useSubscription(NOTE_ADDED_SUBSCRIPTION, {
    variables: {
      contactId: id
    }
  });
  console.log('subscription', a);
  return (
    <li key={id}>
      {firstName} {lastName}
    </li>
  );
};

export default Contacts;
