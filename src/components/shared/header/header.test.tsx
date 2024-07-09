import { render, screen } from "@testing-library/react";
import Header from ".";
import { RecoilRoot } from "recoil";
import { theme, useThemeStore } from "../../../store/theme";

describe("헤더 테스트", () => {
  it("로그인 돼있음", () => {
    render(
      <RecoilRoot initializeState={(snapshot) => snapshot.set(theme, "dark")}>
        <Header />
      </RecoilRoot>
    );
    const loginButton = screen.getByRole("button");
    expect(loginButton).toHaveTextContent("로그인");
  });
});

export {};
