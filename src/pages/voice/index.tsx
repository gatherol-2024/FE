import styled from "styled-components";
import Profile from "../../components/voice/profile";
import Button from "../../components/shared/button";
import { IoMic, IoHeadset, IoCall } from "react-icons/io5";
import { useState } from "react";
import useGetUserMedia from "../../hooks/useGetUserMedia";
const VoicePage = () => {
  const [device, setDevice] = useState({ mic: true, headset: true });
  const { getUserAudio, volume } = useGetUserMedia();
  console.log(volume);
  return (
    <StyledVoice>
      <ProfilLayout>
        <Profile position="TOP" name="PodoLove#LOVE" volume={volume} />
        <Profile position="JGL" name="고급진 솔로킬#KR1" />
        <Profile position="MID" name="강서구청장#i1kCC" mic={false} />
        <Profile position="BOT" name="앙태현짱짱맨#KR1" headset={false} />
        <Profile position="SUP" name="Vitenci#KR1" mic={false} headset={false} />
      </ProfilLayout>
      <VoiceMenu>
        <Button size="icon" type="icon" color="gray200">
          <IoHeadset />
        </Button>
        <Button size="icon" type="icon" color="gray200" onClick={getUserAudio}>
          <IoMic />
        </Button>
        <Button size="icon" type="icon" color="danger">
          <IoCall />
        </Button>
      </VoiceMenu>
    </StyledVoice>
  );
};

const StyledVoice = styled.div`
  padding: 6rem 8rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  align-items: center;
`;
const ProfilLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const VoiceMenu = styled.div`
  display: flex;
  gap: 2rem;
`;

export default VoicePage;
