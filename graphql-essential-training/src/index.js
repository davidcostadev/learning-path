const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello!');
});

const root = {
  friend: () => ({
    id: 123,
    firstName: 'David',
    lastName: 'Costa',
    gender: 'Male',
    languange: 'Portuguese',
    emails: [{ email: 'davidcostadev@gmail.com' }]
  })
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(3000, () => {
  console.log('Server is running');
});
