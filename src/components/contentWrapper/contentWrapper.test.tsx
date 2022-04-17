import { render, screen } from "@testing-library/react";
import ContentWrapper from "components/contentWrapper";
import React from "react";

describe("Content Wrapper Component", () => {
  it("should render the content wrapper component", () => {
    render(<ContentWrapper>Some Content here</ContentWrapper>);
    expect(screen.getByText("Some Content here")).toBeInTheDocument();
  });
});
