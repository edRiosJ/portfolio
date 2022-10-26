import React from 'react';
import AboutSection from '../../components/pures/aboutSection/AboutSection.jsx';
import CertificationsSection from '../../components/pures/certificationsSection/CertificationsSection';
import ContactSection from '../../components/pures/contactSection/ContactSection.jsx';
import ExperienceSection from '../../components/pures/experienceSection/ExperienceSection';
import Footer from '../../components/containers/footer/Footer.jsx';
import ParallaxSection from '../../components/pures/parallaxSection/ParallaxSection';
import ProjectsSection from '../../components/pures/projectsSection/ProjectsSection';
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
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
