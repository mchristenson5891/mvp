import React, { useState, useEffect, useContext, createContext } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
// Add your Firebase credentials
const firebaseConfig = {
  apiKey: 'AIzaSyAqiUeRHou4YZl43pMyR-XVoNekeHuYT1U',
  authDomain: 'hr-mvp-c9bab.firebaseapp.com',
  projectId: 'hr-mvp-c9bab',
  storageBucket: 'hr-mvp-c9bab.appspot.com',
  messagingSenderId: '419677262435',
  appId: '1:419677262435:web:b0dcd387e98ed0e93e1e56',
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth();

const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      (response) => {
        setUser(response.user);
        return response.user;
      }
    );
  };
  const signup = (email, password) => {
    console.log(
      '🚀 ~ file: useAuth.js ~ line 41 ~ signup ~ email, password',
      email,
      password
    );
    return createUserWithEmailAndPassword(auth, email, password).then(
      (response) => {
        setUser(response.user);
        return response.user;
      }
    );
  };
  const signout = () => {
    return auth.signOut().then(() => {
      setUser(false);
    });
  };
  const sendPasswordResetEmail = (email) => {
    return auth.sendPasswordResetEmail(email).then(() => {
      return true;
    });
  };
  const confirmPasswordReset = (code, password) => {
    return auth.confirmPasswordReset(code, password).then(() => {
      return true;
    });
  };
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}
