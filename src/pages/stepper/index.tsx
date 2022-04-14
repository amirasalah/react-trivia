/* eslint-disable unicorn/no-null */
import React from "react";
import useGetAllQuestions from "../../hooks/useGetAllQuestions";

const Stepper: React.FC = () => {
  const { data, isLoading, isError } = useGetAllQuestions();

  if (isLoading || isError) return null;

  return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export default Stepper;
