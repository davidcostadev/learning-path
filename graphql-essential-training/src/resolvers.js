const uuid = require('uuid');
const { Friends, Aliens } = require('./dbConnection');

const resolvers = {
  Query: {
    friends: root => Friends.find(),
    getFriend: (root, { id }) => Friends.findOne({ _id: id }),
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
    },
    updateFriend: async (root, { input }) => (
      Friends.findByIdAndUpdate(input.id, input, { new:true })
    ),
    removeFriend: async (root, { id }) => {
      await Friends.findByIdAndRemove(id);
      return 'ok'
    }
  }
};

module.exports = resolvers;
