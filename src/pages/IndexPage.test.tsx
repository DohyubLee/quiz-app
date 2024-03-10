import React from "react";
import {
  act,
  findAllByRole,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import IndexPage from "./IndexPage";
import { MemoryRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import useStore from "../stores/store";
import TestPage from "./test/TestPage";
import userEvent from "@testing-library/user-event";

describe("메인 페이지에서 퀴즈 시작하기 버튼을 클릭하여 퀴즈 시작", () => {
  const { getByRole, findAllByRole } = render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/test/:testId" element={<TestPage />} />
      </Routes>
    </MemoryRouter>
  );
  test("시작하기 버튼을 클릭했을때 문제풀기 페이지로 잘 이동하여 문제가 잘 노출되는지", async () => {
    const { currentTime, quizList } = useStore.getState();

    const startBtnEl = getByRole("button");
    expect(startBtnEl).toBeInTheDocument();
    const user = userEvent.setup();
    await act(async () => {
      await user.click(startBtnEl);
    });
    const quizOptionsEl = await findAllByRole("radio", {}, { timeout: 3000 });
    // screen.debug();
    // screen.debug(quizOptionsEl);
    expect(quizOptionsEl.length).toBeGreaterThan(0);
  });
});
