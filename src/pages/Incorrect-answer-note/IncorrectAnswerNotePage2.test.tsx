import React from "react";
import { act, render, within } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import IncorrectAnswerNotePage from "./IncorrectAnswerNotePage";
import IndexPage from "../IndexPage";
import TestPage from "../test/TestPage";
import ResultPage from "../result/ResultPage";
import userEvent from "@testing-library/user-event";

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
  test("선택한 문제와 정답을 표시하는지", async () => {
    const {
      getByRole,
      findAllByRole,
      getByText,
      getAllByRole,
      getAllByTestId,
    } = renderUtils;
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
    const incorrectCardElements = getAllByTestId("incorrect-card");
    const radioGroupEl = within(incorrectCardElements[0]).getAllByRole("radio");

    expect(radioGroupEl[1]).toBeChecked();
  });
});
// npm test -- --testPathPattern=IncorrectAnswerNotePage2.test.tsx
