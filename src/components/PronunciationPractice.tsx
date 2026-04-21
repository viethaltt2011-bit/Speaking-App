import React, { useState, useRef, useEffect } from 'react';
import { Mic, Square, Loader2, AlertCircle, X, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { GoogleGenAI, Type } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface PronunciationResult {
  score: number;
  fluency: string;
  mispronouncedWords: string[];
  overallFeedback: string;
  transcript: string;
}

export const PronunciationPractice: React.FC<{ targetText: string, onClose: () => void }> = ({ targetText, onClose }) => {
  const [status, setStatus] = useState<'idle' | 'recording' | 'analyzing' | 'completed'>('idle');
  const [result, setResult] = useState<PronunciationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    // Check if target text changed and reset
    setStatus('idle');
    setResult(null);
    setError(null);
    if (audioUrl) {
       URL.revokeObjectURL(audioUrl);
       setAudioUrl(null);
    }
  }, [targetText]);

  useEffect(() => {
    // Cleanup URL on unmount
    return () => {
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
  }, [audioUrl]);

  const startRecording = async () => {
    try {
      setError(null);
      setResult(null);
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
      status !== 'idle' && stopRecording(); // Just to be safe
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: mediaRecorder.mimeType || 'audio/webm' });
        stream.getTracks().forEach(track => track.stop());
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        await handleAudioSubmission(audioBlob, mediaRecorder.mimeType);
      };

      mediaRecorder.start();
      setStatus('recording');
      setIsExpanded(true);
    } catch (err) {
      console.error(err);
      setError('Microphone access denied or not available.');
      setStatus('idle');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      setStatus('analyzing');
    }
  };

  const fileToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result.split(',')[1]);
        } else {
          reject(new Error('Failed to convert to base64'));
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const handleAudioSubmission = async (audioBlob: Blob, mimeType: string) => {
    try {
      setStatus('analyzing');
      const base64Audio = await fileToBase64(audioBlob);

      const prompt = `You are an expert IELTS speaking examiner. Listen to the user answering a question or reading a phrase.
The target text the user is trying to speak is: "${targetText}".

Please carefully evaluate their pronunciation, intonation, and rhythm.
Return a JSON object with:
1. "score": An IELTS-style pronunciation score from 0.0 to 9.0 (e.g., 6.0, 7.5).
2. "transcript": What you actually heard the user say.
3. "fluency": Brief feedback on their fluency, pacing, and naturalness.
4. "mispronouncedWords": An array of words from the target text they pronounced incorrectly or unclearly. If none, return an empty array.
5. "overallFeedback": Short, encouraging feedback on how they can improve.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: [
          {
            parts: [
              {
                inlineData: {
                  data: base64Audio,
                  mimeType: mimeType || 'audio/webm',
                }
              },
              { text: prompt }
            ]
          }
        ],
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              score: { type: Type.NUMBER },
              transcript: { type: Type.STRING },
              fluency: { type: Type.STRING },
              mispronouncedWords: { type: Type.ARRAY, items: { type: Type.STRING } },
              overallFeedback: { type: Type.STRING }
            },
            required: ['score', 'transcript', 'fluency', 'mispronouncedWords', 'overallFeedback']
          }
        }
      });

      const data = JSON.parse(response.text?.trim() || '{}') as PronunciationResult;
      setResult(data);
      setStatus('completed');
      setIsExpanded(true); // Ensure expanded when results arrive
    } catch (err) {
      console.error(err);
      setError('Failed to analyze audio. Please try again.');
      setStatus('idle');
    }
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-xl border-t-2 border-yellow-300 shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.15)] rounded-t-3xl transition-transform duration-300 ${!isExpanded ? 'translate-y-[calc(100%-80px)]' : ''}`}>
      <div className="max-w-4xl mx-auto p-4 md:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
             <button onClick={() => setIsExpanded(!isExpanded)} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors">
               {isExpanded ? <ChevronDown className="w-6 h-6" /> : <ChevronUp className="w-6 h-6" />}
             </button>
             <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                <Mic className="w-6 h-6 text-yellow-500" />
                Pronounce it Right
             </h3>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center text-red-500 transition-colors">
             <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Wrapper */}
        <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
            
            {/* Target Text */}
            <div className="bg-yellow-50/50 border border-yellow-100 rounded-2xl p-4 md:p-6 mb-6 shadow-sm">
              <h4 className="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-2">Target Audio Text</h4>
              <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed italic">"{targetText}"</p>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              {status === 'idle' && (
                <button onClick={startRecording} className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-yellow-950 px-8 py-3.5 rounded-2xl font-bold text-lg shadow-md transition-all hover:scale-105 flex items-center justify-center gap-2">
                  <Mic className="w-5 h-5" /> Start Recording
                </button>
              )}

              {status === 'recording' && (
                <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
                  <div className="flex items-center gap-2 text-red-500 font-bold animate-pulse text-sm">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div> Recording...
                  </div>
                  <button onClick={stopRecording} className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-8 py-3.5 rounded-2xl font-bold text-lg shadow-md transition-all hover:scale-105 flex items-center justify-center gap-2">
                    <Square className="w-5 h-5 fill-current" /> Stop & Evaluate
                  </button>
                </div>
              )}

              {status === 'analyzing' && (
                <div className="flex items-center gap-3 text-yellow-700 font-bold bg-yellow-100 px-6 py-4 rounded-2xl shadow-inner w-full sm:w-auto justify-center">
                  <Loader2 className="w-6 h-6 animate-spin shrink-0" />
                  Gemini is analyzing your voice...
                </div>
              )}

              {status === 'completed' && (
                <button onClick={startRecording} className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3.5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 shadow-sm border border-gray-200">
                  <Mic className="w-5 h-5" /> Try Again
                </button>
              )}
            </div>

            {/* Audio Check / Playback */}
            {audioUrl && status === 'completed' && (
              <div className="flex flex-col items-center justify-center mb-8 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                 <h5 className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-3">Your Recording</h5>
                 <audio src={audioUrl} controls className="w-full max-w-md h-10" />
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-bold flex items-start gap-3 mb-6 border border-red-100">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                {error}
              </div>
            )}

            {/* Results */}
            {status === 'completed' && result && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 pb-8">
                <div className="flex flex-col sm:flex-row items-center gap-4 bg-gray-50 rounded-3xl p-5 border border-gray-100">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-yellow-950 w-20 h-20 shrink-0 rounded-3xl flex items-center justify-center font-black text-3xl shadow-md border-2 border-white">
                    {result.score.toFixed(1)}
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-black text-xl text-gray-900">Pronunciation Score</p>
                    <p className="text-sm text-gray-500 font-medium">Out of 9.0 (Estimated by Gemini AI)</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm space-y-4">
                    <div>
                      <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5"><Mic className="w-4 h-4"/> What we heard</h5>
                      <p className="text-gray-700 font-medium bg-gray-50 p-3 rounded-xl border border-gray-100 italic leading-relaxed">"{result.transcript}"</p>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Fluency</h5>
                      <p className="text-sm text-gray-700 font-medium leading-relaxed">{result.fluency}</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col">
                    <div className="mb-4">
                      <h5 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2">Mispronounced/Unclear Words</h5>
                      {result.mispronouncedWords.length > 0 ? (
                        <div className="flex flex-wrap gap-2 mt-1">
                          {result.mispronouncedWords.map((w, i) => (
                            <span key={i} className="bg-red-50 text-red-600 px-3 py-1.5 rounded-xl text-sm font-bold border border-red-100 shadow-sm shrink-0">{w}</span>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-green-50 text-green-700 p-3 rounded-xl text-sm font-bold border border-green-100 flex items-center gap-2">
                           <CheckCircle className="w-5 h-5 text-green-500" /> Perfect pronunciation!
                        </div>
                      )}
                    </div>
                    <div className="flex-1 mt-auto">
                      <h5 className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1.5">Actionable Feedback</h5>
                      <p className="text-sm text-gray-700 font-medium leading-relaxed">{result.overallFeedback}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
