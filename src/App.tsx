import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { CounterApp } from './components/CounterApp';

export function App() {
  return (
    <AuthProvider>
      <CounterApp />
    </AuthProvider>
  );
}