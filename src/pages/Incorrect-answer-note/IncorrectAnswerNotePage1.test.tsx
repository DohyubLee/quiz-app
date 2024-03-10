import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import { MemoryRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import IncorrectAnswerNotePage from "./IncorrectAnswerNotePage";
import IndexPage from "../IndexPage";
import TestPage from "../test/TestPage";
import ResultPage from "../result/ResultPage";

describe("1.오답 노트 확인", () => {
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
  test("틀렸던 문제 목록을 노출하는지", () => {});
});
