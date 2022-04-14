import React from "react";
import useGetAllQuestions from "../../hooks/useGetAllQuestions";

const Stepper: React.FC = () => {
  const { data, isLoading, isError } = useGetAllQuestions();
  console.log(data);

  return <div>Stepper</div>;
};

export default Stepper;
