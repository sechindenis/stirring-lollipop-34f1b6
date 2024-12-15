import { useState } from 'react';

export function useAuthButton(
  authAction: () => Promise<void>,
  onError: (error: string) => void
) {
  const [loading, setLoading] = useState(false);

  const handleAuth = async () => {
    try {
      setLoading(true);
      await authAction();
    } catch (error: any) {
      onError(error.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleAuth };
}