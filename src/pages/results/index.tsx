import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import ContentWrapper from "../../components/contentWrapper";
import { buttonTypes } from "../../constants";
import { useStore } from "../../store";

const Results: React.FC = () => {
  const results = useStore((state) => state.results);
  const finalScore = useStore((state) => state.finalScore);
  const finished = useStore((state) => state.finished);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!finished) {
      navigate("/");
    }
  }, [finished, navigate]);

  return (
    <ContentWrapper>
      <h1 className=" font-extrabold mt-10 mb-10 text-4xl">Results</h1>
      <p className=" font-extrabold mb-10 text-xl">
        Your Final score is: {finalScore}
      </p>
      {results.map((result, index) => (
        <div key={index} className="flex">
          <p className=" mr-5 text-left">{result.correct ? "🎉" : "☠"}</p>{" "}
          <h2 className={result.correct ? `text-lime-600` : `text-rose-600`}>
            {result.content}
          </h2>
        </div>
      ))}
      <Button type={buttonTypes.TRUE} onClick={() => navigate("/")}>
        Play Again?
      </Button>
    </ContentWrapper>
  );
};

export default Results;
