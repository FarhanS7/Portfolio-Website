import React, { memo } from "react";
import { Tilt } from "react-tilt";
import styled from "styled-components";
import { skills } from "../../data/constants";
import {
  borderFlicker,
  glowPulse,
  holographicShimmer,
  scanlineAnimation,
  textFlicker,
} from "../../styles/animations";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 50px 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='rgba(0,255,255,0.05)' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    z-index: -1;
    opacity: 0.3;
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
  gap: 20px;
  padding: 0 20px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary || "#f2f2f2"};
  position: relative;
  text-transform: uppercase;
  letter-spacing: 3px;
  animation: ${textFlicker} 4s linear infinite;

  &::after {
    content: "SKILLS";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    color: transparent;
    -webkit-text-stroke: 1px rgba(0, 255, 255, 0.3);
    transform: translateX(-3px) translateY(3px);
  }

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary || "#b1b2b3"};
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 30px;
  justify-content: center;
`;

// Define tilt options as a constant to prevent recreation on each render
const TILT_OPTIONS = {
  max: 10,
  scale: 1.03,
  speed: 500,
  transition: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: linear-gradient(
    135deg,
    rgba(10, 14, 35, 0.97) 0%,
    rgba(5, 15, 25, 0.98) 100%
  );
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 198, 255, 0.2);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.15);
  border-radius: 16px;
  padding: 25px 36px;
  position: relative;
  overflow: hidden;
  animation: ${glowPulse} 3s infinite alternate;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #0ff, transparent);
    animation: ${scanlineAnimation} 4s linear infinite;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 18px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 15px 25px;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 25px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary || "#b1b2b3"};
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding-bottom: 8px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 30%;
    width: 40%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #0ff, transparent);
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) =>
    theme.text_primary ? theme.text_primary + "D9" : "#f2f2f2D9"};
  border: 1px solid rgba(0, 198, 255, 0.3);
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  position: relative;
  background: rgba(0, 40, 70, 0.2);
  animation: ${borderFlicker} 4s infinite alternate;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
    background: linear-gradient(
      45deg,
      rgba(0, 40, 70, 0.4),
      rgba(0, 20, 50, 0.4)
    );
    background-size: 200% 200%;
    animation: ${holographicShimmer} 2s ease infinite;
    border-color: #0ff;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (max-width: 500px) {
    font-size: 13px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  filter: drop-shadow(0 0 2px rgba(0, 255, 255, 0.7));

  @media (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`;

// Memoized individual skill component to prevent unnecessary re-renders
const SkillCard = memo(({ skill }) => (
  <Tilt options={TILT_OPTIONS}>
    <Skill>
      <SkillTitle>{skill.title}</SkillTitle>
      <SkillList>
        {skill.skills.map((item, index) => (
          <SkillItem key={index}>
            {item.image && <SkillImage src={item.image} alt={item.name} />}
            {item.name}
          </SkillItem>
        ))}
      </SkillList>
    </Skill>
  </Tilt>
));

// Main component with memoization to prevent unnecessary re-renders
const Skills = memo(() => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on for the
          past 1 years.
        </Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
});

// Display name for debugging
Skills.displayName = "Skills";
SkillCard.displayName = "SkillCard";

export default Skills;
