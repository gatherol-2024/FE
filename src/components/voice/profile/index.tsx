import styled from "styled-components";
import Text from "../../shared/text";
import color from "../../../design-token/color";
import { IoMicOffOutline } from "react-icons/io5";
import { MdOutlineHeadsetOff } from "react-icons/md";
import LinkGenerator from "../../../utils/linkGenerator";
import LinkText from "../../link";
interface ProfileProps {
  position: "TOP" | "JGL" | "MID" | "BOT" | "SUP";
  name: string;
  mic?: boolean;
  headset?: boolean;
}

const Profile = ({ position, mic = true, headset = true, name }: ProfileProps) => {
  return (
    <StyledProfile>
      <ProfileIcon src={`/images/${position}.svg`} />
      <Text color={color.white} type="3xl">
        {position}
      </Text>
      <ChampionLayout>
        <ChampionImage src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg" />
      </ChampionLayout>
      <DeviceState>
        {!mic ? <IoMicOffOutline /> : null}
        {!headset ? <MdOutlineHeadsetOff /> : null}
      </DeviceState>

      <LinkText target="_blank" href={LinkGenerator(name)} color={color.white} type="lg">
        {name}
      </LinkText>
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
`;
const ChampionLayout = styled.div`
  display: flex;
  border-radius: 9999px;
  background-color: ${color.white};
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
`;

const DeviceState = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  height: 3rem;
  & svg {
    color: ${color.danger};
    width: 2rem;
    height: 2rem;
  }
`;

export default Profile;
