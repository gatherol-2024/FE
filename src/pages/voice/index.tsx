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
  // console.log(champSelect, gameSession);
  const Profiles = DATA.data.myTeam.map((props: any, idx: number) => <Profile key={idx} {...props} />);
  return (
    <StyledVoice>
      <ProfilLayout>
        {Profiles}
        {/* <Profile position="TOP" data={} name="PodoLove#LOVE" volume={100} />
        <Profile position="JGL" name="고급진 솔로킬#KR1" />
        <Profile position="MID" name="강서구청장#i1kCC" mic={false} />
        <Profile position="BOT" name="앙태현짱짱맨#KR1" headset={false} />
        <Profile position="SUP" name="Vitenci#KR1" mic={false} headset={false} /> */}
      </ProfilLayout>
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
