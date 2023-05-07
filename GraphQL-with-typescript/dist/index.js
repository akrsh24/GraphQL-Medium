"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const data_1 = require("./data");
const config_1 = require("./config");
/**
 * Create an Apollo server instance.
 */
const server = new apollo_server_express_1.ApolloServer({ typeDefs: data_1.typeDefs, resolvers: data_1.resolvers });
/**
 * Create an express server and apply the Apollo Server middleware
 */
const app = (0, express_1.default)();
server.start().then(() => {
    server.applyMiddleware({ app });
    app.listen({ port: config_1.PORT }, () => {
        console.log(`Server is running at http://localhost:${config_1.PORT}${server.graphqlPath}`);
    });
});
app.get("/", (req, res) => {
    console.log("Apollo GraphQL Express server is ready");
});
