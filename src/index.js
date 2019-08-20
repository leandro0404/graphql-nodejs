const {GraphQLServer} = require('graphql-yoga');

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers');

const server = new GraphQLServer({typeDefs, resolvers});
server.start(4000);