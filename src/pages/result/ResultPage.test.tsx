import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import ResultPage from "./ResultPage";
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: any) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <ResultPage />
    </BrowserRouter>
  );
  //   const indexPageEl = screen.getByRole("button");
  //   screen.debug(indexPageEl);
});
