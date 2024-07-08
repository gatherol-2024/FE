import { render, screen } from "@testing-library/react";
import Header from ".";
import { RecoilRoot } from "recoil";

describe("헤더 테스트", () => {
  it("로그인 돼있음", () => {
    render(
      <RecoilRoot>
        <Header />
      </RecoilRoot>
    );
    const loginButton = screen.getByRole("button");
    expect(loginButton).toHaveTextContent("로그인");
  });
});

export {};
