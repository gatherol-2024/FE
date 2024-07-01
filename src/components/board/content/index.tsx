import styled from "styled-components";
import Text from "../../shared/text";

interface ContentProps {
  title: string;
  author: string;
  category: string;
  date: string;
}

const Content = ({ title, author, category, date }: ContentProps) => {
  return (
    <StyledContent>
      <TitleLayout>
        <Text type="3xl">{title}</Text>
        <InfoLayout>
          <Text type="sm" color="gray400">
            {author}
          </Text>
          <Text type="sm" color="gray400">
            {category}
          </Text>
          <Text type="sm" color="gray400">
            {date}
          </Text>
        </InfoLayout>
      </TitleLayout>
    </StyledContent>
  );
};

const StyledContent = styled.div`
  width: 100%;
  height: 100rem;
  background-color: ${({ theme }) => theme.background50};
  display: flex;
  flex-direction: column;
`;

const TitleLayout = styled.div`
  padding: 1.5rem;
  border-bottom: ${({ theme }) => theme.gray200};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoLayout = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export default Content;
