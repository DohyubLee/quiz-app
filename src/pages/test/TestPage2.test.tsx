import React from "react";
import { act, getByText, render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import TestPage from "./TestPage";
import IndexPage from "../IndexPage";
import userEvent from "@testing-library/user-event";
import useStore from "../../stores/store";

describe("2.사용자가 문제 풀이를 진행", () => {
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
  test("답안을 선택 후 맞았는지 틀렸는지 바로 알 수 있는지", async () => {
    const { getByRole, findAllByRole, getByText } = renderUtils;

    const startBtnEl = getByRole("button");
    const user = userEvent.setup();
    await act(async () => {
      await user.click(startBtnEl);
    });
    const quizOptionsEl = await findAllByRole("radio", {}, { timeout: 3000 });
    await act(async () => {
      await user.click(quizOptionsEl[0]);
    });
    const correctStateEl = getByText(/정답입니다/i);
    expect(correctStateEl).toBeInTheDocument();
    await act(async () => {
      await user.click(quizOptionsEl[1]);
    });
    const incorrectStateEl = getByText(/오답입니다/i);
    expect(incorrectStateEl).toBeInTheDocument();
  });
  test("답안을 선택 후 다음 문항으로 이동할 수 있는지", () => {});
});
// npm test -- --testPathPattern=TestPage2.test.tsx
