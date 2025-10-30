import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import NavBar from './components/NavBar.jsx'
import AnimatedText from './components/AnimatedText.jsx'
import Ribbons from './components/TargetCursor.jsx'
import DotGrid from './components/Homepagebg.jsx';
import WhatWeDo from './components/whatwedo.jsx'
import RecentProjects from './components/recentprojects.jsx'
import ChallengeBanner from './components/currentchallenge.jsx'
import Footer from './components/footer.jsx'

import PixelTransition from "./components/switchingImg.jsx"; // adjust the import if needed

function RootApp() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-slide');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Ribbons
        baseThickness={25}
        colors={['#5227FF']}
        speedMultiplier={0.45}
        maxAge={500}
        enableFade={false}
        enableShaderEffect={false}
      />
      <NavBar className="navbar" />

      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#271E37"
        activeColor="#5920ff"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />

      <div className="title_text">
        <AnimatedText
          text="ALCC"
          className="Main_title"
          delay={120}
          duration={2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <AnimatedText
          text="A Levels Computer Science Club"
          className="mini_title"
          delay={100}
          duration={0.1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="100px"
          textAlign="center"
        />

        <a href="#intro" className="intro_button fade-slide delay-2" 
        style={{ alignSelf: 'center', marginTop: '1rem' }}
        >About Us</a>
      </div>

      <section id="intro" className="intro_section fade-slide">
        <div className="intro_image_wrapper fade-slide delay-1">
          <PixelTransition
            firstContent={
              <img
                className="logo_img"
                src="images/alcc.png"
                alt="Club logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <img
                className="logo_img"
                src="images/st.xavier.png"
                alt="Club logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            gridSize={10}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
        </div>

        <div className="intro_content">
          <h2 className="intro_heading fade-slide">Welcome to <span className="glow_text">ALCC</span></h2>
          <p className="intro_paragraph fade-slide delay-1">
            At <strong>St. Xavier’s A-Level Computer Club</strong>, we’re not just coders — we’re creators.  
            From AI to robotics, from cyber defense to web design, our members bring ideas to life through technology.  
            <br /><br />
            Join a community where curiosity meets collaboration — where every project pushes what’s possible.
          </p>
          <a href="projects.html" className="intro_button fade-slide delay-2">Explore Our Work</a>
        </div>
      </section>

      <section className="whatdo" style={{marginBottom:'15rem'}}>
            <WhatWeDo/>
      </section>
      <section>
      <h2 className="intro_heading fade-slide" style={{ textAlign: 'center' }}>Our recent <span className="glow_text">Projects</span></h2>
      </section>

      <RecentProjects/>
      <ChallengeBanner/>

      




      <Footer/>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<RootApp />)
export default RootApp;