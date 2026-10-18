import React from 'react';

interface ChatHeaderProps {
  onClose: () => void;
  onClearHistory: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose, onClearHistory }) => {
  return (
    <div className="af-chat-header">
      <div className="af-chat-header-title">
        <div className="af-chat-avatar" aria-hidden="true">
          AS
        </div>
        <div className="af-chat-header-info">
          <h4>Autoflow Solutions AI</h4>
          <div className="af-chat-header-status">
            <span className="af-status-dot" />
            <span>AI Specialist · Ready</span>
          </div>
        </div>
      </div>

      <div className="af-chat-header-actions">
        <button
          type="button"
          className="af-chat-icon-btn"
          onClick={onClearHistory}
          title="Reset conversation"
          aria-label="Reset conversation"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
          </svg>
        </button>

        <button
          type="button"
          className="af-chat-icon-btn"
          onClick={onClose}
          title="Minimize chat"
          aria-label="Minimize chat"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
};
