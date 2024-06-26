import styled from "styled-components";
import Text from "../../shared/text";
import { IoMicOffOutline, IoHeadsetOutline } from "react-icons/io5";
import LinkGenerator from "../../../utils/linkGenerator";
import LinkText from "../../link";

interface ProfileProps {
  position: "TOP" | "JGL" | "MID" | "BOT" | "SUP";
  name: string;
  mic?: boolean;
  headset?: boolean;
  volume?: number;
}

const Profile = ({ position, mic = true, headset = true, name, volume = 0 }: ProfileProps) => {
  return (
    <StyledProfile>
      <ProfileIcon src={`/images/${position}.svg`} />
      <Text type="3xl">{position}</Text>
      <ChampionLayout>
        <ChampionImage src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg" />
        <MicVolume volume={volume} />
      </ChampionLayout>
      <DeviceState>
        {!mic ? <IoMicOffOutline /> : null}
        {!headset ? <IoHeadsetOutline /> : null}
      </DeviceState>
      <NameMenu>
        <LinkText target="_blank" href={LinkGenerator(name)} type="lg">
          {name}
        </LinkText>
      </NameMenu>
    </StyledProfile>
  );
};

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
`;

const ProfileIcon = styled.img`
  width: 4rem;
  height: 4rem;
`;

const ChampionImage = styled.img`
  object-fit: cover;
  width: 8rem;
  height: 8rem;
  border-radius: 9999rem;
  z-index: 2;
`;
const ChampionLayout = styled.div`
  display: flex;
  border-radius: 9999px;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  background-color: ${({ theme }) => theme.gray150};
`;
const MicVolume = styled.div<{ volume: number }>`
  transition: 0.3s;
  opacity: ${({ volume }) => `${volume}%`};
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.success};
`;

const DeviceState = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  height: 3rem;
  & svg {
    color: ${({ theme }) => theme.danger};
    width: 2rem;
    height: 2rem;
  }
`;

const NameMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default Profile;
