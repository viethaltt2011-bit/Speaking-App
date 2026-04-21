import { GoogleGenAI, Type } from '@google/genai';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("GEMINI_API_KEY not found");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

const missingTopics = [
  'Television', 'Holidays', 'Dancing', 'Birthdays', 'Mirror',
  'Food', 'Indoor Games', 'Plans & Goals', 'Swimming', 'Marriage',
  'Music', 'Watches', 'Bags', 'Sunshine', 'Fashion',
  'Places Near Water', 'Visitors', 'Sports', 'Colours', 'Bringing Things',
  'History', 'Birds', 'Shopping', 'Handwriting', 'Jewellery',
  'Shoes', 'Fruits', 'Dreams', 'Flowers', 'Chocolate'
];

async function generateTopics() {
  console.log('Generating missing IELTS topics...');
  try {
    const prompt = `You are an expert IELTS instructor. Generate rich, band 8.0+ content for the following speaking Part 1 topics.
Return a JSON array where each object corresponds to a topic in the exact order requested.
Make the answers sound natural, with great vocabulary and idioms.

Topics:
${missingTopics.join(', ')}

Please limit to 3 questions per topic and 5 vocab words per topic to ensure the payload fits in the response window.
Every topic MUST have 'id' starting from '11' to '40', 'title', 'qas', 'vocab', and optional 'proTips'.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-pro-preview',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              title: { type: Type.STRING },
              qas: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    question: { type: Type.STRING },
                    answer: { type: Type.STRING },
                    quote: { type: Type.STRING }
                  },
                  required: ['id', 'question', 'answer']
                }
              },
              vocab: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    word: { type: Type.STRING },
                    meaning: { type: Type.STRING }
                  },
                  required: ['word', 'meaning']
                }
              },
              proTips: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            },
            required: ['id', 'title', 'qas', 'vocab']
          }
        }
      }
    });

    const outputText = response.text || '[]';
    
    // Save to generated file
    const content = `import { Topic } from '../types';\n\nexport const generatedTopics: Topic[] = ${outputText};`;
    fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'generated-topics.ts'), content, 'utf8');
    console.log('Successfully generated topics to src/data/generated-topics.ts');
  } catch (err) {
    console.error('Generation failed:', err);
  }
}

generateTopics();
