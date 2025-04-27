import React, { useEffect, useRef, useState } from 'react';
import '../style/App.css';
import '../style/components/ContentMain.css';
import { PropTypeContentMain } from '../type/PropTypeContentMain';
import About from './ContentMain/About';
import Projects from './ContentMain/Projects';
import { PropTypeContentMainProjects } from '../type/PropTypeContentMainProjects';
import Skills from './ContentMain/Skills';
import { PropTypeContentMainSkills } from '../type/PropTypeContentMainSkills';
import Contact from './ContentMain/Contact';
import { PropTypeContentMainContact } from '../type/PropTypeContentMainContact';
import { PropTypeContentMainAbout } from '../type/PropTypeContentMainAbout';

const ContentMain = (props: PropTypeContentMain) => {
  const { setVisibleMobileHeaderMenu, setHeaderMenuRefs } = props;

  const mainContentRef = useRef<HTMLDivElement | null>(null);

  const [reachAboutPage, setReachAboutPage] = useState<boolean>(false);
  const [visiblePrjBorders, setVisiblePrjBorders] = useState<boolean>(false);
  // Activate or stop the animation of visibility when scrolled to the Skills page
  const [reachSkillsPage, setReachSkillsPage] = useState<boolean>(false);
  // Activate or stop the animation of visibility when scrolled to the Contact page
  const [reachContactPage, setReachContactPage] = useState<boolean>(false);

  /** each section */
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  /** each section end */

  /** props */
  const propAbout: PropTypeContentMainAbout= {
    reachAboutPage: reachAboutPage,
  }
  const propProjects: PropTypeContentMainProjects = {
    visiblePrjBorders: visiblePrjBorders,
  }
  const propSkills: PropTypeContentMainSkills = {
    reachSkillsPage: reachSkillsPage,
  }
  const propContact: PropTypeContentMainContact = {
    reachContactPage: reachContactPage,
  }
  /** props end */

  useEffect(() => {
    // Observe main content element 
    // to show/hide header menu/mobile header menu. 
    console.log('mainContentRef', mainContentRef.current);
    const mainContentObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];  // need the 1st elm only
      setVisibleMobileHeaderMenu(entry.isIntersecting);
    })
    if (mainContentRef.current !== null) {
      mainContentObserver.observe(mainContentRef.current);
    }

    /* Observe About in main content element */
    // to show borders of projects.
    const mainContentAboutObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];  // need the 1st elm only
      setReachAboutPage(entry.isIntersecting);
    })
    if (aboutRef.current !== null) {
      mainContentAboutObserver.observe(aboutRef.current);
    }
    /* Observe About in main content element end */

    /* Observe Projects in main content element */
    // to show borders of projects.
    const mainContentProjectsObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];  // need the 1st elm only
      setVisiblePrjBorders(entry.isIntersecting);
    })
    if (projectsRef.current !== null) {
      mainContentProjectsObserver.observe(projectsRef.current);
    }
    /* Observe Projects in main content element end */

    /* Observe Skills in main content element */
    // to show borders of projects.
    const mainContentSkillsObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];  // need the 1st elm only
      setReachSkillsPage(entry.isIntersecting);
    })
    if (skillsRef.current !== null) {
      mainContentSkillsObserver.observe(skillsRef.current);
    }
    /* Observe Skills in main content element end */

    /* Observe Contact in main content element */
    // to show borders of projects.
    const mainContentContactObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];  // need the 1st elm only
      setReachContactPage(entry.isIntersecting);
    })
    if (contactRef.current !== null) {
      mainContentContactObserver.observe(contactRef.current);
    }
    /* Observe Contact in main content element end */

    // get elms from each section
    const headerMenuRefs = [aboutRef, projectsRef, skillsRef, contactRef];
    setHeaderMenuRefs(headerMenuRefs);
    
  }, []);
  
  return (
    <main>
      <div ref={mainContentRef}>
        <section className="about wrapper" id="about" ref={aboutRef}>
          <About {...propAbout} />
        </section>
        <section className="projects wrapper" id="projects" ref={projectsRef}>
          <Projects {...propProjects} />
        </section>
        <section className="skills wrapper" id="skills" ref={skillsRef}>
          <Skills {...propSkills} />
        </section>
        <section className="contact wrapper" id="contact" ref={contactRef}>
          <Contact {...propContact} />
        </section>
      </div>
    </main>
  );
}

export default ContentMain;
