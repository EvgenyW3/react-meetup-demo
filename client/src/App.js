import React from "react";
import ApolloClient from "apollo-boost";
import PhoneList from "./components/PhoneList";
import PhoneListModel from "./components/PhoneListModel";

const store = new PhoneListModel();

export const client = new ApolloClient({
  uri: "https://graphql-react-meetup.herokuapp.com/"
});

function App() {
  return (
    <React.Fragment>
      <div>
        <h2>Hello React people!</h2>
      </div>
      <PhoneList phoneListModel={store} />
    </React.Fragment>
  );
}

export default App;
