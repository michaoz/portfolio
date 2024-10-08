import React, { useEffect, useRef, useState } from 'react';
import '../style/App.css';
import '../style/components/ContentMain.css';
import { PropTypeContentMain } from '../type/PropTypeContentMain';

const ContentMain = (props: PropTypeContentMain) => {
  const { setVisibleMobileHeaderMenu } = props;

  const mainContentRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    console.log('mainContentRef', mainContentRef.current);
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];  // need the 1st elm only
      setVisibleMobileHeaderMenu(entry.isIntersecting);
    })
    if (mainContentRef.current !== null) {
      observer.observe(mainContentRef.current);
    }
  }, []);
  
  return (
    <main>
      <div ref={mainContentRef}>
        <section className="about wrapper">
          <h1>About Me</h1>
        </section>
        <section className="projects wrapper">
          <h1>Projects</h1>
        </section>
        <section className="skills wrapper">
          <h1>Skills</h1>
        </section>
        <section className="contact wrapper">
          <h1>Contact</h1>
        </section>
      </div>
    </main>
  );
}

export default ContentMain;
