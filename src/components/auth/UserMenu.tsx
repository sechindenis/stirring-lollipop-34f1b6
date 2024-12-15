import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function UserMenu() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <img
          src={user.photoURL || ''}
          alt={user.displayName || 'User'}
          className="w-8 h-8 rounded-full"
        />
        <span className="text-gray-800">{user.displayName}</span>
      </div>
      <button
        onClick={logout}
        className="flex items-center gap-2 px-3 py-1 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <LogOut size={18} />
      </button>
    </div>
  );
}