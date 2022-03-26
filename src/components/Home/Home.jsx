import React from "react";
import AnimationTitle from "./AnimationTitle";
import chiho from "../../images/chiho.JPG";
import './Home.css';
import styled from 'styled-components';

function Home() {
  return (
    <Container>
      <AnimationTitle />
      <div className="introduce_container">
        <div className="introduce">
          <h2>Hi, I am</h2>
          <h1>Chiho Maekawa</h1>
          <p>Front-End-Developer</p>
        </div>
        <div className="image">
          <img src={chiho} alt="Chiho" />
        </div>
      </div>

      <div>
        <h1>About me</h1>
      </div>
    </Container>
  );
}

const Container = styled.div`
width: 100%;
height: 100vh;
`

export default Home;
