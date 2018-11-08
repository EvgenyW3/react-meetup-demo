import React from "react";

function PhoneCard({ phone: { brand, model, image, price, tag } }) {
  return (
    <div className="phone-card-container">
      <div className="tag">{tag && <span>{tag}</span>}</div>
      <div className="image-container">
        <div className="image" style={{ backgroundImage: `url(${image})` }} />
      </div>

      <div className="brand">{brand}</div>
      <div className="model">{model}</div>
      {price && <div className="price">{price} €</div>}
    </div>
  );
}

export default PhoneCard;
