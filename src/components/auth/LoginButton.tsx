import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function LoginButton() {
  const { signInWithGoogle } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await signInWithGoogle();
    } catch (error) {
      setError('Unable to sign in. Please try again and make sure popups are allowed.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={handleSignIn}
        disabled={isLoading}
        className={`flex items-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-lg shadow-md hover:bg-gray-50 transition-colors ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <LogIn size={20} />
        <span>{isLoading ? 'Signing in...' : 'Sign in with Google'}</span>
      </button>
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
      <p className="text-gray-500 text-sm max-w-md text-center">
        Please make sure popups are allowed in your browser to sign in with Google.
      </p>
    </div>
  );
}