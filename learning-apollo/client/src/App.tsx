import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { WebSocketLink } from 'apollo-link-ws';

import './App.css';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true
  }
});
const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <header className='App-header'>
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
