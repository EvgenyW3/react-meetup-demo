import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import PhoneList from "./components/PhoneList";
import PhoneListModel from "./components/PhoneListModel";

const store = new PhoneListModel();

export const client = new ApolloClient({
  uri: "https://graphql-react-meetup.herokuapp.com/"
});

function App() {
  return (
    // <ApolloProvider client={client}>
    //   <div>
    //     <h2>Hello React people!</h2>
    //   </div>
    <PhoneList phoneListModel={store} />
    // </ApolloProvider>
  );
}

export default App;
