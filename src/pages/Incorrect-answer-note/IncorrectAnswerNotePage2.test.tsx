import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import { MemoryRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import IncorrectAnswerNotePage from "./IncorrectAnswerNotePage";
import IndexPage from "../IndexPage";
import TestPage from "../test/TestPage";
import ResultPage from "../result/ResultPage";
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

describe("2.오답 노트 확인", () => {
  let renderUtils: ReturnType<typeof render>;

  beforeEach(async () => {
    renderUtils = render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/test/:testId" element={<TestPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route
            path="/Incorrect-answer-note"
            element={<IncorrectAnswerNotePage />}
          />
        </Routes>
      </MemoryRouter>
    );
  });
  test("선택한 문제와 정답을 표시하는지", () => {});
});
// npm test -- --testPathPattern=IncorrectAnswerNotePage2.test.tsx
