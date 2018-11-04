import { action, decorate, observable } from "mobx";
import ApolloClient from "apollo-boost";
//import { client } from "../App";
import { getPhones } from "./PhoneList";

const client = new ApolloClient({
  uri: "https://graphql-react-meetup.herokuapp.com/"
});

class PhoneListModel {
  phones = [];

  constructor() {
    this.loadPhones();
  }

  loadPhones = async () => {
    const response = await client.query({ query: getPhones });
    const phones = response.data.getPhones;

    console.log(phones);
    this.setPhones(phones);
  };

  setPhones = phones => {
    this.phones = phones;
  };
}

export default decorate(PhoneListModel, {
  phones: observable,
  setPhones: action
});
