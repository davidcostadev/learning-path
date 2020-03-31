import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { gql } from 'apollo-boost';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { WebSocketLink } from 'apollo-link-ws';
import { v4 as uuid } from 'uuid';
// import { SubscriptionClient } from 'subscriptions-transport-ws';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { Message } from './types';

import './App.css';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';
import Contacts from './components/Contacts';

const GRAPHQL_ENDPOINT = 'ws://localhost:4000/graphql';

// // const wsLink = new SubscriptionClient(GRAPHQL_ENDPOINT, {
// //   reconnect: true
// // });

const link = ApolloLink.from([
  // hasSubscriptionOperation,
  // @ts-ignore
  new WebSocketLink({
    uri: GRAPHQL_ENDPOINT,
    options: {
      reconnect: true
    }
  }),
  // @ts-ignore
  createHttpLink({
    uri: 'http://localhost:4000/graphql'
  })
]);

// const link = new HttpLink({
//   uri: 'http://localhost:4000/graphql'
// });

const cache = new InMemoryCache();

cache.writeData({
  data: {
    messages: []
  }
});

const GET_MESSAGE = gql`
  query messages {
    messages @client {
      id
      body
      type
    }
  }
`;

const client = new ApolloClient({
  // @ts-ignore
  link,
  cache,
  resolvers: {
    Mutation: {
      addMessage: (root, variables: { body: string; type: string }, { cache }) => {
        const { messages } = cache.readQuery({ query: GET_MESSAGE });

        const newMessage = {
          id: uuid(),
          ...variables,
          __typename: 'Message'
        };

        cache.writeQuery({
          query: GET_MESSAGE,
          data: {
            messages: [...messages, newMessage]
          }
        });

        return newMessage;
      },
      deleteMessage: (root, { id }: { id: string }, { cache }) => {
        const { messages } = cache.readQuery({ query: GET_MESSAGE });

        cache.writeQuery({
          query: GET_MESSAGE,
          data: {
            messages: messages.filter((message: Message) => message.id !== id)
          }
        });

        return 'OK';
      }
    }
  }
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <header className="hero is-primary">
            <div className="hero-body">
              <div className="container">
                <Link to="/">
                  <h1 className="title">CRM</h1>
                </Link>
              </div>
            </div>
          </header>
          <Switch>
            <Route path="/contacts/add">
              <div className="section">
                <div className="container">
                  <AddContact />
                </div>
              </div>
            </Route>
            <Route path="/contacts/:id/edit">
              <div className="section">
                <div className="container">
                  <EditContact />
                </div>
              </div>
            </Route>
            <Route path="/" exact>
              <div className="section">
                <div className="container">
                  <Contacts />
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
