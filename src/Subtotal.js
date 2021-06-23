import React, { useState, useEffect } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
import { useHistory } from "react-router-dom";

function Subtotal(value) {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const [v, setV] = useState(0);
  useEffect(() => {
    // let sum = 0;
    // basket.map((item) => {
    //   sum += item.price;
    //   return sum;
    // });
    setV(getBasketTotal(basket));
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
        value={v} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
