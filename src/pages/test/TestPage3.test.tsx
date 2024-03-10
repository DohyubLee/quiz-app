import React from "react";
import { act, render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import TestPage from "./TestPage";
import IndexPage from "../IndexPage";
import userEvent from "@testing-library/user-event";

describe("3.사용자가 문제 풀이를 진행", () => {
  let renderUtils: ReturnType<typeof render>;

  beforeEach(async () => {
    renderUtils = render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/test/:testId" element={<TestPage />} />
        </Routes>
      </MemoryRouter>
    );
  });
  test("답안을 선택 후 다음 문항으로 이동할 수 있는지", async () => {
    const { getByRole, findAllByRole, getByText } = renderUtils;

    const startBtnEl = getByRole("button");
    const user = userEvent.setup();
    await act(async () => {
      await user.click(startBtnEl);
    });
    const quizOptionsEl = await findAllByRole("radio", {}, { timeout: 3000 });
    const FirstquestionEl = getByRole("heading", { level: 3 });
    await act(async () => {
      await user.click(quizOptionsEl[0]);
    });
    const nextBtnEl = getByRole("button");
    await act(async () => {
      await user.click(nextBtnEl);
    });
    const secondquestionEl = getByRole("heading", { level: 3 });
    expect(FirstquestionEl).not.toBe(secondquestionEl);
  });
});
// npm test -- --testPathPattern=TestPage3.test.tsx
