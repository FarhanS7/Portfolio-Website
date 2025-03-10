import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled, { keyframes } from "styled-components";

// ======== ANIMATIONS ========
const glowPulse = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(0, 198, 255, 0.2), inset 0 0 5px rgba(0, 198, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 198, 255, 0.4), inset 0 0 10px rgba(0, 198, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 10px rgba(0, 198, 255, 0.2), inset 0 0 5px rgba(0, 198, 255, 0.1);
  }
`;

const scanline = keyframes`
  0% {
    transform: translateY(-100%);
  }
  50%, 100% {
    transform: translateY(100%);
  }
`;

const borderGlow = keyframes`
  0% {
    border-color: rgba(0, 198, 255, 0.3);
  }
  50% {
    border-color: rgba(0, 198, 255, 0.7);
  }
  100% {
    border-color: rgba(0, 198, 255, 0.3);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -100px;
  }
  40%, 100% {
    background-position: 300px;
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// ======== STYLED COMPONENTS ========
const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: linear-gradient(
    135deg,
    rgba(17, 25, 40, 0.9) 0%,
    rgba(5, 15, 25, 0.95) 100%
  );
  color: #fff;
  border-radius: 8px;
  padding: 25px;
  position: relative;
  border: 1px solid rgba(0, 198, 255, 0.2);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(0, 198, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &:hover {
    border: 1px solid rgba(0, 198, 255, 0.4);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.6),
      inset 0 0 15px rgba(0, 198, 255, 0.2);
    transform: translateY(-5px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 198, 255, 0.5),
      transparent
    );
    animation: ${scanline} 4s linear infinite;
    opacity: 0.5;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(0, 198, 255, 0.2) 20%,
      rgba(0, 198, 255, 0.5) 50%,
      rgba(0, 198, 255, 0.2) 80%,
      transparent 100%
    );
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 15px;
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid rgba(0, 198, 255, 0.3);
  animation: ${borderGlow} 3s infinite ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to right,
      rgba(0, 198, 255, 0),
      rgba(0, 198, 255, 0.1),
      rgba(0, 198, 255, 0)
    );
    transform: rotate(30deg);
    animation: ${shimmer} 3s infinite linear;
    pointer-events: none;
  }
`;

const Image = styled.img`
  height: 50px;
  border-radius: 8px;
  margin-top: 4px;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 0 5px rgba(0, 198, 255, 0.3));

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 8px rgba(0, 198, 255, 0.5));
  }

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const School = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 0 8px rgba(0, 198, 255, 0.4);
  letter-spacing: 0.5px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 3px;
  letter-spacing: 0.3px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 198, 255, 0.8);
  margin-top: 2px;
  letter-spacing: 0.5px;

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 10px;
  margin-top: 5px;
  line-height: 1.5;
  position: relative;
  padding: 10px;
  border-left: 2px solid rgba(0, 198, 255, 0.4);
  background: rgba(0, 198, 255, 0.05);
  border-radius: 0 4px 4px 0;

  &:hover {
    background: rgba(0, 198, 255, 0.08);
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  display: inline-block;
  padding: 4px 12px;
  background: linear-gradient(
    90deg,
    rgba(0, 198, 255, 0.1) 0%,
    rgba(0, 198, 255, 0.2) 50%,
    rgba(0, 198, 255, 0.1) 100%
  );
  border-radius: 20px;
  letter-spacing: 0.5px;
  animation: ${glowPulse} 3s infinite ease-in-out;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 3px 10px;
  }
`;

const GradeLabel = styled.span`
  font-weight: 600;
  color: rgba(0, 198, 255, 0.9);
  text-shadow: 0 0 5px rgba(0, 198, 255, 0.5);
`;

const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

const IconContainer = styled.div`
  background: linear-gradient(
    135deg,
    rgba(10, 14, 35, 0.95) 0%,
    rgba(5, 15, 25, 0.98) 100%
  );
  border: 2px solid rgba(0, 198, 255, 0.4);
  box-shadow: 0 0 15px rgba(0, 198, 255, 0.3);
  overflow: hidden;
  animation: ${floatAnimation} 4s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(0, 198, 255, 0.2) 0%,
      transparent 70%
    );
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const CustomArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid rgba(0, 198, 255, 0.3);
  position: absolute;
  left: -10px;
`;

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <IconContainer>
          <img
            width="100%"
            height="100%"
            alt={education?.school}
            style={{ borderRadius: "50%", objectFit: "cover" }}
            src={education?.img}
          />
        </IconContainer>
      }
      date={education?.date}
      iconStyle={{
        background: "transparent",
        overflow: "visible",
      }}
      contentArrowStyle={{
        display: "none",
      }}
    >
      <TimelineContent>
        <CustomArrow />
        <Top>
          <ImageContainer>
            <Image src={education?.img} />
          </ImageContainer>
          <Body>
            <School>{education?.school}</School>
            <Degree>{education?.degree}</Degree>
            <Date>{education?.date}</Date>
          </Body>
        </Top>
        <Grade>
          <GradeLabel>Grade : </GradeLabel>
          {education?.grade}
        </Grade>
        <Description>
          {education?.desc && <Span>{education.desc}</Span>}
        </Description>
      </TimelineContent>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
