import styled from "styled-components";
import Profile from "../../components/voice/profile";
import Button from "../../components/shared/button";
import { IoMic, IoHeadset, IoCall } from "react-icons/io5";
import useVoiceChat from "../../hooks/useVoiceChat";
import { DATA } from "../../constants/test";
import useInGame from "../../hooks/useInGame";

const VoicePage = () => {
  const { teamvoice, connect, disconnect } = useVoiceChat();
  const { champSelect, gameSession } = useInGame();
  const Profiles = DATA.data.myTeam.map((props: any, idx: number) => <Profile key={idx} {...props} />);
  return (
    <StyledVoice>
      <ProfilLayout>{Profiles}</ProfilLayout>
      <VoiceMenu>
        <Button size="icon" type="icon" color="gray300" onClick={connect}>
          <IoHeadset />
        </Button>
        <Button size="icon" type="icon" color="gray300">
          <IoMic />
        </Button>
        <Button size="icon" type="icon" color="danger" onClick={disconnect}>
          <IoCall />
        </Button>
      </VoiceMenu>
    </StyledVoice>
  );
};

const StyledVoice = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`;
const ProfilLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;
const VoiceMenu = styled.div`
  display: flex;
  gap: 2rem;
`;

export default VoicePage;
