export const resolvers = {
  Query: {
    contacts: () => {
      return [
        {
          id: 1,
          firstName: 'David',
          lastName: ' Costa',
          email: 'davidcostadev@gmail.com',
        },
      ];
    },
  },
};
