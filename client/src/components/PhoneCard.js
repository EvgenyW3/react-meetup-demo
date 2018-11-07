import React from "react";

function PhoneCard({ phone: { brand, model, image, price, tag } }) {
  return (
    <div className="phone-card-container">
      <div className="tag">
        <span>{tag}</span>
      </div>
      <div className="image-container">
        <div className="image" style={{ backgroundImage: `url(${image})` }} />
      </div>

      <div className="brand">{brand}</div>
      <div className="model">{model}</div>
      <div className="price">{price} €</div>
    </div>
  );
}

export default PhoneCard;
