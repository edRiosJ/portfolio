import React from 'react';
import ParallaxSection from '../../components/pures/parallaxSection/ParallaxSection';
import AboutSection from '../../components/pures/aboutSection/AboutSection.jsx';
import ProjectsSection from '../../components/pures/projectsSection/ProjectsSection';
import ExperienceSection from '../../components/pures/experienceSection/ExperienceSection';

function Home()
{
  return (
    <>
      <ParallaxSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
    </>
  );
}

export default Home;
