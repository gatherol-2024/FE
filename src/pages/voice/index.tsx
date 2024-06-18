import styled from "styled-components";
import Profile from "../../components/voice/profile";
import Button from "../../components/shared/button";

import { IoMic, IoHeadset, IoCall } from "react-icons/io5";
import color from "../../design-token/color";
const VoicePage = () => {
  return (
    <StyledVoice>
      <ProfilLayout>
        <Profile position="TOP" />
        <Profile position="JGL" />
        <Profile position="MID" />
        <Profile position="BOT" />
        <Profile position="SUP" />
      </ProfilLayout>
      <VoiceMenu>
        <Button color={color.white} size="icon" type="icon">
          <IoHeadset />
        </Button>
        <Button color={color.white} size="icon" type="icon">
          <IoMic />
        </Button>
        <Button color={color.danger} size="icon" type="icon">
          <IoCall />
        </Button>
      </VoiceMenu>
    </StyledVoice>
  );
};

const StyledVoice = styled.div`
  padding: 2rem 8rem;
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
