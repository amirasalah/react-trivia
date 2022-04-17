import { render, screen } from "@testing-library/react";
import Card from "components/card";
import React from "react";

describe("Card Component", () => {
  it("should render the card component", () => {
    render(<Card>Card content here</Card>);
    expect(screen.getByText("Card content here")).toBeInTheDocument();
  });
});
