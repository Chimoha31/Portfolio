import React from 'react';
import styled from 'styled-components';
import './BriefAboutMe.css';
import {Link} from 'react-router-dom';

function BriefAboutMe() {
  return (
    <Container>
      <div className="container">
      <h1>About Me</h1>
      <div className="border"></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus totam inventore libero ducimus quasi corrupti tempore dolore assumenda fugit iure. Pariatur harum fugiat laborum quidem, voluptates assumenda amet libero facilis!</p>
      <Link to="/aboutme" className="aboutme_btn">Detail</Link>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: auto;
`
export default BriefAboutMe
