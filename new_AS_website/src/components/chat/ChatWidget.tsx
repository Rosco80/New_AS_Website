import { useState, useEffect, useCallback } from 'react';
import { ChatHeader } from './ChatHeader';
import { ChatQuickChips } from './ChatQuickChips';
import { ChatMessageList, type ChatMessage } from './ChatMessageList';
import { ChatInputBar } from './ChatInputBar';
import './chat.css';

// Configurable n8n endpoint: defaults to env var, with fallback to local proxy/direct endpoint
const N8N_WEBHOOK_URL = 
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.PUBLIC_N8N_CHAT_WEBHOOK_URL) ||
  'https://n8n.autoflow-solutions.com/webhook/chat';

const INITIAL_GREETING: ChatMessage = {
  id: 'greeting_v2',
  sender: 'bot',
  text: "👋 Hey there! Welcome to **Autoflow Solutions**.\n\nWe build custom AI systems and automated workflows for growing businesses—so you can scale operations without adding headcount.\n\nWhat would you like to explore today?",
  timestamp: ''
};

declare global {
  interface Window {
    posthog?: {
      capture: (event: string, properties?: Record<string, any>) => void;
    };
  }
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [currentPath, setCurrentPath] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  // Initialize session and history on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    setCurrentPath(window.location.pathname);

    // Retrieve or create persistent session ID
    let sid = localStorage.getItem('af_chat_session_id');
    if (!sid) {
      sid = 'sess_' + Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
      localStorage.setItem('af_chat_session_id', sid);
    }
    setSessionId(sid);

    // Retrieve saved conversation history
    const saved = localStorage.getItem('af_chat_history');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // If it's only the old greeting, upgrade to new greeting
        if (Array.isArray(parsed) && parsed.length === 1 && (parsed[0].id === 'greeting' || parsed[0].id === 'greeting_v2')) {
          // Upgrade greeting
        } else if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
          return;
        }
      } catch (e) {
        // Fallback to initial greeting on parse error
      }
    }

    const greetingWithTime: ChatMessage = {
      ...INITIAL_GREETING,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([greetingWithTime]);

    // Show friendly tooltip after 4 seconds if not opened
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Save history on change
  useEffect(() => {
    if (typeof window !== 'undefined' && messages.length > 0) {
      localStorage.setItem('af_chat_history', JSON.stringify(messages));
    }
  }, [messages]);

  const handleOpen = () => {
    setIsOpen(true);
    setShowTooltip(false);
    if (typeof window !== 'undefined' && window.posthog) {
      window.posthog.capture('chatbot_opened', {
        page: window.location.pathname,
        sessionId
      });
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClearHistory = () => {
    if (typeof window !== 'undefined') {
      const newSid = 'sess_' + Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
      localStorage.setItem('af_chat_session_id', newSid);
      setSessionId(newSid);
      localStorage.removeItem('af_chat_history');
    }
    const resetGreeting: ChatMessage = {
      ...INITIAL_GREETING,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([resetGreeting]);
  };

  const handleSendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: 'usr_' + Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    if (typeof window !== 'undefined' && window.posthog) {
      window.posthog.capture('chatbot_message_sent', {
        text: text.trim(),
        page: window.location.pathname,
        sessionId
      });
    }

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sessionId,
          message: text.trim(),
          page: typeof window !== 'undefined' ? window.location.pathname : '',
          locale: typeof document !== 'undefined' ? document.documentElement.lang : 'en'
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      const replyText = 
        data.reply || 
        data.output || 
        data.text || 
        "Thank you for your message. An engineer from Autoflow Solutions will follow up shortly.";

      const botMessage: ChatMessage = {
        id: 'bot_' + Date.now().toString(),
        sender: 'bot',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMessage]);

      if (data.leadCaptured && typeof window !== 'undefined' && window.posthog) {
        window.posthog.capture('chatbot_lead_captured', {
          sessionId,
          page: window.location.pathname
        });
      }
    } catch (err) {
      const errorMessage: ChatMessage = {
        id: 'err_' + Date.now().toString(),
        sender: 'bot',
        text: "⚠️ **Connection Notice:** Unable to reach the Autoflow Solutions assistant at this moment. You can also reach our engineering team directly via [Book a Strategy Call](https://cal.com/autoflow-solutions/book-a-discovery-call) or start our [Free AI Self Audit](https://ai-self-audit.autoflow-solutions.com/).",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, sessionId]);

  return (
    <div className="af-chat-root">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <div style={{ position: 'relative' }}>
          {showTooltip && (
            <div className="af-chat-launcher-tooltip">
              <span className="dot" />
              <span>Questions? Ask Autoflow Solutions AI</span>
            </div>
          )}
          <button
            type="button"
            className="af-chat-launcher"
            onClick={handleOpen}
            aria-label="Open Autoflow Solutions AI Chat"
            title="Chat with Autoflow Solutions AI Specialist"
          >
            <span className="af-chat-launcher-badge" />
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </div>
      )}

      {/* Main Chat Window */}
      {isOpen && (
        <div className="af-chat-window" role="dialog" aria-modal="true" aria-label="Autoflow Solutions AI Assistant">
          <ChatHeader onClose={handleClose} onClearHistory={handleClearHistory} />
          
          {messages.length <= 2 && (
            <ChatQuickChips onSelectChip={handleSendMessage} pathname={currentPath} />
          )}

          <ChatMessageList messages={messages} isLoading={isLoading} />

          <ChatInputBar onSendMessage={handleSendMessage} disabled={isLoading} isOpen={isOpen} />

          <div className="af-chat-footer-stamp">
            Built by <a href="https://autoflow-solutions.com" target="_blank" rel="noopener noreferrer">Autoflow Solutions</a> · Powered by n8n
          </div>
        </div>
      )}
    </div>
  );
}
