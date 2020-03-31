import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useParams, useHistory } from 'react-router-dom';
import { gql } from 'apollo-boost';

const GET_CONTACT = gql`
  query($id: ID!) {
    getContact(id: $id) {
      firstName
      lastName
      email
    }
  }
`;

const EDIT_CONTACT = gql`
  mutation editContact($id: ID!, $data: ContactEdit!) {
    editContact(id: $id, data: $data) {
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

const EditContact = (props: any) => {
  const { id } = useParams();
  const { loading: isGetting, data } = useQuery(GET_CONTACT, {
    variables: {
      id
    }
  });
  const [editContact, { loading: isEditing }] = useMutation(EDIT_CONTACT);
  const [addMessage] = useMutation(ADD_MESSAGE);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const history = useHistory();

  useEffect(() => {
    if (data) {
      setForm({
        firstName: data.getContact.firstName,
        lastName: data.getContact.lastName,
        email: data.getContact.email
      });
    }
  }, [data]);

  const handleInput = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [name]: value
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editContact({
      variables: {
        id,
        data: form
      }
    });

    addMessage({
      variables: {
        body: `The contact #${id}-${form.firstName} was updated.`,
        type: 'success'
      }
    });

    history.push(`/`);
  };

  if (isGetting) {
    return (
      <progress className="progress is-small is-primary" max="100">
        15%
      </progress>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <h3 className="title is-4">Edit Contact</h3>
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
              disabled={isEditing}
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
              disabled={isEditing}
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
              disabled={isEditing}
              required
            />
          </div>
        </div>
      </div>

      <button type="submit" className="button is-primary" disabled={isEditing}>
        Update Contact
      </button>
    </form>
  );
};

export default EditContact;
