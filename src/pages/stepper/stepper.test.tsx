import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Stepper from "pages/stepper";
import React from "react";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { server } from "mocks/server";
import { getAllQuestionsHandler } from "mocks/handlers";

describe("Stepper Component", () => {
  const queryCache = new QueryCache();
  beforeEach(() => queryCache.clear());
  afterEach(() => queryCache.clear());

  it("should render the stepper component", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          <Stepper />
        </BrowserRouter>
      </QueryClientProvider>
    );

    server.use(getAllQuestionsHandler);

    expect(await screen.findByText(/true/i)).toBeInTheDocument();
    expect(await screen.findByText(/false/i)).toBeInTheDocument();
    expect(await screen.findByText(/vehicles/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/1 \/ 2/i, { exact: false })
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        /in 1993 swedish car manufacturer saab experimented with replacing the steering wheel with a joystick in a saab 9000./i
      )
    ).toBeInTheDocument();
  });

  it("clicking on true should redirect to the next step", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          <Stepper />
        </BrowserRouter>
      </QueryClientProvider>
    );

    server.use(getAllQuestionsHandler);
    fireEvent.click(await screen.findByText(/true/i));

    expect(
      await screen.findByText(/entertainment: video games/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/unturned originally started as a roblox game/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/2 \/ 2/i, { exact: false })
    ).toBeInTheDocument();

    fireEvent.click(await screen.findByText(/false/i));

    await waitFor(() => {
      expect(window.location.pathname).toBe("/results");
    });
  });
});
