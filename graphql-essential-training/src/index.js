const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello!');
});

const root = {
  hello: () => 'asdsdas'
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
