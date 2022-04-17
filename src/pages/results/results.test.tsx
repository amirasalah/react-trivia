import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Results from "./";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useStore } from "../../store";

describe("Results Component", () => {
  it("should render the results page", () => {
    render(
      <BrowserRouter>
        <Results />
      </BrowserRouter>
    );
    expect(screen.getByText(/results/i)).toBeInTheDocument();
    expect(screen.getByText(/play again?/i)).toBeInTheDocument();
    expect(screen.getByText(/our final score is:/i)).toBeInTheDocument();
    expect(screen.getByText(/our final score is:/i)).toBeInTheDocument();
    expect(screen.getByText(/0 \/ 0/i)).toBeInTheDocument();
  });

  it("should redirect to home page when play again is clicked", async () => {
    render(
      <BrowserRouter>
        <Results />
      </BrowserRouter>
    );

    const button = screen.getByText(/play again?/i);
    fireEvent.click(button);
    await waitFor(() => {
      expect(window.location.pathname).toBe("/");
    });
  });

  it("should redirect to homepage if user tries to access results page with questions not completed", async () => {
    useStore.setState({
      finished: false,
    });
    render(
      <BrowserRouter>
        <Results />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(window.location.pathname).toBe("/");
    });
  });

  it("Should render the score when the user has answered all the questions", async () => {
    useStore.setState({
      finalScore: 1,
      results: [
        {
          content: "What is the capital of France?",
          correct: true,
        },
        {
          content: "What is the capital of Egypt?",
          correct: false,
        },
      ],
    });
    render(
      <BrowserRouter>
        <Results />
      </BrowserRouter>
    );
    expect(screen.getByText(/1 \/ 2/i)).toBeInTheDocument();
    expect(
      screen.getByText(/🎉 what is the capital of france?/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/☠ what is the capital of egypt?/i)
    ).toBeInTheDocument();
  });
});
