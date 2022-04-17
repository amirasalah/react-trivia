import { render, screen, waitFor } from "@testing-library/react";
import Welcome from "../welcome";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

describe("first", () => {
  it("Should Render welcome page", () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );
    expect(
      screen.getByText(/welcome to the trivia challange/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/you will be presented with 10 true or false questions/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/can you score 100%?/i)).toBeInTheDocument();
    expect(screen.getByText(/begin!/i)).toBeInTheDocument();
  });

  it("should go to stepper page when begin is clicked", async () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );
    const beginButton = screen.getByText(/begin!/i);
    act(() => {
      beginButton.click();
    });
    await waitFor(() => {
      expect(window.location.pathname).toBe("/stepper");
    });
  });
});
