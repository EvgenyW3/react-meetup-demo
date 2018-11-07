import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import PhoneList from "./components/PhoneList";

export const client = new ApolloClient({
  uri: "http://localhost:4000"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Hello React people!</h2>
      </div>
      <PhoneList />
    </ApolloProvider>
  );
}

export default App;
