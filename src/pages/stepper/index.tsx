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
import useAnswerQuestion from "../../hooks/useAnswerQuestion";

const Stepper: React.FC = () => {
  const {
    data,
    isLoading,
    isError,
  }: UseQueryResult<{ data: IGetAllQuestionsResponse }> = useGetAllQuestions();

  const currentStep = useStore((state) => state.currentStep);
  const { numberOfQuestions, currentQuestion } = useStepScore(
    data?.data?.results
  );
  const handleClick = useAnswerQuestion(
    currentStep,
    numberOfQuestions,
    currentQuestion
  );

  if (isLoading || isError || !data) return null;

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
        {currentStep} / {numberOfQuestions}
      </p>
    </ContentWrapper>
  );
};

export default Stepper;
