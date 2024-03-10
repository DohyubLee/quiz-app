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

describe("1.모든 문항을 다 풀면 결과정보를 보여준다", () => {
  test("퀴즈를 마치 때까지 소요된 시간이 노출되는지", () => {});
});
// npm test -- --testPathPattern=ResultPage1.test.tsx
