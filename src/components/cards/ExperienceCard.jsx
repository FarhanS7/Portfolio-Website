import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled, { keyframes } from "styled-components";

// ======== ANIMATIONS ========
const glowPulse = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5);
  }
  100% {
    box-shadow: 0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3);
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

const float = keyframes`
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

const shimmer = keyframes`
  0% {
    background-position: -200px;
  }
  100% {
    background-position: 200px;
  }
`;

const borderFlicker = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

// ======== STYLED COMPONENTS ========
const CardContainer = styled.div`
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(10, 14, 35, 0.95) 0%,
    rgba(5, 15, 25, 0.97) 100%
  );
  border-radius: 8px;
  padding: 20px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #0ff, transparent);
    opacity: 0.7;
    animation: ${borderFlicker} 4s infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      transparent,
      rgba(0, 255, 255, 0.03),
      transparent
    );
    animation: ${scanline} 8s linear infinite;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-5px);
    animation: ${glowPulse} 2s infinite;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 16px;
  position: relative;
  z-index: 2;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 8px;
  margin-top: 4px;
  border: 1px solid rgba(0, 255, 255, 0.3);
  transition: all 0.3s ease;
  filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.2));
  animation: ${float} 5s ease-in-out infinite;

  &:hover {
    filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.5));
    transform: scale(1.05);
  }

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Role = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.5px;
  text-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
  position: relative;
  display: inline-block;
  margin-bottom: 4px;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 60%;
    height: 1px;
    background: linear-gradient(90deg, #0ff, transparent);
  }

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Company = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.5px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 255, 255, 0.8);
  letter-spacing: 1px;
  padding: 4px 10px;
  border-radius: 16px;
  background: rgba(0, 255, 255, 0.1);
  align-self: flex-start;
  margin-top: 4px;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(0, 255, 255, 0.2);

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 3px 8px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 15px 0;
  padding-left: 10px;
  border-left: 1px solid rgba(0, 255, 255, 0.3);

  @media only screen and (max-width: 768px) {
    font-size: 13px;
    margin: 10px 0;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 5px;
  position: relative;
`;

const SkillsTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 5px;
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 30px;
    height: 2px;
    background: #0ff;
    box-shadow: 0 0 10px #0ff;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 5px;
`;

const Skill = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  padding: 5px 12px;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    rgba(0, 255, 255, 0.1),
    rgba(0, 170, 255, 0.1)
  );
  border: 1px solid rgba(0, 255, 255, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: ${shimmer} 2s infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.4);
    border-color: rgba(0, 255, 255, 0.6);

    &::before {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: 11px;
    padding: 4px 10px;
  }
`;

const Bullet = styled.span`
  color: #0ff;
  margin-right: 5px;
`;

const CustomTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    border-radius: 8px;
    box-shadow: rgba(0, 255, 255, 0.15) 0px 4px 24px;
    background: linear-gradient(
      135deg,
      rgba(17, 25, 40, 0.95),
      rgba(5, 15, 35, 0.95)
    );
    border: 1px solid rgba(0, 255, 255, 0.2);
    padding: 0;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      border-color: rgba(0, 255, 255, 0.5);
      box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
    }

    .vertical-timeline-element-content-arrow {
      border-right: 7px solid rgba(0, 255, 255, 0.3);
    }
  }

  .vertical-timeline-element-icon {
    background: linear-gradient(135deg, #051937, #004d7a);
    box-shadow: 0 0 0 4px rgba(0, 255, 255, 0.4),
      0 0 10px rgba(0, 255, 255, 0.3);

    svg {
      filter: drop-shadow(0 0 3px rgba(0, 255, 255, 0.5));
    }
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <CustomTimelineElement
      contentStyle={{
        background: "none",
        border: "none",
        padding: 0,
        boxShadow: "none",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(0, 255, 255, 0.3)",
      }}
      iconStyle={{
        background: "linear-gradient(135deg, #051937, #004d7a)",
        boxShadow:
          "0 0 0 4px rgba(0, 255, 255, 0.4), 0 0 10px rgba(0, 255, 255, 0.3)",
        color: "#fff",
      }}
      icon={experience.icon}
      date={experience?.date}
    >
      <CardContainer>
        <Top>
          {experience.img && (
            <Image src={experience.img} alt={experience.company} />
          )}
          <Body>
            <Role>{experience.role}</Role>
            <Company>{experience.company}</Company>
            <Date>{experience.date}</Date>
          </Body>
        </Top>

        {experience.desc && <Description>{experience.desc}</Description>}

        {experience.skills && (
          <Skills>
            <SkillsTitle>Skills</SkillsTitle>
            <ItemWrapper>
              {experience.skills.map((skill, index) => (
                <Skill key={index}>
                  <Bullet>◈</Bullet>
                  {skill}
                </Skill>
              ))}
            </ItemWrapper>
          </Skills>
        )}
      </CardContainer>
    </CustomTimelineElement>
  );
};

export default ExperienceCard;
