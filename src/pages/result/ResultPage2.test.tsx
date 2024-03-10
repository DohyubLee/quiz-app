import React from "react";
import { act, render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ResultPage from "./ResultPage";
import IndexPage from "../IndexPage";
import TestPage from "../test/TestPage";
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
describe("2.모든 문항을 다 풀면 결과정보를 보여준다", () => {
  let renderUtils: ReturnType<typeof render>;

  beforeEach(async () => {
    renderUtils = render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/test/:testId" element={<TestPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </MemoryRouter>
    );
  });
  test("정답 개수, 오답 개수를 볼 수 있는지", async () => {
    const { getByRole, findAllByRole, getByText } = renderUtils;
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
    const correctCountEl = getByText(/정답 개수/i);
    const incorrectCountEl = getByText(/오답 개수/i);
    expect(correctCountEl).toBeInTheDocument();
    expect(incorrectCountEl).toBeInTheDocument();
  });
});
// npm test -- --testPathPattern=ResultPage2.test.tsx
