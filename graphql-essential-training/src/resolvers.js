const uuid = require('uuid');

const friends = [
  {
    id: 123,
    firstName: 'David',
    lastName: 'Costa',
    gender: 'male',
    age: 27,
    language: 'Portuguese',
    email: 'davidcostadev@gmail.com',
    contacts: [
      {
        firstName: 'Juliana',
        lastName: 'Costa'
      }
    ]
  }
];

const resolvers = {
  friends,
  getFriend: ({ id }) => friends.find(friend => friend.id === id),
  createFriend: ({ input }) => {
    const data = {
      id: uuid(),
      ...input
    };
    friends.push(data);
    return data;
  }
};

module.exports = resolvers;
