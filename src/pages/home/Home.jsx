import React from 'react';
import ParallaxSection from '../../components/pures/parallaxSection/ParallaxSection';
import AboutSection from '../../components/pures/aboutSection/AboutSection.jsx';
import ProjectsSection from '../../components/pures/projectsSection/ProjectsSection';
import ExperienceSection from '../../components/pures/experienceSection/ExperienceSection';
import SkillsSection from '../../components/pures/skillsSection/SkillsSection';

function Home()
{
  return (
    <>
      <ParallaxSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
    </>
  );
}

export default Home;
