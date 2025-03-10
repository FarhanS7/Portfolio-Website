import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import { Body, Wrapper } from "./styles/AppStyles"; // Move styled components to separate file
import { theme } from "./utils/Themes";

// Lazy load components that aren't needed for initial render
const Skills = lazy(() => import("./components/sections/Skills"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Education = lazy(() => import("./components/sections/Education"));
const Contact = lazy(() => import("./components/sections/Contact"));

// Loading fallback component
const LoadingFallback = () => <div className="section-loading">Loading...</div>;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Body>
          <Navbar />
          <Hero id="About" />
          <Wrapper>
            <Suspense fallback={<LoadingFallback />}>
              <Skills id="Skills" />
              <Experience id="Experience" />
              <Projects id="Projects" />
              <Education id="Education" />
              <Contact id="Contact" />
            </Suspense>
          </Wrapper>
          <Footer />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

// Use memo if App doesn't need frequent re-renders
export default React.memo(App);
