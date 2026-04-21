import React, { useState } from 'react';
import { topics } from './data/topics';
import { Topic, QA } from './types';
import { PronunciationPractice } from './components/PronunciationPractice';
import { TopicChatbot } from './components/TopicChatbot';
import { playGeminiTTS, stopTTS } from './lib/gemini-tts';
import { 
  BookOpen, Briefcase, Bot, Star, Coffee,
  Menu, X, Search, ChevronRight, Quote,
  MessageCircle, GraduationCap, Volume2, Lightbulb, PlayCircle, Loader2, Square, Mic
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Icon Map for Topics
const getTopicIcon = (title: string) => {
  switch (title.toLowerCase()) {
    case 'study': return GraduationCap;
    case 'work': return Briefcase;
    case 'robots': return Bot;
    case 'celebrities': return Star;
    case 'leisure time': return Coffee;
    default: return BookOpen;
  }
};

const ActionButtons = ({ text, onPractice, voice = 'Kore' }: { text: string, onPractice: (t: string) => void, voice?: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
        stopTTS();
        setIsPlaying(false);
        return;
    }
    setIsLoading(true);
    try {
      await playGeminiTTS(text, voice, () => setIsPlaying(false));
      setIsPlaying(true);
    } catch(err) {
       console.error(err);
       setIsPlaying(true); // Assuming fallback to web speech happened
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-end gap-2.5 z-10 shrink-0">
      <button 
        onClick={handlePlay}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-yellow-100 hover:text-yellow-600 text-gray-500 transition-colors shadow-sm"
        title="Play Original Audio"
      >
        {isLoading ? <Loader2 className="w-5 h-5 animate-spin text-yellow-600" /> : 
         isPlaying ? <Square className="w-4 h-4 text-yellow-600 fill-current" /> : 
         <PlayCircle className="w-5 h-5" />}
      </button>
      <button 
        onClick={(e) => { e.stopPropagation(); onPractice(text); }}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-green-100 hover:text-green-600 text-gray-500 transition-colors shadow-sm"
        title="Practice & Evaluate"
      >
        <Mic className="w-5 h-5" />
      </button>
    </div>
  );
};

const Flashcard: React.FC<{ qa: QA, onPractice: (t: string) => void }> = ({ qa, onPractice }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      className="relative w-full h-[28rem] md:h-[26rem] perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      layout
    >
      <motion.div
        className="w-full h-full absolute preserve-3d"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-white border-2 border-yellow-400 rounded-3xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-6">
            <span className="text-yellow-600 font-bold tracking-wider uppercase text-sm bg-yellow-50 px-3 py-1 rounded-full flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> Question
            </span>
            <ActionButtons text={qa.question} onPractice={onPractice} voice="Puck" />
          </div>
          <div className="flex-1 flex items-center justify-center overflow-y-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 leading-snug p-2">{qa.question}</h3>
          </div>
          <div className="mt-auto pt-4 text-gray-400 text-sm flex items-center justify-center gap-2 font-medium">
            <span className="w-8 h-1 bg-yellow-300 rounded-full inline-block"></span>
            Click to flip card
            <span className="w-8 h-1 bg-yellow-300 rounded-full inline-block"></span>
          </div>
        </div>
        
        {/* Back */}
        <div 
          className="absolute w-full h-full backface-hidden bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-6 md:p-8 flex flex-col text-gray-900 shadow-lg" 
          style={{ transform: "rotateY(180deg)" }}
        >
           <div className="flex justify-between items-center mb-6 shrink-0">
             <span className="text-yellow-900 font-bold tracking-wider uppercase text-sm bg-white/30 backdrop-blur px-3 py-1 rounded-full flex items-center gap-2">
               <Volume2 className="w-4 h-4" /> Sample Answer
             </span>
             <div className="bg-white/20 p-1 rounded-full">
                <ActionButtons text={qa.answer} onPractice={onPractice} voice="Kore" />
             </div>
           </div>
           
           <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
             <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-900">
               {qa.answer}
             </p>
             {qa.quote && (
               <div className="mt-6 bg-white/20 p-4 rounded-xl flex gap-3 items-start shadow-sm mix-blend-multiply flex-col sm:flex-row sm:items-center">
                 <div className="flex-1 flex items-start gap-3">
                   <Quote className="w-5 h-5 text-yellow-950 shrink-0 mt-0.5" />
                   <p className="text-base italic text-yellow-950 font-bold leading-relaxed">{qa.quote}</p>
                 </div>
                 <div className="self-end sm:self-auto shrink-0 mt-3 sm:mt-0 opacity-80 hover:opacity-100 transition-opacity">
                    {/* Small version of action buttons for quotes */}
                    <ActionButtons text={qa.quote} onPractice={onPractice} voice="Kore" />
                 </div>
               </div>
             )}
           </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [activeTopic, setActiveTopic] = useState<Topic>(topics[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'qna' | 'vocab' | 'tips'>('qna');
  const [practiceText, setPracticeText] = useState<string | null>(null);

  const ActiveIcon = getTopicIcon(activeTopic.title);

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 flex flex-col
        transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:shrink-0
        ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-inner shadow-yellow-500/50">
              i
            </div>
            <h1 className="text-xl font-bold text-gray-900 leading-tight">IELTS<br/><span className="text-yellow-500">Speaking</span></h1>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">40 Essential Topics</div>
          <nav className="space-y-1.5">
            {topics.map((topic) => {
              const Icon = getTopicIcon(topic.title);
              const isActive = activeTopic.id === topic.id;
              
              return (
                <button
                  key={topic.id}
                  onClick={() => {
                    setActiveTopic(topic);
                    setIsSidebarOpen(false);
                    setActiveTab('qna');
                    stopTTS();
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 text-left
                    ${isActive 
                      ? 'bg-yellow-50 text-yellow-700 font-bold shadow-sm border border-yellow-100/50' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium'}
                  `}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-yellow-500' : 'text-gray-400'}`} />
                  <span className="flex-1">Topic {topic.id}: {topic.title}</span>
                  {isActive && <ChevronRight className="w-4 h-4 text-yellow-500" />}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 max-h-screen overflow-hidden bg-gray-50/50">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 p-4 lg:p-6 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-gray-500 hover:text-gray-800 p-1">
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-600 shadow-sm shrink-0">
                <ActiveIcon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl lg:text-3xl font-bold text-gray-900 tracking-tight">Topic {activeTopic.id}: {activeTopic.title}</h2>
                <p className="text-sm text-gray-500 hidden sm:block font-medium mt-0.5">Master vocabulary and sample answers</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center bg-gray-50 rounded-2xl px-4 py-2.5 border border-gray-200 focus-within:border-yellow-400 focus-within:ring-4 focus-within:ring-yellow-400/10 transition-all shrink-0">
            <Search className="w-5 h-5 text-gray-400 mr-2.5" />
            <input 
              type="text" 
              placeholder="Search in topic..." 
              className="bg-transparent border-none outline-none text-sm w-48 text-gray-800 placeholder-gray-400 font-medium"
            />
          </div>
        </header>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8 custom-scrollbar">
          <div className="max-w-4xl mx-auto space-y-8 pb-32">
            
            {/* Tabs */}
            <div className="flex p-1.5 bg-gray-200/60 rounded-2xl w-fit shadow-inner overflow-x-auto max-w-full">
              <button 
                onClick={() => setActiveTab('qna')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'qna' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'}`}
              >
                Q&A Flashcards
              </button>
              <button 
                onClick={() => setActiveTab('vocab')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'vocab' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'}`}
              >
                Vocabulary
              </button>
              {activeTopic.proTips && activeTopic.proTips.length > 0 && (
                <button 
                  onClick={() => setActiveTab('tips')}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'tips' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'}`}
                >
                  Pro Tips
                </button>
              )}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              {activeTab === 'qna' && (
                <motion.div 
                  key="qna"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
                >
                   {activeTopic.qas.map(qa => (
                     <Flashcard key={qa.id} qa={qa} onPractice={setPracticeText} />
                   ))}
                </motion.div>
              )}

              {activeTab === 'vocab' && (
                <motion.div 
                  key="vocab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-3xl p-1 sm:p-4 shadow-sm border border-gray-100 overflow-hidden"
                >
                  <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                      <thead>
                        <tr>
                          <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">Expression / Word</th>
                          <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">Meaning</th>
                          <th className="px-6 py-5 w-24 border-b border-gray-100"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {activeTopic.vocab.map((v, idx) => (
                          <tr key={idx} className="hover:bg-yellow-50/30 transition-colors group">
                            <td className="px-6 py-5">
                              <span className="inline-flex max-w-[200px] sm:max-w-full text-wrap break-words font-mono text-sm font-bold text-yellow-700 bg-yellow-50 px-3 py-1.5 rounded-lg border border-yellow-100/50 group-hover:bg-yellow-100/50 transition-colors">
                                {v.word}
                              </span>
                            </td>
                            <td className="px-6 py-5 text-gray-700 font-medium text-base">
                              {v.meaning}
                            </td>
                            <td className="px-6 py-5 align-middle">
                               <ActionButtons text={v.word} onPractice={setPracticeText} voice="Kore" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {activeTab === 'tips' && activeTopic.proTips && (
                <motion.div 
                  key="tips"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                   {activeTopic.proTips.map((tip, idx) => (
                     <div key={idx} className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200/60 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start shadow-sm relative group overflow-hidden">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm text-yellow-500">
                          <Lightbulb className="w-7 h-7" />
                        </div>
                        <div className="flex-1 pr-12 md:pr-24">
                          <h4 className="text-xl font-bold text-yellow-900 mb-3">Pro Tip</h4>
                          <p className="text-yellow-800 leading-relaxed text-lg font-medium">{tip}</p>
                        </div>
                        <div className="md:absolute top-6 right-6 self-end mt-4 md:mt-0 transition-opacity">
                           <ActionButtons text={tip} onPractice={setPracticeText} voice="Kore" />
                        </div>
                     </div>
                   ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Real-time Examiner Chatbot aligned to current topic */}
      <TopicChatbot activeTopic={activeTopic} />

      {/* Global Pronunciation Modal */}
      {practiceText && (
        <PronunciationPractice 
          targetText={practiceText} 
          onClose={() => setPracticeText(null)} 
        />
      )}
    </div>
  );
}
