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
  const resetStore = useStore((state) => state.resetStore);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!finished) {
      navigate("/");
    }
  }, [finished, navigate]);

  const handleClick = () => {
    navigate("/");
    resetStore();
  };

  return (
    <ContentWrapper>
      <h1 className=" font-extrabold mt-10 mb-10 text-4xl">Results</h1>
      <p className=" font-extrabold mb-10 text-xl">
        Your Final score is: {`${finalScore} / ${results.length}`}
      </p>
      {results.map((result, index) => (
        <div key={index} className="flex px-6">
          <h2 className={result.correct ? `text-lime-600` : `text-rose-600`}>
            {result.correct ? "🎉" : "☠"} {result.content}
          </h2>
        </div>
      ))}
      <Button type={buttonTypes.TRUE} onClick={() => handleClick()}>
        Play Again?
      </Button>
    </ContentWrapper>
  );
};

export default Results;
