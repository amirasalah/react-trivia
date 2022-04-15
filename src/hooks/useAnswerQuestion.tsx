import { useNavigate } from "react-router-dom";
import { useStore } from "../store";

const useAnswerQuestion = (
  currentStep: number,
  numberOfQuestions?: number,
  currentQuestion?: IStep
) => {
  const navigate = useNavigate();
  const setResults = useStore((state) => state.setResults);
  const incrementStep = useStore((state) => state.incrementStep);
  const incrementFinalScore = useStore((state) => state.incrementFinalScore);
  const setFinished = useStore((state) => state.setFinished);

  const handleClick = (answer: string) => {
    const isAnswerCorrect = answer === currentQuestion?.correct_answer;

    if (isAnswerCorrect) incrementFinalScore();
    if (numberOfQuestions && currentStep < numberOfQuestions) incrementStep();
    else {
      navigate("/results");
      setFinished();
    }

    setResults({
      content: currentQuestion?.question,
      correct: isAnswerCorrect,
    });
  };
  return handleClick;
};

export default useAnswerQuestion;
