import React, { useState } from 'react';
import gql from 'graphql-tag';
import { graphql, MutationOptions } from 'react-apollo';
import { contactsListQuery } from './Contacts';

const AddContact = (props: any) => {
  console.log(props);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });

  const handleInput = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [name]: value
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    props.mutate({
      variables: form,
      update: (proxy: any, { data: { addContact } }: any) => {
        const { contacts } = proxy.readQuery({ query: contactsListQuery });
        proxy.writeQuery({
          query: contactsListQuery,
          data: { contacts: contacts.concat(addContact) }
        });
      }
    });
    // console.log(form);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='firstName'>First Name:</label>
      <input type='text' name='firstName' value={form.firstName} onChange={handleInput} required />
      <br />
      <label htmlFor='lastName'>Last Name:</label>
      <input type='text' name='lastName' value={form.lastName} onChange={handleInput} required />
      <br />
      <label htmlFor='email'>Email:</label>
      <input type='email' name='email' value={form.email} onChange={handleInput} required />
      <br />
      <button type='submit'>Add Contact</button>
    </form>
  );
};

export const createContact = gql`
  mutation addContact($firstName: String!, $lastName: String!, $email: String!) {
    addContact(firstName: $firstName, lastName: $lastName, email: $email) {
      id
      firstName
      lastName
    }
  }
`;

export default graphql(createContact)(AddContact);
