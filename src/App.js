import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { useEffect } from "react";
import Checkout from "./Checkout";

function App() {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);
      if (authUser) {
        dispatchEvent({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatchEvent({
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
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path='/checkout'>
            <Checkout/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
