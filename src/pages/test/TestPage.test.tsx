import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import { MemoryRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import TestPage from "./TestPage";
import IndexPage from "../IndexPage";

describe("사용자가 문제 풀이를 진행", () => {
  test("답안을 선택 후 다음 문항 버튼이 활성화 되는지 ", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/test/:testId" element={<TestPage />} />
        </Routes>
      </MemoryRouter>
    );
  });
  test("답안을 선택 후 맞았는지 틀렸는지 바로 알 수 있는지", () => {});
  test("답안을 선택 후 다음 문항으로 이동할 수 있는지", () => {});
});
