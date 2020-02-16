const express = require('express');
const graphqlHTTP = require('express-graphql');
const resolvers = require('./resolvers');
const schema = require('./schema');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);

app.listen(3000, () => {
  console.log('Server is running');
});
