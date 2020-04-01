import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import { HomePage } from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    this.usubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snap => {
          this.setState({
            currentUser: {
              id: snap.id,
              ...snap.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.usubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
