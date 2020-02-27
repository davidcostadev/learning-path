import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Contacts from './components/Contacts';

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <header className='App-header'>
          <h1>CRM</h1>
        </header>
        <div>
          <Contacts />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
