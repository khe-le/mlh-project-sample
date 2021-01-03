import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import * as React from "react";
import ResourcesPage from "./pages/ResourcesPage.js";
import { withRoot } from "./withRoot";
import ButtonAppBar from "./components/Navigation/AppBar";

//Apollo client
const GRAPHQL_ENDPOINT = "white-jupiter.hasura.app/v1/graphql";

const httpLink = new HttpLink({
  uri: `https://${GRAPHQL_ENDPOINT}`,
});

const wsLink = new WebSocketLink({
  uri: `wss://${GRAPHQL_ENDPOINT}`,
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});

const App = () => {
  return (
    // Apollo client
    <ApolloProvider client={client}>
      <ButtonAppBar></ButtonAppBar>
      <ResourcesPage></ResourcesPage>
    </ApolloProvider>
  );
};

export default withRoot(App);
