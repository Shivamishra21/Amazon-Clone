import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { animated, useSpring } from "react-spring";
function CheckoutProduct({ id, image, title, price, rating ,hidebutton}) {
  const [{ basket }, dispatch] = useStateValue();
  const fade = useSpring({
    from: {
      marginLeft: "-500rem",
    },
    to: {
      marginLeft: "0rem",
    },
    config: {
      duration: 1000,
      delay: 1000,
    },
  });
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="not found" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return(<p key={i}>⭐</p>)
            })}
        </div>

        {!hidebutton && (<button onClick={removeFromBasket}>Remove from Basket</button>)}
      </div>
    </div>
  );
}

export default CheckoutProduct;
