import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import IncorrectAnswerNotePage from "./IncorrectAnswerNotePage";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <IncorrectAnswerNotePage />
    </BrowserRouter>
  );
  //   const indexPageEl = screen.getByRole("button");
  //   screen.debug(indexPageEl);
});

describe("오답 노트 확인", () => {
  test("틀렸던 문제 목록을 노출하는지", () => {});
  test("선택한 문제와 정답을 표시하는지", () => {});
});
