import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutSection from '../../components/pures/aboutSection/AboutSection.jsx';
import ContactSection from '../../components/pures/contactSection/ContactSection.jsx';
import ParallaxSection from '../../components/pures/parallaxSection/ParallaxSection';
import ProjectsSection from '../../components/pures/projectsSection/ProjectsSection';
import SkillsSection from '../../components/pures/skillsSection/SkillsSection';
import ThemeContext from '../../context/theme/ThemeContext.js';
import './home.css';

function Home()
{
  AOS.init();

  const { themeValue } = React.useContext(ThemeContext);

  return (
    <main role="main" className={`${themeValue ? 'main-lt' : 'main-dt'}`}>
      <ParallaxSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}

export default Home;
