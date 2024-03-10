import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import TestPage from "./TestPage";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <TestPage />
    </BrowserRouter>
  );
  //   const indexPageEl = screen.getByRole("button");
  //   screen.debug(indexPageEl);
});
