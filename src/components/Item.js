import React, { useState } from "react";

function Item({ name, category }) {

  const [cartFlag, setCartFlag] = useState(false);
  const cartClass = cartFlag ? "in-cart" : "";
  const cartText = cartFlag ? "Remove From Cart" : "Add to Cart";
  const btnClass = cartFlag ? "remove" : "add";

  function handleAddToCart() {
    setCartFlag((cartFlag) => !cartFlag);
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className={btnClass}>{cartText}</button>
    </li>
  );
}

export default Item;
