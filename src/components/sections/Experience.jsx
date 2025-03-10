import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled, { keyframes } from "styled-components";
import { experiences } from "../../data/constants";
import ExperienceCard from "../cards/ExperienceCard";

// ======== ANIMATIONS ========
const glowPulse = keyframes`
  0% {
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3);
  }
  50% {
    text-shadow: 0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.5);
  }
  100% {
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3);
  }
`;

const scanline = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const holographicShimmer = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const typingEffect = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 60px 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #0ff, transparent);
    opacity: 0.5;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z' fill='rgba(0,255,255,0.03)' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.7;
    z-index: -1;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  padding: 0 30px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  padding: 10px 30px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 20px;
    height: 100%;
    border-top: 2px solid #0ff;
    border-bottom: 2px solid #0ff;
  }

  &::before {
    left: 0;
    border-left: 2px solid #0ff;
  }

  &::after {
    right: 0;
    border-right: 2px solid #0ff;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  text-transform: uppercase;
  letter-spacing: 4px;
  position: relative;
  animation: ${glowPulse} 3s infinite;

  &::before,
  &::after {
    content: "EXPERIENCE";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &::before {
    color: #ff00e5;
    filter: blur(7px);
    opacity: 0.5;
    transform: translate(-2px, 2px);
  }

  &::after {
    color: #0065ff;
    filter: blur(7px);
    opacity: 0.5;
    transform: translate(2px, -2px);
  }

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
    letter-spacing: 2px;
  }
`;

const TypingContainer = styled.div`
  display: inline-block;
  position: relative;
  margin: 30px 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: -10px;
    height: 100%;
    width: 3px;
    background-color: #0ff;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  max-width: 600px;
  overflow: hidden;
  display: inline-block;
  white-space: nowrap;
  color: ${({ theme }) => theme.text_secondary};
  border-right: 3px solid #0ff;
  animation: ${typingEffect} 3.5s steps(40, end), blink 1s step-end infinite;
  animation-fill-mode: forwards;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const StyledTimeline = styled(VerticalTimeline)`
  width: 100%;

  &:before {
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 255, 255, 0.1) 10%,
      rgba(0, 255, 255, 0.4) 50%,
      rgba(0, 255, 255, 0.1) 90%,
      transparent 100%
    ) !important;
    width: 4px !important;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
  }

  .vertical-timeline-element-icon {
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.6),
      0 0 0 4px rgba(0, 255, 255, 0.3) !important;
    background: linear-gradient(135deg, #001e3c, #0a192f) !important;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #0ff, #00bfff, #0072ff, #001bff, #0ff);
      background-size: 400%;
      border-radius: 50%;
      z-index: -1;
      opacity: 0.5;
      animation: ${holographicShimmer} 10s linear infinite;
    }
  }

  .vertical-timeline-element-content {
    background: rgba(10, 25, 47, 0.7) !important;
    border: 1px solid rgba(0, 255, 255, 0.2) !important;
    border-radius: 10px !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3),
      0 0 10px rgba(0, 255, 255, 0.2) inset !important;
    backdrop-filter: blur(10px) !important;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, transparent, #0ff, transparent);
      animation: ${scanline} 4s linear infinite;
      opacity: 0.5;
    }
  }

  .vertical-timeline-element-content-arrow {
    border-right-color: rgba(0, 255, 255, 0.2) !important;
  }
`;

const FloatingCircle = styled.div`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background: ${(props) => props.color};
  opacity: 0.1;
  filter: blur(10px);
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  z-index: -1;
  animation: ${float} ${(props) => props.duration}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
`;

const Experience = () => {
  return (
    <Container id="Experience">
      <FloatingCircle
        size={100}
        color="#0ff"
        top={20}
        left={10}
        duration={6}
        delay={1}
      />
      <FloatingCircle
        size={150}
        color="#ff00e5"
        top={60}
        left={80}
        duration={8}
        delay={0}
      />
      <FloatingCircle
        size={80}
        color="#0065ff"
        top={80}
        left={20}
        duration={7}
        delay={2}
      />

      <Wrapper>
        <TitleContainer>
          <Title>Experience</Title>
        </TitleContainer>

        <TypingContainer>
          <Desc>
            My work experience as a software engineer and working on different
            companies and projects.
          </Desc>
        </TypingContainer>

        <StyledTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </StyledTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;
