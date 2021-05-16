import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from '../data/resolvers.graphql';
import { typeDefs } from '../data/schema.graphql';
import { PORT } from '../config/config';

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.get('/', (req, res) => {
    console.log("Apollo GraphQL Express server is ready");
});

app.listen({ port: PORT }, () => {
    console.log(`Server is running at http://localhost:8080${server.graphqlPath}`);
});


