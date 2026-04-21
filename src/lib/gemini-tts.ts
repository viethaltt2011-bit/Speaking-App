import { GoogleGenAI } from "@google/genai";
import { saveAudio, getAudio } from "./audio-cache";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
let activeSource: AudioBufferSourceNode | null = null;
let audioContext: AudioContext | null = null;

export const playGeminiTTS = async (text: string, voiceName: string = 'Kore', onEnded?: () => void): Promise<void> => {
  stopTTS(); // ensure previous is stopped

  try {
    const cacheKey = `tts_${voiceName}_${text.substring(0, 100)}_${text.length}`;
    let base64Audio = await getAudio(cacheKey);

    if (!base64Audio) {
      console.log('Cache miss. Generating TTS for:', text.substring(0, 30) + '...');
      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-tts-preview",
        contents: [{ parts: [{ text: text }] }],
        config: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName } },
          },
        },
      });

      base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!base64Audio) throw new Error("No audio data received");
      
      // Save for future use
      await saveAudio(cacheKey, base64Audio);
    } else {
      console.log('Cache hit! Playing from memory.');
    }

    const binaryString = atob(base64Audio);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    
    // Decoding 16-bit PCM (Little Endian)
    const int16Array = new Int16Array(bytes.buffer);
    const float32Array = new Float32Array(int16Array.length);
    for (let i = 0; i < int16Array.length; i++) {
      float32Array[i] = int16Array[i] / 32768.0;
    }
    
    if (!audioContext) {
      audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioContext!.state === 'suspended') {
      await audioContext!.resume();
    }

    const audioBuffer = audioContext!.createBuffer(1, float32Array.length, 24000);
    audioBuffer.getChannelData(0).set(float32Array);
    const source = audioContext!.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext!.destination);
    
    source.onended = () => {
      if (onEnded) onEnded();
      if (activeSource === source) activeSource = null;
    };

    source.start();
    activeSource = source;
  } catch (error) {
    console.error('Error generating TTS:', error);
    // Fallback to web speech synth if Gemini fails
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => { if (onEnded) onEnded(); };
    window.speechSynthesis.speak(utterance);
  }
};

export const stopTTS = () => {
  if (activeSource) {
    activeSource.onended = null;
    activeSource.stop();
    activeSource.disconnect();
    activeSource = null;
  }
  window.speechSynthesis.cancel();
};
