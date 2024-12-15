import React from 'react';
import { GoogleButton } from './GoogleButton';

interface AuthButtonsProps {
  className?: string;
  onError: (error: string) => void;
}

export function AuthButtons({ className = '', onError }: AuthButtonsProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <GoogleButton onError={onError} />
      <div className="relative flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-400 text-sm">or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
    </div>
  );
}