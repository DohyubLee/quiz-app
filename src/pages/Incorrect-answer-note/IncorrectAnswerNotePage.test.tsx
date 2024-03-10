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
