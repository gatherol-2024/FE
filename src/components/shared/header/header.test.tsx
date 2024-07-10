import { render, screen } from "@testing-library/react";
import Header from ".";
import { RecoilRoot } from "recoil";
import { userState } from "../../../store/user";

const renderWithStates = (name: string) =>
  render(
    <RecoilRoot initializeState={(snapshot) => snapshot.set(userState, { name: name })}>
      <Header />
    </RecoilRoot>
  );

describe("헤더 테스트", () => {
  it("1. 로그인 돼있는 경우", () => {
    renderWithStates("test");
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("test");
  });
  it("2. 로그인 안 돼있는 경우", () => {
    renderWithStates("");
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("로그인");
  });
});

export {};
