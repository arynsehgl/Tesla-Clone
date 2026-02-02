import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

function Section({
  id,
  title,
  description,
  leftButtonText,
  rightButtonText,
  backgroundImage,
  showDownArrow,
  detailPath,
  rightButtonPath,
}) {
  const navigate = useNavigate();

  const handlePrimaryClick = () => {
    if (detailPath) {
      navigate(detailPath);
    }
  };

  const handleSecondaryClick = () => {
    if (rightButtonPath) {
      navigate(rightButtonPath);
    }
  };

  return (
    <Wrap id={id} bgImage={backgroundImage}>
      <FadeIn>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </FadeIn>
      <Buttons>
        <FadeIn delay={0.1}>
          <ButtonGroup>
            {leftButtonText && (
              <LeftButton onClick={handlePrimaryClick}>
                {leftButtonText}
              </LeftButton>
            )}
            {rightButtonText && (
              <RightButton onClick={handleSecondaryClick}>
                {rightButtonText}
              </RightButton>
            )}
          </ButtonGroup>
        </FadeIn>
        {showDownArrow && <DownArrow src="/images/down-arrow.svg" alt="" />}
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  scroll-snap-align: start;
  z-index: 1;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  cursor: pointer;
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;
const DownArrow = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 40px;
  animation: bounce infinite 1.5s;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FadeIn = styled.div`
  animation: ${fadeIn} 0.8s ease-out;
  animation-delay: ${(props) => (props.delay ? `${props.delay}s` : "0s")};
  animation-fill-mode: both;
`;
