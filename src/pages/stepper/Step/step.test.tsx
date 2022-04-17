import { render, screen } from "@testing-library/react";
import Step from "./";
import React from "react";

const currentQuestion = {
  category: "Vehicles",
  type: "boolean",
  difficulty: "hard",
  question:
    "In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.",
  correct_answer: "True",
  incorrect_answers: ["False"],
};

describe("Step Component", () => {
  it("should render the step", async () => {
    render(<Step {...currentQuestion} />);
    expect(screen.getByText(currentQuestion.question)).toBeInTheDocument();
    expect(screen.getByText(currentQuestion.category)).toBeInTheDocument();
  });
});
