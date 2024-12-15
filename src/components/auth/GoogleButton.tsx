import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useAuthButton } from '../../hooks/useAuthButton';
import { PopupBlockedMessage } from './PopupBlockedMessage';

interface GoogleButtonProps {
  onError: (error: string) => void;
}

export function GoogleButton({ onError }: GoogleButtonProps) {
  const [showPopupMessage, setShowPopupMessage] = React.useState(false);
  const { signInWithGoogle } = useAuth();
  const { loading, handleAuth } = useAuthButton(signInWithGoogle, (error) => {
    if (error.toLowerCase().includes('popup')) {
      setShowPopupMessage(true);
    } else {
      onError(error);
    }
  });

  const handleClick = async () => {
    setShowPopupMessage(false);
    await handleAuth();
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={loading}
        className={`w-full flex items-center justify-center gap-2 py-2 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google"
          className="w-5 h-5"
        />
        <span className="text-gray-700">
          {loading ? 'Signing in...' : 'Continue with Google'}
        </span>
      </button>
      {showPopupMessage && (
        <PopupBlockedMessage onClose={() => setShowPopupMessage(false)} />
      )}
    </>
  );
}