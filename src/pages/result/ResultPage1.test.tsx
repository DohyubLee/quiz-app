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

describe("1.모든 문항을 다 풀면 결과정보를 보여준다", () => {
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
  test("퀴즈를 마치 때까지 소요된 시간이 노출되는지", async () => {
    const { getByRole, findAllByRole, getByText } = renderUtils;
    const startBtnEl = getByRole("button");
    const user = userEvent.setup();
    await act(async () => {
      await user.click(startBtnEl);
    });
    for (let i = 0; i < 10; i++) {
      const quizOptionsEl = await findAllByRole("radio");
      await act(async () => {
        await user.click(quizOptionsEl[0]);
      });
      const nextBtnEl = getByRole("button");
      await act(async () => {
        await user.click(nextBtnEl);
      });
    }
    const elapsedTimeEl = getByRole("heading", { level: 3 });
    expect(elapsedTimeEl).toBeInTheDocument();
  });
});
// npm test -- --testPathPattern=ResultPage1.test.tsx
