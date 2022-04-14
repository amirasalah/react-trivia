/* eslint-disable unicorn/no-null */
import React from "react";
import useGetAllQuestions from "../../hooks/useGetAllQuestions";
import useStepScore from "../../hooks/useStepScore";
import Button from "../../components/button";
import Step from "./Step";
import { useStore } from "../../store";
import { UseQueryResult } from "react-query";
import { buttonTypes } from "../../constants";
import ContentWrapper from "../../components/contentWrapper";
import { useNavigate } from "react-router-dom";

const Stepper: React.FC = () => {
  const {
    data,
    isLoading,
    isError,
  }: UseQueryResult<{ data: IGetAllQuestionsResponse }> = useGetAllQuestions();
  const navigate = useNavigate();

  const currentStep = useStore((state) => state.currentStep);
  const setResults = useStore((state) => state.setResults);
  const incrementStep = useStore((state) => state.incrementStep);
  const incrementFinalScore = useStore((state) => state.incrementFinalScore);
  const setFinished = useStore((state) => state.setFinished);
  const { numberOfQuestions, currentQuestion } = useStepScore(
    data?.data?.results
  );

  if (isLoading || isError || !data) return null;

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

  return (
    <ContentWrapper>
      {currentQuestion && <Step {...currentQuestion} />}
      <section>
        <Button
          onClick={() => handleClick(buttonTypes.TRUE)}
          type={buttonTypes.TRUE}
        >
          {buttonTypes.TRUE}
        </Button>
        <Button
          onClick={() => handleClick(buttonTypes.FALSE)}
          type={buttonTypes.FALSE}
        >
          {buttonTypes.FALSE}
        </Button>
      </section>
      <p>
        {currentStep}/{numberOfQuestions}
      </p>
    </ContentWrapper>
  );
};

export default Stepper;
