import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface UseAuthFormProps {
  mode: 'signin' | 'signup' | 'reset';
  onError: (error: string) => void;
  onSuccess: (message: string) => void;
}

export function useAuthForm({ mode, onError, onSuccess }: UseAuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signInWithEmail, signUpWithEmail, resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      switch (mode) {
        case 'reset':
          await resetPassword(email);
          onSuccess('Password reset email sent. Please check your inbox.');
          break;
        case 'signup':
          await signUpWithEmail(email, password);
          break;
        default:
          await signInWithEmail(email, password);
      }
    } catch (error: any) {
      onError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleSubmit
  };
}