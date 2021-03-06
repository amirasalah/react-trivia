interface IStep {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
interface IGetAllQuestionsResponse {
  response_code: number;
  results: IStep[];
}
interface IButtonProperties {
  children: React.ReactNode;
  type?: string;
  onClick?: () => void;
}
interface IQuestionResult {
  content?: string;
  correct?: boolean;
}

interface IUseStore {
  currentStep: number;
  finalScore: number;
  results: IQuestionResult[];
  finished: boolean;
  resetStore: () => void;
  incrementStep: () => void;
  incrementFinalScore: () => void;
  setResults: (question: IQuestionResult) => void;
  setFinished: () => void;
}
interface ICard {
  children: React.ReactNode;
}
interface IContentWrapper {
  children: React.ReactNode;
}
