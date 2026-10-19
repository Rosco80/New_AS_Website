import React, { useState, useRef, useEffect } from 'react';

interface ChatInputBarProps {
  onSendMessage: (text: string) => void;
  disabled: boolean;
  isOpen: boolean;
}

export const ChatInputBar: React.FC<ChatInputBarProps> = ({ onSendMessage, disabled, isOpen }) => {
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Autofocus on desktop only: on phones it pops the keyboard (and zoom) the moment the chat opens
    if (isOpen && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim() || disabled) return;
    onSendMessage(text.trim());
    setText('');
  };

  return (
    <form className="af-chat-input-bar" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask Autoflow Solutions AI..."
        disabled={disabled}
        aria-label="Your message to Autoflow Solutions AI"
      />
      <button
        type="submit"
        className="af-chat-send-btn"
        disabled={disabled || !text.trim()}
        aria-label="Send message"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </form>
  );
};
