import { Close, GitHub, MenuRounded } from "@mui/icons-material";
import React, { memo, useCallback, useEffect, useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { css } from "styled-components";
import { Bio } from "../data/constants";

// Move animations to a separate file for better organization
import {
  cyberpunkScan,
  flicker,
  floatAnimation,
  holographicShimmer,
  menuItemReveal,
  mobileMenuEntry,
  neonBorder,
  pulse,
  scanline,
  slideInFromTop,
} from "../styles/animations";

// ======== STYLED COMPONENTS ========
const Nav = styled.div`
  background: linear-gradient(
    135deg,
    rgba(10, 14, 35, 0.97) 0%,
    rgba(5, 15, 25, 0.98) 100%
  );
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 198, 255, 0.2);
  box-shadow: 0 5px 30px rgba(0, 198, 255, 0.15);
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 1000;
  animation: ${slideInFromTop} 0.7s cubic-bezier(0.19, 1, 0.22, 1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #0ff, transparent);
    animation: ${scanline} 4s linear infinite;
    opacity: 0.5;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
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

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 30px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const NavLogo = styled(LinkR)`
  font-size: 2.2rem;
  font-weight: 800;
  color: #fff;
  text-decoration: none;
  letter-spacing: 2px;
  position: relative;
  padding: 0 8px;
  text-transform: uppercase;
  animation: ${floatAnimation} 4s ease-in-out infinite;
  transition: all 0.3s ease;

  &::before {
    content: "FARHAN";
    position: absolute;
    left: 8px;
    top: 0;
    color: #0ff;
    width: 100%;
    height: 100%;
    opacity: 0;
    filter: blur(1px);
    animation: ${flicker} 4s linear infinite;
  }

  &:hover {
    animation: none; /* Stop float animation on hover */
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
    transform: translateY(-2px);
  }

  /* Add a new effect that doesn't use the glitch animation */
  &:hover::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #0ff, transparent);
    opacity: 0.8;
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  text-decoration: none;
  position: relative;
  padding: 5px 0;
  font-size: 16px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  text-transform: uppercase;

  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #0ff, transparent);
    transition: width 0.3s ease-in-out;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: -15px;
    background: #0ff;
    border-radius: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease;
    opacity: 0;
  }

  &:hover {
    color: #fff;
    letter-spacing: 1.5px;
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.5);
    transform: translateY(-2px);

    &::before {
      width: 100%;
    }

    &::after {
      opacity: 1;
      width: 6px;
      height: 6px;
      box-shadow: 0 0 10px 2px #0ff;
    }
  }
`;

const ActiveNavLink = styled(NavLink)`
  color: #0ff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);

  &::before {
    width: 80%;
    left: 10%;
    height: 2px;
    background: linear-gradient(to right, transparent, #0ff, #0ff, transparent);
    animation: ${neonBorder} 3s linear infinite;
    background-size: 200% 200%;
  }

  &::after {
    opacity: 1;
    width: 6px;
    height: 6px;
    box-shadow: 0 0 10px 2px #0ff;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  padding: 0 6px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  background: linear-gradient(45deg, #051937, #004d7a);
  color: white;
  border: none;
  padding: 10px 24px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  border: 1px solid rgba(0, 255, 255, 0.3);

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #0ff, #00bfff, #0072ff, #001bff, #0ff);
    background-size: 400%;
    border-radius: 32px;
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
    color: #fff;
    letter-spacing: 0.5px;

    &::after {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const GitHubIcon = styled(GitHub)`
  animation: ${pulse} 2s infinite;
`;

const MobileIcon = styled.div`
  height: 100%;
  display: none;
  align-items: center;
  color: #0ff;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    font-size: 30px;
    transition: all 0.3s ease;
    filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.5));
  }

  &:hover svg {
    transform: rotate(90deg);
    filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.8));
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 80px 40px 40px;
  background: linear-gradient(
    135deg,
    rgba(5, 15, 35, 0.97) 0%,
    rgba(2, 8, 20, 0.98) 100%
  );
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
  animation: ${({ isOpen }) =>
    isOpen
      ? css`
          ${mobileMenuEntry} 0.5s forwards
        `
      : "none"};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='rgba(0,255,255,0.05)' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.3;
  }
`;

const MobileMenuItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 40px;
  width: 100%;
`;

const MobileMenuLink = styled.a`
  font-size: 28px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  transition: all 0.3s ease;
  padding: 5px 15px;
  animation: ${menuItemReveal} 0.5s forwards;
  animation-delay: ${({ index }) => `${0.1 + index * 0.1}s`};
  opacity: 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    background: #0ff;
    transition: all 0.3s ease;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    bottom: 0;
    right: 0;
  }

  &:hover {
    color: #0ff;
    transform: scale(1.1);
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    letter-spacing: 3px;

    &::before,
    &::after {
      width: 100%;
    }
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  color: #0ff;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;

  svg {
    font-size: 32px;
    filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.5));
  }

  &:hover {
    transform: rotate(90deg);
    filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.8));
  }
