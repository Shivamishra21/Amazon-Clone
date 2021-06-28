import React, { useState, useEffect } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
import { useHistory } from "react-router-dom";
import { useSpring, animated } from "react-spring";
function Subtotal(value) {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const [v, setV] = useState(0);
  // useEffect(() => {
  //   // let sum = 0;
  //   // basket.map((item) => {
  //   //   sum += item.price;
  //   //   return sum;
  //   // });
  //   setV(getBasketTotal(basket));
  // });

  const styles = useSpring({
    loop: true,
    to: { opacity: 1, color: "#ffaaee" },

    from: { opacity: 0, color: "red" },
    config: {
      delay: 5000,
      duration: 1000,
    },
  });
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <animated.div style={styles}>
        <button
          className="subtotal__pay__button"
          onClick={(e) => {
            history.push("/payment");
          }}
        >
          Proceed to Checkout
        </button>
      </animated.div>
    </div>
  );
}

export default Subtotal;
