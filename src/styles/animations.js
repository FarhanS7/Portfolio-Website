import { keyframes } from "styled-components";

// Animation keyframes
export const glitch = keyframes`
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

export const scanline = keyframes`
  0% {
    transform: translateY(-100%);
  }
  50%, 100% {
    transform: translateY(100%);
  }
`;

export const flicker = keyframes`
  0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
    opacity: 0.99;
    text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff, 0 0 20px #0ff;
  }
  20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
    opacity: 0.4;
    text-shadow: none;
  }
`;

export const shine = keyframes`
  0% {
    background-position: -100px;
  }
  40%, 100% {
    background-position: 300px;
  }
`;

export const slideInFromTop = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const pulse = keyframes`
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

export const holographicShimmer = keyframes`
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

export const floatAnimation = keyframes`
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

export const neonBorder = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

export const mobileMenuEntry = keyframes`
  from {
    clip-path: circle(0% at 95% 5%);
    opacity: 0;
  }
  to {
    clip-path: circle(150% at 95% 5%);
    opacity: 1;
  }
`;

export const menuItemReveal = keyframes`
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const logoGlitch = keyframes`
  0% {
    text-shadow: 0.03em 0 0 rgba(0, 255, 252, 0.6), -0.03em -0.03em 0 rgba(252, 0, 255, 0.6);
  }
  25% {
    text-shadow: -0.03em -0.02em 0 rgba(0, 255, 252, 0.6), 0.03em 0.02em 0 rgba(252, 0, 255, 0.6);
  }
  50% {
    text-shadow: 0.03em 0.02em 0 rgba(0, 255, 252, 0.6), -0.03em 0 0 rgba(252, 0, 255, 0.6);
  }
  75% {
    text-shadow: -0.02em 0 0 rgba(0, 255, 252, 0.6), -0.02em -0.02em 0 rgba(252, 0, 255, 0.6);
  }
  100% {
    text-shadow: 0.02em 0 0 rgba(0, 255, 252, 0.6), -0.02em -0.02em 0 rgba(252, 0, 255, 0.6);
  }
`;

export const cyberpunkScan = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100vh);
  }
`;

// Glow effect animations
export const glowPulse = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.4);
  }
  100% {
    box-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
  }
`;

// CRT and scanline effects
export const scanlineAnimation = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

// Border animations
export const borderFlicker = keyframes`
  0%, 100% { 
    border-color: rgba(0, 255, 255, 0.5); 
  }
  50% { 
    border-color: rgba(0, 153, 255, 0.8); 
  }
`;

// Text effects
export const textFlicker = keyframes`
  0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
    opacity: 1;
    text-shadow: 0 0 4px #fff, 0 0 11px #0ff, 0 0 19px #0ff;
  }
  20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
    opacity: 0.8;
    text-shadow: none;
  }
`;

// // Gradient animations
// export const holographicShimmer = keyframes`
//   0% {
//     background-position: 0% 50%;
//   }
//   50% {
//     background-position: 100% 50%;
//   }
//   100% {
//     background-position: 0% 50%;
//   }
// `;

// Rotation and movement
export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const float = keyframes`
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

// Loading and progress animations
export const progress = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

// export const pulse = keyframes`
//   0%, 100% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.05);
//   }
// `;

// Fade animations
export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// Transition animations
export const slideInLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideInRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideInTop = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slideInBottom = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
