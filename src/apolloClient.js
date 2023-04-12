import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://your-graphql-endpoint',
    cache: new InMemoryCache(),
});

export default client;