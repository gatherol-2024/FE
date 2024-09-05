import styled from "styled-components";
import Button from "../../button";
import useUser from "../../../../hooks/useUser";
import Text from "../../text";
import { useState } from "react";

const ProfileSetting = () => {
  const { user } = useUser();
  const [userName, setUserName] = useState(user.nickname);
  console.log(user);
  return (
    <StyledProfile>
      <ProfileLayout>
        <ProfileImg src={user.image} />
        <ButtonLayout>
          <Button color="success" size="sm">
            사진 바꾸기
          </Button>
          <Button color="danger" type="ghost" size="sm">
            사진 삭제하기
          </Button>
        </ButtonLayout>
      </ProfileLayout>
      <Text color="gray400">닉네임</Text>
      <StyleInput value={userName} onChange={(e) => setUserName(e.target.value)} />
      <Text color="gray400">이메일</Text>
      <StyleInput value={user.email} disabled />
      <ButtonLayout>
        <Button type="text" color="success" size="lg">
          저장하기
        </Button>
        <Button type="text" color="danger" size="lg">
          취소하기
        </Button>
      </ButtonLayout>
    </StyledProfile>
  );
};
const StyledProfile = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
`;

const ProfileLayout = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProfileImg = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 9999px;
  object-fit: cover;
`;
const ButtonLayout = styled.div`
  justify-content: end;
  display: flex;
  gap: 1rem;
`;

const StyleInput = styled.input`
  margin-bottom: 1rem;
  background-color: inherit;
  outline: none;
  border-radius: 0.25rem;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text};
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.gray150};

  &:disabled {
    background-color: ${({ theme }) => theme.background100};
    color: ${({ theme }) => theme.gray300};
  }
`;
export default ProfileSetting;
