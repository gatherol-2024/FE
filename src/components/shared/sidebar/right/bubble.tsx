import styled from "styled-components";

const Bubble = ({ text }: { text: string }) => {
  return (
    <StyledBubble>
      <span>{text}</span>
      <div />
    </StyledBubble>
  );
};

const StyledBubble = styled.div`
  z-index: 10;
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  opacity: 0;
  transition: 0.2s;
  white-space: nowrap;
  bottom: 125%;
  position: absolute;

  div {
    top: 100%;
    left: 50%;
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    background-color: inherit;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;
export default Bubble;
