import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import HomePage from 'pages/homepage/homepage'
import ShopPage from 'pages/shop/shop'
import SignInSignUp from 'pages/signin-signup/signin-signup'
import Header from 'components/header/header'
import { auth, createUserProfileDocument } from 'firebase-connect/firebase'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          })
        })
      }
      this.setState({ currentUser: userAuth })
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    )
  }
}

export default App
