import React from "react";
import { Link } from "react-router-dom";
import ContentWrapper from "../../components/contentWrapper";
import { useStore } from "../../store";

const Welcome: React.FC = () => {
  const resetStore = useStore((state) => state.resetStore);

  React.useEffect(() => {
    resetStore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContentWrapper>
      <h3 className="text-5xl text-center	mt-8 text-amber-600">
        🎉 Welcome to the Trivia Challange 🎉
      </h3>
      <h4 className="text-3xl text-center text-indigo-900">
        You will be presented with 10 true or false questions
      </h4>
      <h6 className="text-4xl text-center text-pink-500">
        Can you score 100%? 😉
      </h6>
      <Link to="/stepper" className="border-4 border-indigo-500 p-8">
        Begin!
      </Link>
    </ContentWrapper>
  );
};

export default Welcome;
