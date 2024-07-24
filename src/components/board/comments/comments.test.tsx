import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Comments from ".";
const MOCK_COMMENTS = [{ author: "AUTHOR_TEST", comment: "COMMENT_TEST", date: "DATE_TEST" }];
describe("댓글 테스트", () => {
  describe("1. 댓글 개수", () => {
    it("1.1 댓글 없을 때", () => {
      render(
        <RecoilRoot>
          <Comments comments={[]} addComment={() => {}} />
        </RecoilRoot>
      );
      const element = screen.getByTestId("comment-cnt");
      expect(element).toHaveTextContent("0");
    });
    it("1.1 댓글 있을 때", () => {
      render(
        <RecoilRoot>
          <Comments comments={MOCK_COMMENTS} addComment={() => {}} />
        </RecoilRoot>
      );
      const element = screen.getByTestId("comment-cnt");
      expect(element).toHaveTextContent("1");
    });
  });
});

export {};
