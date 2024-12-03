import React from 'react';
import styled from 'styled-components';
import Scene from './Scene'; // Import the 3D Scene component

const Home = () => {
  return (
    <HomeContainer>
      {/* 3D Scene Background */}
      <SceneWrapper>
        <Scene />
      </SceneWrapper>

      {/* Overlay Content */}
      <Content>
        <h1>Welcome to JIM'S</h1>
        <p>Explore our collection of cocktails or create your own.</p>
        <ButtonContainer>
          <StyledButton href="/classics">Classic Cocktails</StyledButton>
          <StyledButton href="/ivy">Ivy Cocktails</StyledButton>
          <StyledButton href="/profile">Create Your Own</StyledButton>
        </ButtonContainer>
      </Content>
    </HomeContainer>
  );
};

// Styled Components
const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const SceneWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Behind content */
`;

const Content = styled.div`
  position: relative;
  z-index: 1; /* Above the 3D scene */
  color: black; /* Change text color to black */
  text-align: center;
  margin-top: 20vh;
`;


const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const StyledButton = styled.a`
  background-color: rgba(0, 0, 0, 0.1); /* Light black button background */
  color: black; /* Button text color */
  padding: 10px 20px;
  margin: 0 10px;
  text-decoration: none;
  border-radius: 4px;
  backdrop-filter: blur(5px);
  font-weight: bold;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2); /* Darker hover background */
  }
`;


export default Home;
