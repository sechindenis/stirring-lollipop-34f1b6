import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (!result.user) {
        throw new Error('No user data returned');
      }
    } catch (error: any) {
      console.error('Error signing in with Google:', error);
      if (error.code === 'auth/network-request-failed') {
        throw new Error('Network error. Please check your internet connection');
      } else if (error.code === 'auth/popup-blocked') {
        throw new Error('Popups are blocked. Please allow popups for this website to continue.');
      } else {
        throw new Error('Failed to sign in with Google. Please try again');
      }
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      if (!result.user) {
        throw new Error('No user data returned');
      }
    } catch (error: any) {
      if (error.code === 'auth/invalid-credential') {
        throw new Error('Invalid email or password');
      } else if (error.code === 'auth/network-request-failed') {
        throw new Error('Network error. Please check your internet connection');
      }
      throw error;
    }
  };

  const signUpWithEmail = async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      if (!result.user) {
        throw new Error('No user data returned');
      }
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('Email already in use');
      } else if (error.code === 'auth/network-request-failed') {
        throw new Error('Network error. Please check your internet connection');
      }
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        throw new Error('No account found with this email');
      } else if (error.code === 'auth/network-request-failed') {
        throw new Error('Network error. Please check your internet connection');
      }
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      if (error.code === 'auth/network-request-failed') {
        throw new Error('Network error. Please check your internet connection');
      }
      throw error;
    }
  };

  const value = {
    user,
    loading,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
    resetPassword,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}