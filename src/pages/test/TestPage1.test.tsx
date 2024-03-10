import React from "react";
import { act, render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import TestPage from "./TestPage";
import IndexPage from "../IndexPage";
import userEvent from "@testing-library/user-event";

describe("1.사용자가 문제 풀이를 진행", () => {
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
  test("답안을 선택 후 다음 문항 버튼이 활성화 되는지 ", async () => {
    const { getByRole, findAllByRole } = renderUtils;
    const startBtnEl = getByRole("button");
    const user = userEvent.setup();
    await act(async () => {
      await user.click(startBtnEl);
    });
    const quizOptionsEl = await findAllByRole("radio", {}, { timeout: 3000 });
    await act(async () => {
      await user.click(quizOptionsEl[0]);
    });
    const nextBtnEl = getByRole("button");
    expect(nextBtnEl).toBeEnabled();
  });
});
// npm test -- --testPathPattern=TestPage1.test.tsx
