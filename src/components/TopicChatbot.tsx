import React, { useState, useEffect, useRef } from 'react';
import { MessageSquareText, X, Bot, User, Send, Loader2, Mic } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { Topic } from '../types';
import { playGeminiTTS, stopTTS } from '../lib/gemini-tts';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export const TopicChatbot: React.FC<{ activeTopic: Topic }> = ({ activeTopic }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMsg, setInputMsg] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize new chat when topic changes or when opened for the first time
  useEffect(() => {
    if (isOpen) {
      initChat();
    }
  }, [activeTopic, isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const initChat = async () => {
    stopTTS(); // Stop any ongoing TTS
    setMessages([]);
    setIsTyping(true);

    const systemInstruction = `You are a friendly and encouraging IELTS speaking examiner.
Your goal is to conduct a conversational practice session about the topic: "${activeTopic.title}".
Keep your responses short (1-2 sentences), natural, and engaging.
Always evaluate the user's English briefly (praise good vocab, gently correct major errors) and then ask EXACTLY ONE follow-up question related to "${activeTopic.title}" to keep the conversation flowing.
NEVER provide a list of questions. Keep it a natural 1-on-1 chat.`;

    chatSessionRef.current = await ai.chats.create({
      model: 'gemini-3.1-pro-preview',
      config: { systemInstruction }
    });

    try {
      const resp = await chatSessionRef.current.sendMessage({ message: `Start the conversation by greeting me, introducing the topic "${activeTopic.title}", and asking your first question.` });
      const botText = resp.text || "Hello! Let's start.";
      addMessage('model', botText);
      playGeminiTTS(botText, 'Aoede'); // using a different voice for examiner
    } catch {
      addMessage('model', `Hello! Let's talk about ${activeTopic.title}. What comes to your mind when you think about it?`);
    } finally {
      setIsTyping(false);
    }
  };

  const addMessage = (role: 'user'|'model', text: string) => {
    setMessages(prev => [...prev, { id: Math.random().toString(36).substring(7), role, text }]);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputMsg.trim() || isTyping) return;

    const userText = inputMsg.trim();
    setInputMsg("");
    addMessage('user', userText);
    stopTTS();

    if (!chatSessionRef.current) {
        await initChat();
    }

    setIsTyping(true);
    try {
      const resp = await chatSessionRef.current.sendMessage({ message: userText });
      const botText = resp.text || "I see. Tell me more.";
      addMessage('model', botText);
      playGeminiTTS(botText, 'Aoede');
    } catch (err) {
      console.error("Chat error:", err);
      addMessage('model', "I'm sorry, I had trouble understanding that. Could you say it again?");
    } finally {
      setIsTyping(false);
    }
  };

  const toggleListen = () => {
    if (isListening) {
       setIsListening(false);
       return;
    }
    
    // Quick web speech recognition for dictation
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition. Please type instead.");
      return;
    }
    
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    
    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      setInputMsg(text);
      setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    
    recognition.start();
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-16 h-16 bg-yellow-500 hover:bg-yellow-600 text-yellow-950 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-40 group"
      >
        <MessageSquareText className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 right-0 md:bottom-6 md:right-6 w-full h-[80vh] md:w-[400px] md:h-[600px] bg-white md:rounded-3xl shadow-2xl border border-gray-100 flex flex-col z-50 overflow-hidden transform transition-all">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
            <Bot className="w-6 h-6 text-yellow-950" />
          </div>
          <div>
            <h3 className="font-bold text-yellow-950">Examiner AI</h3>
            <p className="text-xs font-medium text-yellow-900/80">Topic: {activeTopic.title}</p>
          </div>
        </div>
        <button 
          onClick={() => { setIsOpen(false); stopTTS(); }}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10 text-yellow-950 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 custom-scrollbar">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
            <div className={`max-w-[85%] rounded-2xl p-3.5 shadow-sm border ${
              msg.role === 'user' 
                ? 'bg-yellow-500 text-yellow-950 rounded-tr-sm border-yellow-600/20' 
                : 'bg-white text-gray-800 rounded-tl-sm border-gray-100'
            }`}>
              <div className="flex items-center gap-2 mb-1.5 opacity-60">
                {msg.role === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  {msg.role === 'user' ? 'You' : 'Examiner'}
                </span>
              </div>
              <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {isTyping && (
           <div className="flex justify-start">
             <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm p-4 shadow-sm flex items-center gap-2 text-gray-400">
               <Loader2 className="w-4 h-4 animate-spin" />
               <span className="text-xs font-medium">Examiner is typing...</span>
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-100">
        <form onSubmit={handleSubmit} className="flex items-end gap-2">
           <div className="flex-1 bg-gray-50 rounded-2xl border border-gray-200 focus-within:border-yellow-400 focus-within:ring-4 focus-within:ring-yellow-400/10 transition-all p-1 flex items-end">
              <textarea 
                rows={1}
                value={inputMsg}
                onChange={e => setInputMsg(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
                placeholder="Type your answer..."
                className="w-full bg-transparent border-none outline-none text-sm text-gray-800 placeholder-gray-400 font-medium resize-none px-3 py-2 max-h-32 overflow-y-auto custom-scrollbar min-h-[40px]"
              />
              <button
                type="button"
                onClick={toggleListen}
                className={`p-2 mb-0.5 mr-1 rounded-xl transition-colors ${isListening ? 'bg-red-100 text-red-500 animate-pulse' : 'hover:bg-gray-200 text-gray-400'}`}
              >
                <Mic className="w-5 h-5" />
              </button>
           </div>
           <button 
             type="submit"
             disabled={!inputMsg.trim() || isTyping}
             className="w-12 h-12 shrink-0 bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-200 disabled:text-gray-400 text-yellow-950 rounded-2xl flex items-center justify-center shadow-sm transition-all"
           >
             <Send className="w-5 h-5 ml-0.5" />
           </button>
        </form>
      </div>
    </div>
  );
};
