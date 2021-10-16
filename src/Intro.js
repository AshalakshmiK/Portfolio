import React from 'react';
import styled from 'styled-components';

const Intro = (props, ref) => {
  return <IntroDiv ref={ref}>
      <Icon className="fa fa-desktop"></Icon>
      <h1>Hi, This is Ashalakshmi K</h1>
      <h2>Front End Developer</h2>
      <h2>HCL Technologies, Bangalore</h2>
  </IntroDiv>
}

export default React.forwardRef(Intro);

const Icon = styled.i`
  font-size: 280px;
`;

const IntroDiv = styled.div`
  height: 100vh;
  color: #30d0d1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f0f7ff;
}
`;
