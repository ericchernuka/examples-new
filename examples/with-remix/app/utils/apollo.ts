import {
  createHttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

export const toApolloClient = async (request: Request, uri: string) => {
  const httpLink = createHttpLink({
    uri: uri,
  })

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from the session if it exists

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        brand: '1',
      },
    }
  })

  return new ApolloClient({
    cache: new InMemoryCache(),
    ssrMode: true,
    link: ApolloLink.from([authLink, httpLink]),
    connectToDevTools: false,
  })
}
