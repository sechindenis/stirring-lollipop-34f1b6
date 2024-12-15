import React from 'react';
import { X, AlertCircle } from 'lucide-react';

interface PopupBlockedMessageProps {
  onClose: () => void;
}

export function PopupBlockedMessage({ onClose }: PopupBlockedMessageProps) {
  return (
    <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <X size={16} />
      </button>
      <div className="flex gap-2">
        <AlertCircle className="text-yellow-500 flex-shrink-0" size={20} />
        <div className="text-sm text-yellow-700">
          <p className="font-medium mb-2">Popup Blocked</p>
          <ol className="list-decimal ml-4 space-y-1">
            <li>Look for the popup blocker icon in your browser's address bar</li>
            <li>Click it to open the popup blocker settings</li>
            <li>Select "Always allow popups from this site"</li>
            <li>Try signing in again</li>
          </ol>
        </div>
      </div>
    </div>
  );
}