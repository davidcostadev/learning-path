const express = require('express');
const graphqlHTTP = require('express-graphql');
const uuid = require('uuid');

const schema = require('./schema');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello!');
});

const friends = [
  {
    id: 123,
    firstName: 'David',
    lastName: 'Costa',
    gender: 'Male',
    languange: 'Portuguese',
    email: 'davidcostadev@gmail.com'
  }
];

const root = {
  friend: () => friends[0],
  createFriend: ({ input }) => {
    const data = {
      id: uuid(),
      ...input
    };
    friends.push(data);
    return data;
  }
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
