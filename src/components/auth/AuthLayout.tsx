import React from 'react';

interface AuthLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function AuthLayout({ title, children }: AuthLayoutProps) {
  return (
    <div className="h-full flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
        {children}
      </div>
    </div>
  );
}