import React from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import ApolloClient from 'apollo-boost';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { ApolloLink } from 'apollo-link';
import { createHttpLink, HttpLink } from 'apollo-link-http';

import './App.css';
import AddContact from './components/AddContact';
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

const client = new ApolloClient({
  // @ts-ignore
  link,
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1>CRM</h1>
        </header>
        <div>
          <AddContact />
          <Contacts />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
