import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { Bio } from "../data/constants";
const Nav = styled.div`
  background: ${({ theme }) => theme.bg};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;

  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

// Navbar Container
const NavbarContainer = styled.div`

  background: ${({ theme }) => theme.bg};
  width: 100%;

padding: 0 24px
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1 rem;
`;

// Logo
const NavLogo = styled(LinkR)`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

// Nav Menu
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

// NavLink
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

// Button Container
const ButtonContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

// GitHub Button
const GithubButton = styled.a`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.bg};
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.text_primary};
    color: ${({ theme }) => theme.primary};
  }
`;

// Mobile Menu Icon
const MobileIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Farhan</NavLogo>

        {/* Mobile Menu Icon */}
        {/* <MobileIcon>
          <MenuIcon></MenuIcon>
        </MobileIcon> */}

        <NavMenu>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </NavMenu>

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">
            GitHub Profile
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
