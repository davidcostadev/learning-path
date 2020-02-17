const uuid = require('uuid');
const { Friends, Aliens } = require('./dbConnection');

const resolvers = {
  Query: {
    friends: root => {
      console.log('1');
      return new Promise(async (resolve, reject) => {
        console.log('2');
        resolve(await Friends.find());
        // .exec((err, data) => {
        //   console.log('3');
        //   if (err) {
        //     console.error(err);
        //     reject(err);
        //     return;
        //   }
        //   resolve(data);
        // });
      });
    },
    // getFriend: ({ id }) => friends.find(friend => friend.id === id),
    aliens: () => Aliens.findAll()
  },
  Mutation: {
    createFriend: async (root, { input }) => {
      const newFriend = new Friends({
        firstName: input.firstName,
        lastName: input.lastName,
        gender: input.gender,
        age: input.age,
        language: input.language,
        email: input.email,
        contacts: input.contacts
      });

      newFriend.id = newFriend._id;

      const friend = await newFriend.save();
      return friend;
    }
  }
};

module.exports = resolvers;
