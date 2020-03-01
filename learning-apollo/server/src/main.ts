import { createServer } from 'http';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';

const server = new ApolloServer({ resolvers, typeDefs });
const app = express();
const httpServer = createServer(app);

server.applyMiddleware({ app });
server.installSubscriptionHandlers(httpServer);

const port = process.env.PORT;

httpServer.listen({ port: port }, () => {
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`);
});
