import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import gql from 'graphql-tag';
import { GET_CONTACT } from '../components/Contacts';

const ADD_CONTACT = gql`
  mutation addContact($firstName: String!, $lastName: String!, $email: String!) {
    addContact(firstName: $firstName, lastName: $lastName, email: $email) {
      id
      firstName
      lastName
      email
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation addMessage($body: String!, $type: String!) {
    addMessage(body: $body, type: $type) @client
  }
`;

const AddContact = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [addContact, { loading: isAdding }] = useMutation(ADD_CONTACT);
  const history = useHistory();
  const [addMessage] = useMutation(ADD_MESSAGE);

  const handleInput = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [name]: value
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addContact({
      variables: form,
      update: (proxy: any, { data: { addContact } }: any) => {
        const { contacts } = proxy.readQuery({ query: GET_CONTACT });
        console.log({ addContact });
        proxy.writeQuery({
          query: GET_CONTACT,
          data: { contacts: contacts.concat(addContact) }
        });
      }
    });

    addMessage({
      variables: {
        body: 'New contact added',
        type: 'success'
      }
    });

    history.push(`/`);
  };

  return (
    <form onSubmit={onSubmit}>
      <h3 className="title is-4">Add Contact</h3>
      <div className="field">
        <label htmlFor="firstName" className="label">
          First Name
        </label>
        <div className="field">
          <div className="control">
            <input
              type="text"
              name="firstName"
              className="input"
              value={form.firstName}
              onChange={handleInput}
              disabled={isAdding}
              required
            />
          </div>
        </div>
      </div>
      <div className="field">
        <label htmlFor="lastName" className="label">
          Last Name
        </label>
        <div className="field">
          <div className="control">
            <input
              type="text"
              name="lastName"
              className="input"
              value={form.lastName}
              onChange={handleInput}
              disabled={isAdding}
              required
            />
          </div>
        </div>
      </div>
      <div className="field">
        <label htmlFor="email" className="label">
          Email
        </label>
        <div className="field">
          <div className="control">
            <input
              type="text"
              name="email"
              className="input"
              value={form.email}
              onChange={handleInput}
              disabled={isAdding}
              required
            />
          </div>
        </div>
      </div>

      <button type="submit" className="button is-primary" disabled={isAdding}>
        Add Contact
      </button>
    </form>
  );
};

export default AddContact;
