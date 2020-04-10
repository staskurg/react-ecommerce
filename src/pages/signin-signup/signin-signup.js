import React from 'react'

import SignIn from 'components/signin/signin'
import SignUp from 'components/signup/signup'

import './styles.scss'

const SignInSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInSignUp
