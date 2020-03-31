import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import get from 'lodash.get';
import { Contact, ContactData, Message } from '../types';

const CONTACT_ADDED_SUBSCRIPTION = gql`
  subscription {
    contactAdded {
      id
      firstName
      lastName
      email
    }
  }
`;
const CONTACT_UPDATED_SUBSCRIPTION = gql`
  subscription {
    contactUpdated {
      id
      firstName
      lastName
      email
    }
  }
`;

const CONTACT_DELETED_SUBSCRIPTION = gql`
  subscription {
    contactDeleted {
      id
      firstName
      lastName
      email
    }
  }
`;

const DELETE_CONTACT = gql`
  mutation($id: ID!) {
    deleteContact(id: $id)
  }
`;

export const GET_CONTACT = gql`
  query getContacts {
    contacts {
      id
      firstName
      lastName
      email
    }
  }
`;

export const GET_MESSAGES = gql`
  query {
    messages @client {
      id
      body
      type
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation addMessage($body: String!, $type: String!) {
    addMessage(body: $body, type: $type) @client
  }
`;

const DELETE_MESSAGE = gql`
  mutation deleteMessage($id: ID!) {
    deleteMessage(id: $id) @client
  }
`;

const updateQuery = (prev: any, next: any) => {
  if (next.subscriptionData.data.contactAdded) {
    return {
      contacts: [...prev.contacts, next.subscriptionData.data.contactAdded]
    };
  }

  if (next.subscriptionData.data.contactDeleted) {
    return {
      contacts: prev.contacts.filter(
        (contact: Contact) => contact.id !== next.subscriptionData.data.contactDeleted.id
      )
    };
  }
  if (next.subscriptionData.data.contactUpdated) {
    const { contactUpdated } = next.subscriptionData.data;
    return {
      contacts: prev.contacts.map((contact: Contact) =>
        contact.id === contactUpdated.id ? contactUpdated : contact
      )
    };
  }

  return prev;
};

const Contacts = () => {
  const { loading: isGetting, data, error, subscribeToMore } = useQuery<ContactData>(GET_CONTACT);
  const [deleteContact, { loading: isDeleting }] = useMutation(DELETE_CONTACT);
  const [deleteMessage] = useMutation(DELETE_MESSAGE);
  const [addMessage] = useMutation(ADD_MESSAGE);
  const { data: dataMessage } = useQuery(GET_MESSAGES);

  React.useEffect(() => {
    subscribeToMore({
      document: CONTACT_ADDED_SUBSCRIPTION,
      updateQuery
    });
    subscribeToMore({
      document: CONTACT_UPDATED_SUBSCRIPTION,
      updateQuery
    });
    subscribeToMore({
      document: CONTACT_DELETED_SUBSCRIPTION,
      updateQuery
    });
  }, []);

  const messages = get(dataMessage, 'messages') || [];

  if (error) return <p>Error {error.message}</p>;

  const onDelete = (item: Contact) => () => {
    if (window.confirm(`Do you really want to delete item ${item.firstName} #${item.id}?`)) {
      deleteContact({
        variables: {
          id: item.id
        },
        update: (proxy: any, args: any) => {
          const { contacts } = proxy.readQuery({ query: GET_CONTACT });
          proxy.writeQuery({
            query: GET_CONTACT,
            data: { contacts: contacts.filter((contact: Contact) => contact.id !== item.id) }
          });
        }
      });

      addMessage({
        variables: {
          body: `The contact #${item.id}-${item.firstName} was deleted.`,
          type: 'success'
        }
      });
    }
  };

  if (isGetting || !data) {
    return (
      <progress className="progress is-small is-primary" max="100">
        15%
      </progress>
    );
  }

  const { contacts } = data;

  return (
    <>
      <div className="flex justify-between mb-3">
        <h3 className="title is-4">Contacts</h3>
        <Link className="button is-primary" to="/contacts/add">
          Add Contact
        </Link>
      </div>
      {!!messages.length &&
        messages.map((message: Message) => (
          <div key={message.id} className={`message is-${message.type}`}>
            <div className="message-header">
              <p>Alert</p>
              <button
                className="delete"
                onClick={() => deleteMessage({ variables: { id: message.id } })}
              ></button>
            </div>
            <div className="message-body">{message.body}</div>
          </div>
        ))}
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th className="w-1">#</th>
            <th>Name</th>
            <th>Email</th>
            <th className="w-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {!contacts.length && (
            <tr>
              <td colSpan={4} align="center">
                No data found
              </td>
            </tr>
          )}
          {contacts.map((item: Contact) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {item.firstName} {item.lastName}
              </td>
              <td>{item.email || '-'}</td>
              <td>
                <div className="flex justify-between">
                  <Link to={`/contacts/${item.id}/edit`} className="button is-link mr-1">
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="button is-danger"
                    onClick={onDelete(item)}
                    disabled={isDeleting}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <ul>
        {contacts.map(({ id, firstName, lastName }: contact) => (
          <Contact key={id} id={id} firstName={firstName} lastName={lastName} />
        ))}
      </ul> */}
    </>
  );
};

export default Contacts;
