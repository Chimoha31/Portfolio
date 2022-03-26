import React from "react";
import AnimationTitle from "./AnimationTitle";
import Introduce from './Introduce';
import BriefAboutMe from './BriefAboutMe';
import styled from 'styled-components';

function Home() {
  return (
    <Container>
      <AnimationTitle />
      <Introduce />
      <BriefAboutMe />
    </Container>
  );
}

const Container = styled.div`
width: 100%;
height: 100vh;
`

export default Home;
