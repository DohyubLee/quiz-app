import React from "react";
import { act, render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import IncorrectAnswerNotePage from "./IncorrectAnswerNotePage";
import IndexPage from "../IndexPage";
import TestPage from "../test/TestPage";
import ResultPage from "../result/ResultPage";
import userEvent from "@testing-library/user-event";
import useStore from "../../stores/store";
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
  test("틀렸던 문제 목록을 노출하는지", async () => {
    const { getByRole, findAllByRole, getByText, getAllByRole } = renderUtils;
    const startBtnEl = getByRole("button");
    const user = userEvent.setup();
    await act(async () => {
      await user.click(startBtnEl);
    });
    for (let i = 0; i < 10; i++) {
      const quizOptionsEl = await findAllByRole("radio", {}, { timeout: 3000 });
      await act(async () => {
        await user.click(quizOptionsEl[i % 2]);
      });
      const nextBtnEl = getByRole("button");
      await act(async () => {
        await user.click(nextBtnEl);
      });
    }
    const incorrectNoteEl = getByText(/오답노트/i);
    await act(async () => {
      await user.click(incorrectNoteEl);
    });
    const { quizList } = useStore.getState();

    const incorrectCount = quizList.filter(
      (item) => item.correct_answer !== item.selectedAnswer
    ).length;
    const incorrectedElements = getAllByRole("heading", { level: 3 });

    expect(incorrectedElements.length).toBe(incorrectCount);
  });
});
// npm test -- --testPathPattern=IncorrectAnswerNotePage1.test.tsx
