import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { useEffect } from "react";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";

function App() {
  const [{basket},dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        // console.log("gi");
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        console.log("df");
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
          <Route exact path="/" >
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
