import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// ======== ANIMATIONS ========
const glowPulse = keyframes`
  0% {
    box-shadow: 0 0 15px rgba(0, 198, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 25px rgba(0, 198, 255, 0.5);
  }
  100% {
    box-shadow: 0 0 15px rgba(0, 198, 255, 0.3);
  }
`;

const textGlow = keyframes`
  0% {
    text-shadow: 0 0 4px rgba(0, 198, 255, 0.5);
  }
  50% {
    text-shadow: 0 0 8px rgba(0, 198, 255, 0.8);
  }
  100% {
    text-shadow: 0 0 4px rgba(0, 198, 255, 0.5);
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

const buttonShine = keyframes`
  0% {
    background-position: -100px;
  }
  40%, 100% {
    background-position: 300px;
  }
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
const Card = styled.div`
  width: 330px;
  height: 490px;
  background: linear-gradient(
    135deg,
    rgba(10, 14, 35, 0.9) 0%,
    rgba(5, 15, 25, 0.95) 100%
  );
  cursor: pointer;
  border-radius: 12px;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 28px 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(0, 198, 255, 0.1);
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${({ index }) => `${0.1 + index * 0.1}s`};
  opacity: 0;

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
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      rgba(0, 198, 255, 0.03) 0%,
      transparent 5%,
      transparent 95%,
      rgba(0, 198, 255, 0.03) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 10px 30px rgba(0, 198, 255, 0.2);
    border: 1px solid rgba(0, 198, 255, 0.3);
    filter: brightness(1.1);

    &::before,
    &::after {
      opacity: 1;
    }

    ${({ theme }) => `
      background: linear-gradient(135deg, 
        rgba(10, 14, 35, 0.9) 0%, 
        rgba(5, 15, 25, 0.98) 100%
      );
    `}

    animation: ${glowPulse} 2s infinite;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 198, 255, 0.2);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(0, 198, 255, 0.5);
    opacity: 0;
    z-index: 2;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4) 0%,
      transparent 50%,
      rgba(0, 0, 0, 0.4) 100%
    );
    z-index: 1;
  }

  ${Card}:hover &::before {
    opacity: 1;
  }

  ${Card}:hover &::after {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      transparent 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 198, 255, 0.1) 0%,
    transparent 100%
  );
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 198, 255, 0.03) 3px,
      transparent 3px,
      transparent 4px
    );
  }

  ${Card}:hover & {
    opacity: 1;
  }
`;

const ScanEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 198, 255, 0.1),
    transparent
  );
  z-index: 3;
  opacity: 0;
  transform: translateY(-100%);

  ${Card}:hover & {
    animation: ${scanline} 2s linear infinite;
    opacity: 0.7;
  }
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #0ff;
  background-color: rgba(0, 198, 255, 0.1);
  padding: 3px 10px;
  border-radius: 20px;
  border: 1px solid rgba(0, 198, 255, 0.2);
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  ${Card}:hover & {
    background-color: rgba(0, 198, 255, 0.2);
    box-shadow: 0 0 10px rgba(0, 198, 255, 0.3);
    transform: translateY(-1px);
  }
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  letter-spacing: 0.5px;
  position: relative;
  transition: all 0.3s ease;

  ${Card}:hover & {
    color: #0ff;
    animation: ${textGlow} 2s infinite;
  }
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.5px;
  transition: all 0.3s ease;

  ${Card}:hover & {
    color: rgba(0, 198, 255, 0.7);
  }

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  overflow: hidden;
  margin-top: 10px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 1.5;
  transition: all 0.3s ease;

  ${Card}:hover & {
    color: rgba(255, 255, 255, 0.9);
  }
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-top: 5px;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(0, 198, 255, 0.3);
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #0ff, #0072ff);
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${Card}:hover & {
    border: 2px solid rgba(0, 198, 255, 0.7);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

    &::after {
      opacity: 0.5;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  gap: 10px;
`;

const Button = styled.a`
  color: #0ff;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid rgba(0, 198, 255, 0.3);
  background: rgba(0, 198, 255, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #0ff, #0072ff, #0ff);
    background-size: 400%;
    border-radius: 10px;
    z-index: -1;
    animation: ${holographicShimmer} 10s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::after {
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
    transition: all 0.6s ease;
  }

  &:hover {
    background-color: rgba(0, 198, 255, 0.15);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 198, 255, 0.3);
    color: #fff;
    letter-spacing: 1px;

    &::before {
      opacity: 0.5;
    }

    &::after {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const ProjectCard = ({ project, index = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card index={index}>
      <ImageContainer>
        <Image src={project.image} alt={project.title} />
        <ImageOverlay />
        <ScanEffect />
      </ImageContainer>
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      {project.member && (
        <Members>
          {project.member?.map((member, index) => (
            <Avatar key={index} src={member.img} alt={member.name} />
          ))}
        </Members>
      )}
      <ButtonGroup>
        <Button href={project.github} target="_blank">
          View Code
        </Button>
        {project.webapp && (
          <Button href={project.webapp} target="_blank">
            Live Demo
          </Button>
        )}
      </ButtonGroup>
    </Card>
  );
};

export default ProjectCard;
