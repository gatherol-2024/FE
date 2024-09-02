import styled from "styled-components";
import Text from "../../text";
import { IoMic, IoHeadset, IoCall, IoSettingsSharp } from "react-icons/io5";
import Bubble from "./bubble";
import { useVoiceStore } from "../../../../store/voice";
import { useState } from "react";
import VoiceSetting from "../../modal/setting";
import Modal from "styled-react-modal";
const RightSideBar = () => {
  const [voice, setVoice] = useVoiceStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleVoiceChange = (device: "mic" | "headset") => {
    const newState = voice;
    return setVoice({ ...newState, [device]: !newState[device] });
  };
  return (
    <StyledSideBar>
      <Profile>
        <ProfileIcon src="https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon5314.jpg?image=e_upscale,q_auto:good,f_webp,w_auto&v=1724034092925" />
        <ProfileInfo>
          <Text fontWeight="bold">열여섯글자테스트열여섯글자테스트</Text>
          <Tier>
            <img src="https://opgg-static.akamaized.net/images/medals_new/challenger.png?image=q_auto:good,f_webp,w_144&v=1724034092925" />
            <Text type="xs" fontWeight="bold">
              Challenger
            </Text>
          </Tier>
        </ProfileInfo>
        <BtnLayout>
          <VoiceBtn active={voice.headset} onClick={() => handleVoiceChange("headset")}>
            <Bubble text={voice.headset ? "헤드셋 음소거" : "헤드셋 음소거 해제"} />
            <IoHeadset />
          </VoiceBtn>
          <VoiceBtn active={voice.mic} onClick={() => handleVoiceChange("mic")}>
            <Bubble text={voice.mic ? "마이크 끄기" : "마이크 켜기"} />
            <IoMic />
          </VoiceBtn>
          <VoiceBtn active={false}>
            <Bubble text="통화방 나가기" />
            <IoCall />
          </VoiceBtn>
          <VoiceBtn onClick={() => setIsOpen(true)}>
            <Bubble text="사용자 설정" />
            <IoSettingsSharp />
          </VoiceBtn>
        </BtnLayout>
      </Profile>
      <SettingModal isOpen={isOpen} onBackgroundClick={() => setIsOpen(false)}>
        <VoiceSetting setIsOpen={setIsOpen} />
      </SettingModal>
    </StyledSideBar>
  );
};

const SettingModal = Modal.styled`
  width: fit-content;
  z-index: 10;
`;

const StyledSideBar = styled.div`
  flex-shrink: 0;
  gap: 0.75rem;
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  width: 15rem;
  background-color: ${({ theme }) => theme.background50};
`;

const Profile = styled.div`
  border-radius: 0.25rem;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.background100};
`;

const Tier = styled.div`
  padding: 0 0.5rem 0 0.25rem;
  border-radius: 999px;
  width: fit-content;
  justify-content: space-between;
  gap: 0.25rem;
  display: flex;
  background-color: ${({ theme }) => theme.background50};
  align-items: center;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const ProfileIcon = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  border: 1px solid black;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BtnLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const VoiceBtn = styled.button<{ active?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  outline: none;
  border: none;
  padding: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.background150};
  }
  &:hover > div {
    opacity: 1;
  }
  svg {
    transition: 0.2s;
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
    color: ${({ theme, active }) => (active == undefined || active ? theme.background500 : theme.danger)};
  }
`;

export default RightSideBar;
