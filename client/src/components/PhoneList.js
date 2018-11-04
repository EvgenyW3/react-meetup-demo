import React from "react";
import gql from "graphql-tag";
import { observer } from "mobx-react";

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

function PhoneList({ phoneListModel }) {
  return phoneListModel.phones.map(
    ({ id, brand, model, price, image, tag }) => (
      <ul key={id}>
        <li>{brand}</li>
        <li>{model}</li>
        <li>{price}€</li>
        <li>
          <img src={image} alt="phone" />
        </li>
        <li>{tag}</li>
      </ul>
    )
  );
}

export default observer(PhoneList);
