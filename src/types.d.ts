interface IStep {
  category: string;
  type: boolean;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: boolean[];
}
interface IGetAllQuestionsResponse {
  response_code: number;
  results: IStep[];
}
interface IButtonProperties {
  children: React.ReactNode;
  type: string;
  onClick: () => void;
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
  incrementStep: () => void;
  incrementFinalScore: () => void;
  setResults: (question: IQuestionResult) => void;
  setFinished: () => void;
}
interface ICard {
  content: string;
}
interface IContentWrapper {
  children: React.ReactNode;
}
