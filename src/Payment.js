import React, { useState,useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link ,useHistory} from "react-router-dom";
import { useElements, CardElement, useStripe } from "@stripe/react-stripe-js";
import  CurrencyFormat  from "react-currency-format";
import { getBasketTotal } from "./Reducer";
import axios from "./axios";


function Payment() {
  const history = useHistory()
  
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing,setProcessing] = useState('')
  const [succeeded,setSucceeded] = useState(false)
  const [clientSecret, setclientSecret] = useState('')

  //useEffect get called whenever there is any changes in the  values , the second parameter defines on which value change we want to callit so here we want to call it in case of any changes in basket 

  //So here in our case suppose we want to cost a customer $1000 bt customer add or delete some of the prodct in that case we need to call useEffect
  useEffect(()=>{
      //generate special stripe secret which allows us to charge a customer
      const getClientSecret = async ()=>{
          const response =  await axios({
            method:'post',
            //stripe expects the total in currencies sununits
            //dollors -> cents 
            url : `/payment/create?total=${getBasketTotal(basket)*100}`
          })
          setclientSecret(response.data.clientSecret)
      }
      getClientSecret()

  },[basket])

  const handleSubmit = async (event) => {
    // do all fancy stripe functionalities
    event.preventDefault()
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:elements.getElement(CardElement)
      }
    }).then(({paymentIntent})=>{
      setSucceeded(true)
      setProcessing(false)
      setError(null)
      history.replace('/orders')
    })


  };

  const handleChange = (e) => {
    // listen to changes in cardElement
    // and display any errors as the customer types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
        {/* Payment component : Delivery method */}

        <div className="payment__section">
          <div className="payment__title">
            <h3 style={{ display: "block" }}>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment component : Review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review your items</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        {/* Payment component : Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe things will go here */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>Order Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />{" "}
                <button disabled={processing||disabled||succeeded}><span>{processing?<p>Processing</p>:"Buy Now"}</span></button>
                
              </div>
              {/* In case there is any error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
