import { signInWithEmailAndPassword, signOut, User } from '@firebase/auth';
import { createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { firebaseAuth } from '../../FirebaseSetup';
import { AppRoutes } from '../AppRoutes';

interface IAuthContextProps {
  currentUser: User | null | undefined;
  logIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  logOut: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const AuthContext = React.createContext<IAuthContextProps>(null!);

export function useAuth() {
  return React.useContext(AuthContext);
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.currentUser) {
    return <Navigate to={AppRoutes.login} state={{ from: location }} />;
  }
  return children;
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  async function logIn(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    setCurrentUser(userCredential.user);
  }

  async function signUp(
    email: string,
    password: string
  ): Promise<UserCredential> {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  }

  async function logOut(): Promise<void> {
    await signOut(firebaseAuth);
    setCurrentUser(null);
  }

  const values: IAuthContextProps = {
    currentUser,
    logIn,
    signUp,
    logOut,
  };

  return (
    <AuthContext.Provider value={values}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
