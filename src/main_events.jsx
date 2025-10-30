import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import NavBar from './components/NavBar.jsx'
import Ribbons from './components/TargetCursor.jsx'
import DotGrid from './components/Homepagebg.jsx';
import AnimatedText from './components/AnimatedText.jsx'




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
       <div style={{ 
        height: '100vh', 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        
      }}>
        
     
      <AnimatedText
          text="No events till date."
          delay={120}
          className='null_title'
          duration={2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
         </div>
      </div>
  )
}

createRoot(document.getElementById('root')).render(<RootApp />)
export default RootApp;