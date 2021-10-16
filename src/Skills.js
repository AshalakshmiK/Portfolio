import React from 'react';
import styled from 'styled-components';

const Skills = (props, ref) => {
  return <SkillDiv ref={ref}>
    <p>A passionate web developer with nearly 5.2 years of total experience and 3 years of experience in React JS</p>
    <h1>Technical Skills</h1>
    
    React <Progress id="file" value="80" max="100"> </Progress>
    Javascript <Progress id="file" value="80" max="100"> 32% </Progress>
    HTML <Progress id="file" value="70" max="100"> 32% </Progress>
    CSS <Progress id="file" value="70" max="100"> 32% </Progress>
  </SkillDiv>
}

export default React.forwardRef(Skills);

const SkillDiv = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Progress = styled.progress`
  background: #30d0d1;
  border-radius: 20px;
  &::-webkit-progress-value{ // for chrome browser
    background: #30d0d1;
    border-radius: 20px;
  }
  &::-moz-progress-bar {
    background: #30d0d1;
    border-radius: 20px;
  }
  &::-webkit-progress-bar {
    border-radius: 20px;
  }
  
`;