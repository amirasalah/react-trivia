import { render, screen, fireEvent } from "@testing-library/react";
import Button from "components/button";
import React from "react";

describe("Button Component", () => {
  it("should render the button", () => {
    render(<Button onClick={jest.fn()}>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });
  it("should trigger function if clicked", () => {
    const mockFunction = jest.fn();

    render(<Button onClick={mockFunction}>Click Me</Button>);
    const button = screen.getByText("Click Me");
    fireEvent.click(button);
    expect(mockFunction).toHaveBeenCalled();
  });

  it("should be green if has type true", () => {
    const mockFunction = jest.fn();

    render(
      <Button type="True" onClick={mockFunction}>
        Click Me
      </Button>
    );
    const button = screen.getByText("Click Me");
    expect(button).toHaveClass("text-emerald-400");
    expect(button).not.toHaveClass("text-red-400");
  });
  it("should be red if has type false", () => {
    const mockFunction = jest.fn();

    render(
      <Button type="False" onClick={mockFunction}>
        Click Me
      </Button>
    );
    const button = screen.getByText("Click Me");
    expect(button).toHaveClass("text-red-400");
    expect(button).not.toHaveClass("text-emerald-400");
  });
});
