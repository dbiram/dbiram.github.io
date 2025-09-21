import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import style from './Chatbot.module.css';

// Types
interface ChatRequest {
  question: string;
  history?: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
}

interface ChatResponse {
  answer: string;
  sources: Array<{
    title: string;
    source: string;
    created_at?: string;
  }>;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  sources?: ChatResponse['sources'];
  error?: string;
}

interface ChatbotProps {
  isMobilePopup?: boolean;
  onClose?: () => void;
}

const BACKEND_URL = 'https://portfolio-rag-cwnt.onrender.com'; 

const Chatbot: React.FC<ChatbotProps> = ({ isMobilePopup = false, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSources, setShowSources] = useState<{ [idx: number]: boolean }>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Health check on mount
  useEffect(() => {
    fetch(`${BACKEND_URL}/health`).catch(() => setError('Connection failed'));
  }, []);

  const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    setError(null);
    const userMsg: Message = { role: 'user', content: input, timestamp: getTime() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const history = [...messages, userMsg].slice(-6).map(({ role, content }) => ({ role, content }));
      const res = await fetch(`${BACKEND_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input, history }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || 'Server error');
      }
      const data: ChatResponse = await res.json();
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.answer, timestamp: getTime(), sources: data.sources }
      ]);
    } catch (e: any) {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: '', timestamp: getTime(), error: e.message || 'Unknown error' }
      ]);
      setError(e.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleClear = () => {
    setMessages([]);
    setError(null);
  };

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const toggleSources = (idx: number) => {
    setShowSources(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Render mobile popup
  if (isMobilePopup) {
    return (
      <div className={style.mobilePopupOverlay} onClick={onClose}>
        <div className={style.mobilePopupContainer} onClick={(e) => e.stopPropagation()}>
          <button className={style.mobileCloseBtn} onClick={onClose} title="Close chat">
            ×
          </button>
          <div className={style.header}>
            <button className={style.clearBtn} onClick={handleClear} title="Clear chat">Clear</button>
            <h2>Chat with Moez's AI assistant</h2>
          </div>
          <div className={style.messagesArea}>
            {messages.length === 0 && (
              <div className={style.emptyState}>Hello! I'm Moez's AI assistant, tasked with discussing his experience, skills, and projects as a Data Scientist and Data Engineer. What would you like to know?</div>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={
                  msg.role === 'user' ? style.userMsg : style.assistantMsg
                }
              >
                <div className={style.msgBubble}>
                  <div className={style.msgContent}>
                    {msg.role === 'assistant' && msg.content ? (
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    ) : (
                      msg.content || msg.error
                    )}
                  </div>
                  <div className={style.msgMeta}>
                    <span>{msg.timestamp}</span>
                    {msg.role === 'assistant' && msg.content && (
                      <button
                        className={style.copyBtn}
                        onClick={() => handleCopy(msg.content)}
                        title="Copy response"
                      >
                        Copy
                      </button>
                    )}
                  </div>
                  {msg.role === 'assistant' && msg.sources && msg.sources.length > 0 && (
                    <div className={style.sourcesWrap}>
                      <button
                        className={style.sourcesToggle}
                        onClick={() => toggleSources(idx)}
                      >
                        {showSources[idx] ? 'Hide sources' : 'Show sources'}
                      </button>
                      {showSources[idx] && (
                        <div className={style.sourcesList}>
                          {msg.sources.map((src, sidx) => (
                            <div key={sidx} className={style.sourceItem}>
                              <span className={style.sourceTitle}>{src.title}</span>
                              <span className={style.sourceLink}>({src.source})</span>
                              {src.created_at && (
                                <span className={style.sourceDate}> — {src.created_at}</span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className={style.assistantMsg}>
                <div className={style.msgBubble}>
                  <div className={style.msgContent}><span className={style.typing}>Moez is typing...</span></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className={style.inputArea}>
            <input
              className={style.inputField}
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
              disabled={loading}
              maxLength={500}
            />
            <button
              className={style.sendBtn}
              onClick={handleSend}
              disabled={loading || !input.trim()}
              title="Send"
            >
              {loading ? '...' : 'Send'}
            </button>
          </div>
          {error && <div className={style.errorMsg}>{error}</div>}
        </div>
      </div>
    );
  }

  return (
    <div id="Chatbot" className={style.chatbotSection}>
        <div className={style.container}>
            <h2 className={style.title}>Chat with Moez's AI assistant</h2>
            <div className={style.chatbotContainer}>
                <div className={style.header}>
                <button className={style.clearBtn} onClick={handleClear} title="Clear chat">Clear</button>
                </div>
                <div className={style.messagesArea}>
                {messages.length === 0 && (
                    <div className={style.emptyState}>Hello! I'm Moez's AI assistant, tasked with discussing his experience, skills, and projects as a Data Scientist and Data Engineer. What would you like to know?</div>
                )}
                {messages.map((msg, idx) => (
                    <div
                    key={idx}
                    className={
                        msg.role === 'user' ? style.userMsg : style.assistantMsg
                    }
                    >
                    <div className={style.msgBubble}>
                        <div className={style.msgContent}>
                        {msg.role === 'assistant' && msg.content ? (
                            <ReactMarkdown>{msg.content}</ReactMarkdown>
                        ) : (
                            msg.content || msg.error
                        )}
                        </div>
                        <div className={style.msgMeta}>
                        <span>{msg.timestamp}</span>
                        {msg.role === 'assistant' && msg.content && (
                            <button
                            className={style.copyBtn}
                            onClick={() => handleCopy(msg.content)}
                            title="Copy response"
                            >
                            Copy
                            </button>
                        )}
                        </div>
                        {msg.role === 'assistant' && msg.sources && msg.sources.length > 0 && (
                        <div className={style.sourcesWrap}>
                            <button
                            className={style.sourcesToggle}
                            onClick={() => toggleSources(idx)}
                            >
                            {showSources[idx] ? 'Hide sources' : 'Show sources'}
                            </button>
                            {showSources[idx] && (
                            <div className={style.sourcesList}>
                                {msg.sources.map((src, sidx) => (
                                <div key={sidx} className={style.sourceItem}>
                                    <span className={style.sourceTitle}>{src.title}</span>
                                    <span className={style.sourceLink}>({src.source})</span>
                                    {src.created_at && (
                                    <span className={style.sourceDate}> — {src.created_at}</span>
                                    )}
                                </div>
                                ))}
                            </div>
                            )}
                        </div>
                        )}
                    </div>
                    </div>
                ))}
                {loading && (
                    <div className={style.assistantMsg}>
                    <div className={style.msgBubble}>
                        <div className={style.msgContent}><span className={style.typing}>Moez is typing...</span></div>
                    </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
                </div>
                <div className={style.inputArea}>
                <input
                    className={style.inputField}
                    type="text"
                    placeholder="Type your question..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleInputKeyDown}
                    disabled={loading}
                    maxLength={500}
                />
                <button
                    className={style.sendBtn}
                    onClick={handleSend}
                    disabled={loading || !input.trim()}
                    title="Send"
                >
                    {loading ? '...' : 'Send'}
                </button>
                </div>
                {error && <div className={style.errorMsg}>{error}</div>}
            </div>
      </div>
    </div>
  );
};

export default Chatbot;
