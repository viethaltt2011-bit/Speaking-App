export interface Vocab {
  word: string;
  meaning: string;
}

export interface QA {
  id: string;
  question: string;
  answer: string;
  quote?: string;
}

export interface Topic {
  id: string;
  title: string;
  qas: QA[];
  vocab: Vocab[];
  proTips?: string[];
}
