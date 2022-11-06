import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutSection from '../../components/pures/aboutSection/AboutSection.jsx';
import CertificationsSection from '../../components/pures/certificationsSection/CertificationsSection';
import ContactSection from '../../components/pures/contactSection/ContactSection.jsx';
import ExperienceSection from '../../components/pures/experienceSection/ExperienceSection';
import ParallaxSection from '../../components/pures/parallaxSection/ParallaxSection';
import ProjectsSection from '../../components/pures/projectsSection/ProjectsSection';
import SkillsSection from '../../components/pures/skillsSection/SkillsSection';
import './home.css';

function Home()
{
  AOS.init();

  return (
    <main role="main">
      <ParallaxSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
}

export default Home;
