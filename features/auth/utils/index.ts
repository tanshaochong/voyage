import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { auth, googleAuthProvider } from '@/app/firebase';
import { toast } from '@/components/ui/use-toast';
// const parseFirebaseAuthError = (errorCode: string): string => {
//     return errorCode.substring(5, errorCode.length).replaceAll("-", " ");
// };

export const handleGoogleOAuth = async () => {
  console.log('hello');
  return signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      if (process.env.MODE == 'development') {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
      }
      toast({
        title: 'Sign-in sucessful',
        description: 'You have been successfully signed-in.',
      });
    })
    .catch((error) => {
      if (process.env.MODE == 'development') {
        console.log(error);
      }
    });
};

export const handleRegister = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      if (process.env.MODE == 'development') {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
      }
      toast({
        title: 'Registration sucessful',
        description: 'You may now login with your email and password.',
      });
    })
    .catch((error) => {
      if (process.env.MODE == 'development') {
        console.log(error);
      }
      toast({
        title: 'Something went wrong.',
        description: 'Your sign in request failed. Please try again.',
        variant: 'destructive',
      });
    });
};

export const handleLogin = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      if (process.env.MODE == 'development') {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
      }
    })
    .catch((error) => {
      if (process.env.MODE == 'development') {
        console.log(error);
      }
    });
};

export const handleResetPassword = async (email: string) => {
  return sendPasswordResetEmail(auth, email)
    .then(() => {})
    .catch((error) => {
      if (process.env.MODE == 'development') {
        console.log(error);
      }
    });
};

export const handleLogout = async () => {
  return signOut(auth);
};
