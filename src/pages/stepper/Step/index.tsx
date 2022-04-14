import React from "react";
import Card from "../../../components/card";

const Step: React.FC<IStep> = ({ category, question }) => {
  return (
    <section className="">
      <p className="mb-10 mt-10 text-center font-extrabold text-2xl">
        {category}
      </p>
      <Card content={question} />
    </section>
  );
};

export default Step;
