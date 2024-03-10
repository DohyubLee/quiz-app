import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import ResultPage from "./ResultPage";
import IndexPage from "../IndexPage";
import TestPage from "../test/TestPage";
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
describe("3.모든 문항을 다 풀면 결과정보를 보여준다", () => {
  test("정 오답에 대한 비율을 확인할 수 있는지", () => {});
});
// npm test -- --testPathPattern=ResultPage3.test.tsx
