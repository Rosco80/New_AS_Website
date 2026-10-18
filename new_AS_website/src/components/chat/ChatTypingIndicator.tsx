import React from 'react';

export const ChatTypingIndicator: React.FC = () => {
  return (
    <div className="af-chat-typing-bubble" aria-label="Autoflow Solutions Assistant is typing">
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
    </div>
  );
};
