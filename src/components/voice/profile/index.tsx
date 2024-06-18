import styled from "styled-components";
import Text from "../../shared/text";
import color from "../../../design-token/color";
import { IoMicOffOutline, IoMicOutline } from "react-icons/io5";

interface ProfileProps {
  position: "TOP" | "JGL" | "MID" | "BOT" | "SUP";
}

const Profile = ({ position }: ProfileProps) => {
  return (
    <StyledProfile>
      <ProfileIcon src={`/images/${position}.svg`} />
      <Text color={color.white} type="3xl">
        {position}
      </Text>
      <ChampionLayout>
        <ChampionImage src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg" />
      </ChampionLayout>
    </StyledProfile>
  );
};

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
export default Profile;
