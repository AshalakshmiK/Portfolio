import React, {useRef} from 'react';

import Header from './Header'
import Experience from './Experience';
import Intro from './Intro'
import Skills from './Skills'

const Home = () => {
  const skillRef = useRef(null);
  const IntroRef = useRef(null);
  const ExperienceRef = useRef(null);
  
return  <div>
  <Header refs={{skillRef, IntroRef, ExperienceRef}} /> 
  <Intro ref={IntroRef} />
  <Skills ref={skillRef} />
  <Experience ref={ExperienceRef} />
</div>

}

export default Home;