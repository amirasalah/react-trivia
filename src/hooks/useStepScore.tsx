import { useStore } from "../store";

const useStepScore = (results?: IStep[]) => {
  const currentStep = useStore((state) => state.currentStep);

  const numberOfQuestions = results?.length;
  const currentQuestion = results?.[currentStep - 1];

  return { numberOfQuestions, currentQuestion };
};

export default useStepScore;
