import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PhoneCard from "./PhoneCard";

export const getPhones = gql`
  {
    getPhones {
      id
      brand
      model
      price
      image
      tag
    }
  }
`;

function PhoneList() {
  return (
    <Query query={getPhones}>
      {({ loading, error, data }) => {
        if (loading) return <p>Lodaing...</p>;
        if (error) return <p>You are in trouble!</p>;

        return (
          <div className="demo-app-wrapper">
            {data.getPhones.map(phone => (
              <PhoneCard phone={phone} key={phone.id} />
            ))}
          </div>
        );
      }}
    </Query>
  );
}

export default PhoneList;
