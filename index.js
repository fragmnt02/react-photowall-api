const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./resolver');

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: req => ({ ...req }) 
});

server.start(() => console.log('🚀  Graphql esta 🏃‍  en http://localhost:4000'));