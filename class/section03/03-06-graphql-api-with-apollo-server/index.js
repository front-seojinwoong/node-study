import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Query {
    test: String
  }
` 

const resolvers = {
  Query: {
    test: () => {
      return "zxczczxczxcㅁㄴ이ㅏㅓㅁㄴ아ㅓㅗㅁㄴㅇ"
    }
  }, 
}

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
}); 

startStandaloneServer(server);