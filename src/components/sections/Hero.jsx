import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Tilt } from "react-tilt";
import styled, { keyframes } from "styled-components";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import HeroImg from "../../images/HeroImage.png";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import HeroBgAnimation from "../HeroBgAnimation/index";

// ======== ANIMATIONS ========
const glitch = keyframes`
  0% {
    transform: translate(0);
    text-shadow: -2px 0 #0ff, 2px 2px #0ff;
  }
  25% {
    transform: translate(-2px, 0);
    text-shadow: 2px 0 #0ff, -2px -2px #0ff;
  }
  50% {
    transform: translate(2px, 0);
    text-shadow: -2px 0 #0ff, 2px 2px #0ff;
  }
  75% {
    transform: translate(0, 2px);
    text-shadow: 2px 0 #0ff, -2px -2px #0ff;
  }
  100% {
    transform: translate(0);
    text-shadow: -2px 0 #0ff, 2px 2px #0ff;
  }
`;

const flicker = keyframes`
  0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
    opacity: 0.99;
    text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff, 0 0 20px #0ff;
  }
  20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
    opacity: 0.4;
    text-shadow: none;
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

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(0, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 255, 255, 0);
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

const rotateGlow = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const breathe = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
`;

// ======== STYLED COMPONENTS ========
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 100px 30px 120px;
  z-index: 1;
  background: linear-gradient(
    135deg,
    rgba(10, 14, 35, 0.95) 0%,
    rgba(5, 15, 25, 0.97) 100%
  );
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #0ff, transparent);
    opacity: 0.5;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #0ff, transparent);
    opacity: 0.5;
  }

  @media (max-width: 960px) {
    padding: 80px 16px 100px;
  }

  @media (max-width: 640px) {
    padding: 60px 16px 80px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: -20px;
    width: 60px;
    height: 60px;
    border-top: 2px solid #0ff;
    border-left: 2px solid #0ff;
    opacity: 0.6;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    right: 40%;
    width: 60px;
    height: 60px;
    border-bottom: 2px solid #0ff;
    border-right: 2px solid #0ff;
    opacity: 0.6;
  }

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: flex-end;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    top: -10%;
    left: -10%;
    background: linear-gradient(90deg, #0ff, #00bfff, #0072ff, #001bff, #0ff);
    background-size: 400%;
    filter: blur(30px);
    opacity: 0.15;
    z-index: -1;
    animation: ${holographicShimmer} 15s linear infinite;
  }

  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 50px;
  }
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 50px;
  color: #fff;
  line-height: 68px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  position: relative;

  span {
    color: #0ff;
    position: relative;
    display: inline-block;

    &::after {
      content: attr(data-text);
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.8;
      filter: blur(1px);
      animation: ${flicker} 4s linear infinite;
      color: #0ff;
    }
  }

  @media (max-width: 960px) {
    text-align: center;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }

  @media (max-width: 640px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 68px;
  margin: 10px 0 20px;

  @media (max-width: 960px) {
    text-align: center;
    justify-content: center;
    font-size: 24px;
    line-height: 48px;
    margin-bottom: 16px;
  }

  @media (max-width: 640px) {
    font-size: 20px;
    line-height: 32px;
  }
`;

const Span = styled.div`
  color: #0ff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  font-weight: 700;
  letter-spacing: 1px;
  animation: ${floatAnimation} 4s ease-in-out infinite;
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: rgba(255, 255, 255, 0.8);
  position: relative;
  padding-left: 15px;
  border-left: 2px solid rgba(0, 255, 255, 0.5);
  max-width: 90%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: #0ff;
    opacity: 0.7;
    animation: ${pulse} 2s infinite;
  }

  @media (max-width: 960px) {
    text-align: center;
    padding-left: 0;
    border-left: none;

    &::before {
      display: none;
    }
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  position: relative;
  overflow: hidden;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: linear-gradient(45deg, #051937, #004d7a);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 50px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);

  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #0ff, #00bfff, #0072ff, #001bff, #0ff);
    background-size: 400%;
    border-radius: 50px;
    z-index: -1;
    animation: ${holographicShimmer} 10s linear infinite;
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
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: all 0.6s ease;
  }

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 255, 255, 0.4);
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.5);
    letter-spacing: 3px;

    &::after {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 16px;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;

  &::before {
    content: "";
    position: absolute;
    inset: -5px;
    background: conic-gradient(
      transparent 0deg,
      transparent 30deg,
      #0ff 60deg,
      #0ff 180deg,
      transparent 210deg,
      transparent 330deg,
      #0ff 360deg
    );
    border-radius: 50%;
    animation: ${rotateGlow} 4s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    inset: -15px;
    background: conic-gradient(
      transparent 0deg,
      transparent 30deg,
      rgba(0, 255, 255, 0.5) 60deg,
      rgba(0, 255, 255, 0.5) 180deg,
      transparent 210deg,
      transparent 330deg,
      rgba(0, 255, 255, 0.5) 360deg
    );
    border-radius: 50%;
    filter: blur(20px);
    opacity: 0.3;
    animation: ${rotateGlow} 4s linear infinite reverse;
  }

  @media (max-width: 640px) {
    width: 280px;
    height: 280px;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  z-index: 2;
  position: relative;
  border: 3px solid rgba(0, 255, 255, 0.7);
  padding: 5px;
  filter: contrast(1.1) saturate(1.1);
  animation: ${breathe} 4s ease-in-out infinite;

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at top right,
      rgba(0, 255, 255, 0.1),
      transparent 50%
    );
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 255, 255, 0.2),
      transparent
    );
    animation: ${scanline} 8s linear infinite;
    opacity: 0.3;
  }

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const Code = styled.div`
  position: absolute;
  font-family: "Courier New", monospace;
  font-size: 14px;
  color: rgba(0, 255, 255, 0.3);
  opacity: 0.15;
  z-index: 0;
  pointer-events: none;

  &.top-left {
    top: 20px;
    left: 20px;
    transform: rotate(-5deg);
  }

  &.bottom-right {
    bottom: 20px;
    right: 20px;
    transform: rotate(5deg);
  }
`;

const Hero = () => {
  useEffect(() => {
    const generateRandomCode = () => {
      const codeElements = document.querySelectorAll(".code-element");
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]<>";

      codeElements.forEach((el) => {
        let rows = [];
        for (let i = 0; i < 5; i++) {
          let row = "";
          for (let j = 0; j < 15; j++) {
            row += chars.charAt(Math.floor(Math.random() * chars.length));
          }
          rows.push(row);
        }
        el.innerHTML = rows.join("<br>");
      });
    };

    generateRandomCode();
    const interval = setInterval(generateRandomCode, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="About">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>

        <Code className="top-left code-element"></Code>
        <Code className="bottom-right code-element"></Code>

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> <span data-text={Bio.name}>{Bio.name}</span>
                </Title>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>

              <ResumeButton href={Bio.resume} target="_blank">
                View Resume
              </ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt options={{ max: 15, scale: 1.05, speed: 1000 }}>
                  <ImgContainer>
                    <Img src={HeroImg} alt={Bio.name} />
                  </ImgContainer>
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
