import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import IndexPage from "./IndexPage";
import { MemoryRouter, BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <IndexPage />
    </BrowserRouter>
  );
  const indexPageEl = screen.getByRole("button");
  //   screen.debug(indexPageEl);
});
