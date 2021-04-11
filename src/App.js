import React, {useEffect} from 'react'
import Hero from './comoponents/Hero'
import Aboutme from './comoponents/Aboutme'
import Portofolio from './comoponents/Portofolio'
import Education from './comoponents/Education'
import Contact from './comoponents/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(()=>{
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <div>
      <Hero />
      <Aboutme />
      <Portofolio />
      <Education />
      <Contact/>
    </div>
  )
}

export default App



