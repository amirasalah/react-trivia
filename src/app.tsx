import React from "react";
import "./app.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Stepper from "./pages/stepper";
import Results from "./pages/results";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/stepper" element={<Stepper />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