`;

const MobileGithubButton = styled(GithubButton)`
  margin-top: 40px;
  padding: 14px 32px;
  font-size: 18px;
  animation: ${menuItemReveal} 0.5s forwards;
  animation-delay: 0.6s;
  opacity: 0;

  &:hover {
    transform: translateY(-3px) scale(1.05);
  }
`;

const ProgressBarContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba(0, 255, 255, 0.1);
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 255, 255, 0.2),
      rgba(0, 255, 255, 0.4),
      rgba(0, 255, 255, 0.2),
      transparent
    );
    animation: ${cyberpunkScan} 2s linear infinite;
  }
`;

const ProgressBar = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #00bcd4, #00ffff, #007bff);
  width: ${({ scrollPercent }) => scrollPercent}%;
  transition: width 0.1s ease;
  position: relative;
  z-index: 1;
`;

// Memoize NavItems to prevent re-renders when scrolling
const MemoizedNavItems = memo(({ activeSection }) => (
  <NavItems>
    {["About", "Skills", "Experience", "Projects", "Education"].map((item) =>
      activeSection === item ? (
        <ActiveNavLink key={item} href={`#${item}`}>
          {item}
        </ActiveNavLink>
      ) : (
        <NavLink key={item} href={`#${item}`}>
          {item}
        </NavLink>
      )
    )}
  </NavItems>
));

// Memoize MobileMenuItems to prevent re-renders
const MemoizedMobileMenuItems = memo(({ setIsOpen }) => (
  <MobileMenuItems>
    {["About", "Skills", "Experience", "Projects", "Education"].map(
      (item, index) => (
        <MobileMenuLink
          key={item}
          onClick={() => setIsOpen(false)}
          href={`#${item}`}
          index={index}
        >
          {item}
        </MobileMenuLink>
      )
    )}
  </MobileMenuItems>
));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("About");

  // Handle scroll position and active section with throttling
  const handleScroll = useCallback(() => {
    // Using requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      const position = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (position / height) * 100;
      setScrollPosition(scrollPercent);

      // Determine active section based on scroll position
      const sections = [
        "About",
        "Skills",
        "Experience",
        "Projects",
        "Education",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    });
  }, [activeSection]);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    // Use passive: true for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">FARHAN</NavLogo>

        <MobileIcon onClick={toggleMobileMenu}>
          <MenuRounded />
        </MobileIcon>

        <MemoizedNavItems activeSection={activeSection} />

        <ButtonContainer>
          <GithubButton
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon /> GitHub
          </GithubButton>
        </ButtonContainer>

        <ProgressBarContainer>
          <ProgressBar scrollPercent={scrollPosition} />
        </ProgressBarContainer>
      </NavbarContainer>

      {isOpen && (
        <MobileMenu isOpen={isOpen}>
          <CloseButton onClick={toggleMobileMenu}>
            <Close />
          </CloseButton>

          <MemoizedMobileMenuItems setIsOpen={setIsOpen} />

          <MobileGithubButton
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon /> GitHub Profile
          </MobileGithubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default memo(Navbar);
