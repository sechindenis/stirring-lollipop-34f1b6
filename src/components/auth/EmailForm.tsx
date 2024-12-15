import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuthForm } from '../../hooks/useAuthForm';

interface EmailFormProps {
  mode: 'signin' | 'signup' | 'reset';
  error: string | null;
  success: string | null;
  onError: (error: string) => void;
  onSuccess: (message: string) => void;
}

export function EmailForm({ mode, error, success, onError, onSuccess }: EmailFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleSubmit
  } = useAuthForm({ mode, onError, onSuccess });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      {mode !== 'reset' && (
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      )}

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      {success && <p className="text-green-500 text-sm text-center">{success}</p>}

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? 'Please wait...' : (
          mode === 'reset' ? 'Send Reset Link' : 
          mode === 'signup' ? 'Sign Up' : 'Sign In'
        )}
      </button>
    </form>
  );
}