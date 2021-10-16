import React from 'react';
import styled from "styled-components";

const Experience = (props, ref) => {
  return <TopContainer ref={ref}>
  <MainContainer>
    <TextWrapper className="left">
     <Content>
        <h3>HCL Technologies</h3>
        <p>Feb 2020 - Present</p>
        <p>Lead Engineer</p>
      </Content>
    </TextWrapper> <Horizontal />
    <TextWrapper className="right">
      <Content>
        <h3>Accenture</h3>
        <p>July 2016 - Feb 2020</p>
        <p>Software Engineer</p>
      </Content>
    </TextWrapper><Horizontal />
    <TextWrapper className="left">
      <Content>
        <h3>Masters of Computer Application</h3>
        <p>2013 - Feb 2016</p>
        <p>SJCE, Mysore, Karnataka</p>
      </Content>
    </TextWrapper><Horizontal />
    <TextWrapper className="right">
      <Content>
        <h3>Bachelors of Computer Application</h3>
        <p>2010-2013</p>
        <p>Mangalore University, Karnataka</p>
      </Content>
    </TextWrapper><Horizontal />
  </MainContainer>
  </TopContainer>
}

export default React.forwardRef(Experience);

const TopContainer = styled.div` 
  display: flex;
  background-color: #f0f7ff;
  align-items: center;
  justify-content: center;
`;

const MainContainer = styled.div`
  position: relative;
  width: 70%;
  background-color: #f0f7ff;
  &::after{
    content: '';
    position: absolute;
    width: 3px;
    background-color: #30d0d1;
    top: 70px;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
`;

const TextWrapper = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 51%;
  box-sizing: border-box;
  margin: 50px 0;
  &::after{
    content: '';
    position: absolute;
    width: 30px;
    height: 25px;
    right: -5px;
    background-color:#30d0d1;
    top:15px;
    border-radius: 50%;
  }
  }
`;

const Content = styled.div`  
  padding: 15px 15px 15px 17px;
  background-color: white;
  border: 2px solid #30d0d1;
  border-radius: 6px;
  text-align: center;
`;

const Horizontal = styled.hr`
  border: 1px dashed #30d0d1;
`;