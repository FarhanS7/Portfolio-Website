import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";

// ======== ANIMATIONS ========
const glitchText = keyframes`
  0% {
    text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.05em 0 #fc00ff;
  }
  25% {
    text-shadow: -0.05em -0.05em 0 #00fffc, 0.05em 0.05em 0 #fc00ff;
  }
  50% {
    text-shadow: 0.05em 0.05em 0 #00fffc, -0.05em 0 0 #fc00ff;
  }
  75% {
    text-shadow: -0.05em 0 0 #00fffc, -0.05em -0.05em 0 #fc00ff;
  }
  100% {
    text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.05em 0 #fc00ff;
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
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

const reveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
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

// ======== STYLED COMPONENTS ========
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 70px;
  padding: 20px 16px 80px;
  position: relative;
  z-index: 1;
  align-items: center;

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
      rgba(0, 198, 255, 0.3),
      transparent
    );
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 50% 0%,
      rgba(0, 198, 255, 0.1),
      transparent 70%
    );
    pointer-events: none;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 16px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  animation: ${floatAnimation} 4s ease-in-out infinite;

  &::before {
    content: "PROJECTS";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    color: #0ff;
    filter: blur(4px);
    opacity: 0.7;
    z-index: -1;
  }

  &:hover {
    animation: ${glitchText} 0.4s infinite;
  }

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin-bottom: 40px;
  position: relative;
  animation: ${reveal} 0.5s ease-out;

  &::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 2px;
    background: #0ff;
    bottom: -15px;
    left: calc(50% - 20px);
    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1px solid rgba(0, 255, 255, 0.4);
  color: #0ff;
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 35px 0;
  background: rgba(0, 30, 60, 0.5);
  box-shadow: 0 0 20px rgba(0, 198, 255, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #0ff, #00bfff, #0072ff, #001bff, #0ff);
    background-size: 400%;
    border-radius: 14px;
    z-index: -1;
    animation: ${holographicShimmer} 10s linear infinite;
    opacity: 0.5;
  }

  &::after {
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

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: rgba(0, 255, 255, 0.15);
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.8);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    border-radius: 4px;
  }

  ${({ active }) =>
    active &&
    css`
      background: rgba(0, 255, 255, 0.15);
      text-shadow: 0 0 8px #0ff;
      font-weight: 600;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 10%;
        width: 80%;
        height: 2px;
        background: linear-gradient(
          to right,
          transparent,
          #0ff,
          #0ff,
          transparent
        );
        animation: ${shimmer} 2s infinite;
        background-size: 200% 100%;
      }
    `};
`;

const Divider = styled.div`
  width: 1px;
  background: rgba(0, 255, 255, 0.3);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 30%;
    left: 0;
    width: 100%;
    height: 40%;
    background: #0ff;
    box-shadow: 0 0 8px #0ff;
    opacity: 0.7;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 35px;
  flex-wrap: wrap;
  margin-top: 20px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 198, 255, 0.2),
      transparent
    );
  }
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    // Add glitch effect randomly to title
    const glitchInterval = setInterval(() => {
      const title = document.getElementById("projects-title");
      if (title) {
        title.style.animation = `${glitchText} 0.4s`;
        setTimeout(() => {
          title.style.animation = `${floatAnimation} 4s ease-in-out infinite`;
        }, 500);
      }
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <Container id="Projects">
      <Wrapper>
        <Title id="projects-title">Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to back-end
          systems. Here are some of my notable works.
        </Desc>

        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            All
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "web app"}
            onClick={() => setToggle("web app")}
          >
            Front Ends
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "Backend"}
            onClick={() => setToggle("Backend")}
          >
            Back Ends
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "Web Design"}
            onClick={() => setToggle("Web Design")}
          >
            Web Designs
          </ToggleButton>
        </ToggleButtonGroup>

        <CardContainer>
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard
                key={project.id || index}
                project={project}
                index={index}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard
                key={project.id || index}
                project={project}
                index={index}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
