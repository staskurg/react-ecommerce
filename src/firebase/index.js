import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAoz1z0U0mmb5g8w1KiZzu2EDCZnQ9MEP8',
  authDomain: 'store-db-7fc2d.firebaseapp.com',
  databaseURL: 'https://store-db-7fc2d.firebaseio.com',
  projectId: 'store-db-7fc2d',
  storageBucket: 'store-db-7fc2d.appspot.com',
  messagingSenderId: '145905288063',
  appId: '1:145905288063:web:e27bcd0654ab7ce625904a',
  measurementId: 'G-NXEXCJ1JP1',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (err) {
      console.log('Error create user', err.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
