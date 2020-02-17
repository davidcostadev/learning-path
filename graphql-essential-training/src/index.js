const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/graphql`);
});
