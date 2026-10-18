import React, { useEffect, useRef } from 'react';
import { ChatTypingIndicator } from './ChatTypingIndicator';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

interface ChatMessageListProps {
  messages: ChatMessage[];
  isLoading: boolean;
}

// Lightweight Markdown parser for links, bold, and line breaks
function renderFormattedText(text: string) {
  // Split text by newlines
  const lines = text.split('\n');

  return lines.map((line, lineIdx) => {
    // Regex for markdown links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = linkRegex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        parts.push(line.substring(lastIndex, match.index));
      }
      const label = match[1];
      const url = match[2];
      parts.push(
        <a key={`${lineIdx}-${match.index}`} href={url} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < line.length) {
      parts.push(line.substring(lastIndex));
    }

    // Bold formatting (*text* or **text**)
    const renderedParts = parts.map((part, pIdx) => {
      if (typeof part !== 'string') return part;
      const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
      return boldParts.map((sub, sIdx) => {
        if (sub.startsWith('**') && sub.endsWith('**')) {
          return <strong key={`${lineIdx}-${pIdx}-${sIdx}`}>{sub.slice(2, -2)}</strong>;
        }
        return sub;
      });
    });

    const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ');

    return (
      <span key={lineIdx} style={{ display: 'block', marginBottom: lineIdx === lines.length - 1 ? 0 : '4px' }}>
        {isBullet ? (
          <span style={{ paddingLeft: '8px' }}>• {renderedParts}</span>
        ) : (
          renderedParts
        )}
      </span>
    );
  });
}

export const ChatMessageList: React.FC<ChatMessageListProps> = ({ messages, isLoading }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="af-chat-messages" role="log" aria-live="polite">
      {messages.map((msg) => (
        <div key={msg.id} className={`af-chat-bubble-row ${msg.sender}`}>
          <div className="af-chat-bubble">
            {renderFormattedText(msg.text)}
          </div>
          <span className="af-chat-timestamp">{msg.timestamp}</span>
        </div>
      ))}

      {isLoading && (
        <div className="af-chat-bubble-row bot">
          <ChatTypingIndicator />
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
};
