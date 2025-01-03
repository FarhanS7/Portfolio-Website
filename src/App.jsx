import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import { theme } from "./utils/Themes";

const Body = styled.div`
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  overflow-x: hidden;
  position: relative;
  height: 90vh;
`;
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Body>
            <Hero />
            <Skills />
            <Experience />
          </Body>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
