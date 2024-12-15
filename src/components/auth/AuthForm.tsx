import React, { useState } from 'react';
import { AuthLayout } from './AuthLayout';
import { AuthButtons } from './AuthButtons';
import { EmailForm } from './EmailForm';

export function AuthForm() {
  const [mode, setMode] = useState<'signin' | 'signup' | 'reset'>('signin');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleModeSwitch = (newMode: 'signin' | 'signup' | 'reset') => {
    setMode(newMode);
    setError(null);
    setSuccess(null);
  };

  const getTitle = () => {
    switch (mode) {
      case 'signup': return 'Create Account';
      case 'reset': return 'Reset Password';
      default: return 'Welcome Back';
    }
  };

  return (
    <AuthLayout title={getTitle()}>
      {mode !== 'reset' && (
        <AuthButtons 
          className="mb-4" 
          onError={setError}
        />
      )}

      <EmailForm
        mode={mode}
        error={error}
        success={success}
        onError={setError}
        onSuccess={setSuccess}
      />

      <div className="mt-4 text-center space-y-2">
        {mode !== 'reset' && (
          <button
            onClick={() => handleModeSwitch(mode === 'signup' ? 'signin' : 'signup')}
            className="text-blue-500 hover:text-blue-600 text-sm block w-full"
          >
            {mode === 'signup' 
              ? 'Already have an account? Sign in' 
              : "Don't have an account? Sign up"}
          </button>
        )}
        <button
          onClick={() => handleModeSwitch(mode === 'reset' ? 'signin' : 'reset')}
          className="text-gray-500 hover:text-gray-600 text-sm block w-full"
        >
          {mode === 'reset' ? 'Back to sign in' : 'Forgot password?'}
        </button>
      </div>
    </AuthLayout>
  );
}