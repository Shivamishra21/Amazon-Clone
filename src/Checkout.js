import React, { forwardRef } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const fade = useSpring({
    from: {
      marginLeft:"-500rem",
      
    },
    to: {
      marginLeft:"0rem"
      
    },
    config:{
      duration:1000,
      delay:1000
    }
  });
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello,{user?.email} </h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map((item, i) => {
            return (
              <animated.div style={fade}>
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              </animated.div>
            );
          })}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
