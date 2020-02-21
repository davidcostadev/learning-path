import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

interface contacts {
  id: string;
  firstName: string;
  lastName: String;
}

type ContactsProps = {
  data: {
    loading: boolean;
    error: {
      message: string;
    };
    contacts: [contacts];
  };
};

const Contacts = ({ data: { loading, error, contacts } }: ContactsProps) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul>
      {contacts.map(({ id, firstName, lastName }) => (
        <li key={id}>
          {firstName} {lastName}
        </li>
      ))}
    </ul>
  );
};

export const contactsListQuery = gql`
  query ContactsQuery {
    contacts {
      id
      fistName
      lastName
    }
  }
`;

export default graphql(contactsListQuery)(Contacts);
