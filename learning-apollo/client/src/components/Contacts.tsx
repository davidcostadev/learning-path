import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

interface contact {
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
    contacts: [contact];
  };
};

const Contacts = (props: any) => {
  console.log(props);
  const { data: { loading, error, contacts } } = props
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <ul>
      {contacts.map(({ id, firstName, lastName }:contact) => (
        <li key={id}>
          {firstName} {lastName}
        </li>
      ))}
    </ul>
  );
};

export const contactsListQuery = gql`
  query {
    contacts {
      id
      firstName
      lastName
    }
  }
`;

export default graphql(contactsListQuery)(Contacts);
