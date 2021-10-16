import React from 'react';
import styled from 'styled-components';

import ResumeFile from '../src/document/ASHALAKSHMIK.pdf';

const Header = ({refs}) => {
  const goToViolation=(ref)=>{
    window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop - 70 });
  };
  
    return <MainDiv>
      <UList>
        <List><div onClick={()=>goToViolation(refs.IntroRef)}>Home</div></List>
        <List><div onClick={()=>goToViolation(refs.skillRef)} id="row-id">Skills</div></List>
        <List><div onClick={()=>goToViolation(refs.ExperienceRef)} id="row-id-Exp">Experience</div></List>
       <List> <Anchor href={ResumeFile} rel="noopener noreferrer" target="_blank">Resume</Anchor> </List>
      </UList>
    </MainDiv>
}

export default Header;

const MainDiv = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const UList = styled.ul`
  list-style-type: none;
  background-color: white;
  display: flex;
  color: #30d0d1; 
  padding: 10px;
  height: 50px;
`;

const List = styled.li`
  padding-right: 5px;
  color: #30d0d1;
  font-size: 26px;
  cursor: pointer;
  padding-left: 10px;
  &:hover {
    color: #076c6c;
    font-size: 32px;
  }
`;

const Anchor = styled.a` 
  color: #30d0d1;
  text-decoration: none;
  &:hover {
    color: #076c6c;
    font-size: 32px;
  }
`;