import React from "react";
import { act, render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { debug } from "console";
import IndexPage from "./pages/IndexPage";
import TestPage from "./pages/test/TestPage";
import userEvent from "@testing-library/user-event";

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

describe("메인 페이지에서 퀴즈 시작하기 버튼을 클릭하여 퀴즈 시작", () => {
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

  test("시작하기 버튼을 클릭했을때 문제풀기 페이지로 잘 이동하여 문제가 잘 노출되는지", async () => {
    const { getByRole, findAllByRole } = renderUtils;
    const startBtnEl = getByRole("button");

    expect(startBtnEl).toBeInTheDocument();
    const user = userEvent.setup();
    await act(async () => {
      await user.click(startBtnEl);
    });

    const quizOptionsEl = await findAllByRole("radio", {}, { timeout: 3000 });
    // const { currentTime, quizList } = useStore.getState();
    screen.debug();
    // screen.debug(quizOptionsEl);
    expect(quizOptionsEl.length).toBeGreaterThan(2);
  });
});

describe("사용자가 문제 풀이를 진행", () => {
  // let renderUtils: ReturnType<typeof render>;

  // beforeEach(async () => {
  //   renderUtils = render(
  //     <MemoryRouter initialEntries={["/"]}>
  //       <Routes>
  //         <Route path="/" element={<IndexPage />} />
  //         <Route path="/test/:testId" element={<TestPage />} />
  //       </Routes>
  //     </MemoryRouter>
  //   );
  // });
  test("답안을 선택 후 다음 문항 버튼이 활성화 되는지 ", async () => {
    // const { getByRole, findAllByRole } = renderUtils;
    // const startBtnEl = getByRole("button");
    // const user = userEvent.setup();
    // await act(async () => {
    //   await user.click(startBtnEl);
    // });
    // const { currentTime, quizList } = useStore.getState();
    // console.log("egggg", quizList);
    // const quizOptionsEl = await findAllByRole("radio", {}, { timeout: 3000 });
    // screen.debug();
    // await act(async () => {
    //   await user.click(quizOptionsEl[0]);
    // });
    // const nextBtnEl = getByRole("button");
    // expect(nextBtnEl).toBeEnabled();
  });
  test("답안을 선택 후 맞았는지 틀렸는지 바로 알 수 있는지", () => {});
  test("답안을 선택 후 다음 문항으로 이동할 수 있는지", () => {});
});

describe("모든 문항을 다 풀면 결과정보를 보여준다", () => {
  test("퀴즈를 마치 때까지 소요된 시간이 노출되는지", () => {});
  test("정답 개수, 오답 개수를 볼 수 있는지", () => {});
  test("정 오답에 대한 비율을 확인할 수 있는지", () => {});
});

describe("오답 노트 확인", () => {
  test("틀렸던 문제 목록을 노출하는지", () => {});
  test("선택한 문제와 정답을 표시하는지", () => {});
});
