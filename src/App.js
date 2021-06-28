import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { useEffect } from "react";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import Rough from "./Rough";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const [{ basket }, dispatch] = useStateValue();
  const promise = loadStripe(
    "pk_test_51J6fk5SJHU51s7JlkHgbIHAp3Hn6rQF71wPYfkF8ZTFzGDojSONQ8qed27Ge7CEKeq2P4a4BO5akMesoAgbQ8FVZ00W7tRiHgN"
  );
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
