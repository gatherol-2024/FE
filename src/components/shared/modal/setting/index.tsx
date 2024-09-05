import styled from "styled-components";
import VoiceSetting from "./voice";
import { HiXMark } from "react-icons/hi2";
import Text from "../../text";
import { useState } from "react";
import ProfileSetting from "./profile";

const Setting = ({ setIsOpen }: { setIsOpen: (v: boolean) => void }) => {
  const [category, setCategory] = useState("프로필");
  const tabNames = ["프로필", "입력 및 출력 장치"];
  const renderSettingContent = () => {
    switch (category) {
      case "프로필":
        return <ProfileSetting />;
      case "입력 및 출력 장치":
        return <VoiceSetting />;
      default:
        return null;
    }
  };
  return (
    <StyleSetting>
      <CloseBtn>
        <Text type="xl">{category}</Text>
        <HiXMark onClick={() => setIsOpen(false)} />
      </CloseBtn>
      <TabLayout>
        {tabNames.map((text, idx) => (
          <Tab key={idx} onClick={() => setCategory(text)} isActive={category === text}>
            {text}
          </Tab>
        ))}
      </TabLayout>
      {renderSettingContent()}
    </StyleSetting>
  );
};

const StyleSetting = styled.div`
  flex-wrap: wrap;
  width: 50rem;
  display: flex;
  gap: 2rem;
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.background50};
`;

const TabLayout = styled.div`
  display: flex;
  gap: 2rem;
`;

const Tab = styled.div<{ isActive: boolean }>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0;
  font-size: 1.125rem;
  border-bottom: 2px solid;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    ${({ isActive, theme }) => (isActive ? "" : `border-color : ${theme.gray400}; color : ${theme.gray500}`)}
  }
  ${({ isActive, theme }) =>
    isActive
      ? `border-color : ${theme.primary}; color : ${theme.text};`
      : `color : ${theme.gray400}; border-color : ${theme.background50};`};
`;
const CloseBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: inherit;
  height: fit-content;
  svg {
    color: ${({ theme }) => theme.text};
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`;
export default Setting;
