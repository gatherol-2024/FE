import styled from "styled-components";
import Text from "../../shared/text";
import { IoMicOff, IoHeadset } from "react-icons/io5";
import LinkGenerator from "../../../utils/linkGenerator";
import LinkText from "../../link";
import useInGame from "../../../hooks/useInGame";
import { CHAMPIONS } from "../../../constants/champions";

interface ProfileProps {
  assignedPosition: string;
  championId: number;
  puuid: string;
  mic?: boolean;
  headset?: boolean;
  volume?: number;
}

const Profile = ({ assignedPosition, mic = true, headset = true, puuid, championId, volume = 0 }: ProfileProps) => {
  return (
    <StyledProfile>
      <ProfileIcon src={`/images/${assignedPosition}.svg`} />
      <Text type="2xl">{assignedPosition}</Text>
      <ChampionLayout>
        <ChampionImage
          src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/champion/${CHAMPIONS[championId]}.png`}
          alt="챔피언 이미지"
        />
        <MicVolume volume={volume} />
      </ChampionLayout>
      <DeviceState>
        {!mic ? <IoMicOff /> : null}
        <IoHeadset />
      </DeviceState>
      <NameMenu>
        <LinkText target="_blank" href={"/"} type="lg">
          {/* {puuid} */}
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
  width: 2rem;
  height: 2rem;
`;

const ChampionImage = styled.img`
  object-fit: contain;
  width: 6rem;
  height: 6rem;
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
    color: ${({ theme }) => theme.background500};
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
