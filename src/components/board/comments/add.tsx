import { useState } from "react";
import styled from "styled-components";
import Text from "../../shared/text";
import Button from "../../shared/button";

interface AddCommentProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

const AddComment = ({ isOpen, setIsOpen }: AddCommentProps) => {
  const [comment, setComment] = useState("");

  return (
    <StyledAddComment style={{ display: isOpen ? "flex" : "none" }}>
      <TextInput onChange={(e) => setComment(e.target.value)} maxLength={1000} />
      <AddMenu>
        <Text color="gray400" type="sm">
          ({comment.length}/1000)
        </Text>
        <AddButton>
          <Button color="danger" type="text" onClick={() => setIsOpen(false)}>
            취소
          </Button>
          <Button color="success" type="text">
            등록하기
          </Button>
        </AddButton>
      </AddMenu>
    </StyledAddComment>
  );
};

const StyledAddComment = styled.div`
  width: 100%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
`;

const TextInput = styled.textarea`
  height: 8rem !important;
  padding: 0.5rem;
  resize: none;
  outline: none;
  border-color: ${({ theme }) => theme.gray200};
  border-bottom: none;
`;

const AddButton = styled.div`
  display: flex;
  gap: 1rem;
`;

const AddMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.gray200};
`;
export default AddComment;
