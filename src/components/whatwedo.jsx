import React, { useState, useRef } from 'react';
import { Code, Users, Trophy, BookOpen } from 'lucide-react';

const DraggableCard = ({ card, position, rotation, onMouseDown, onMouseEnter, onMouseLeave, isHovered, isMobile, isResetting }) => {
  return (
    <div
      onMouseDown={(e) => onMouseDown(e, card.id)}
      onMouseEnter={() => onMouseEnter(card.id)}
      onMouseLeave={() => onMouseLeave()}
      className="select-none"
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isMobile ? 'calc(100% - 40px)' : '320px',
        maxWidth: '320px',
        padding: '2rem',
        background: isHovered ? 'rgba(30, 41, 59, 0.95)' : 'rgba(30, 41, 59, 0.85)',
        backdropFilter: 'blur(12px)',
        border: `2px solid ${isHovered ? '#5920ff' : 'rgba(89, 32, 255, 0.3)'}`,
        borderRadius: '1rem',
        transform: `rotate(${rotation}deg) ${isHovered ? 'scale(1.05)' : 'scale(1)'}`,
        transition: isResetting 
          ? 'left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.2s ease, background 0.2s ease, border 0.2s ease, box-shadow 0.2s ease'
          : 'transform 0.2s ease, background 0.2s ease, border 0.2s ease, box-shadow 0.2s ease',
        cursor: 'grab',
        zIndex: isHovered ? 1000 : 10,
        boxShadow: isHovered 
          ? '0 20px 60px rgba(89, 32, 255, 0.4), 0 0 40px rgba(89, 32, 255, 0.3)' 
          : '0 10px 30px rgba(89, 32, 255, 0.2)',
        pointerEvents: 'auto',
        willChange: 'transform',
      }}
      onMouseDownCapture={(e) => {
        e.target.style.cursor = 'grabbing';
      }}
      onMouseUpCapture={(e) => {
        e.target.style.cursor = 'grab';
      }}
    >
      <div 
        style={{
          marginBottom: '1rem',
          color: '#5920ff',
          transform: isHovered ? 'scale(1.1) rotate(6deg)' : 'scale(1)',
          transition: 'all 0.3s ease',
        }}
      >
        {card.icon}
      </div>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: '0.75rem',
      }}>
        {card.title}
      </h3>
      <p style={{
        fontSize: '0.875rem',
        lineHeight: '1.6',
        color: 'rgba(203, 213, 225, 0.9)',
      }}>
        {card.description}
      </p>
      
      {/* Decorative corner accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '4rem',
        height: '4rem',
        background: 'rgba(89, 32, 255, 0.1)',
        borderBottomLeftRadius: '9999px',
        transform: isHovered ? 'scale(1.5)' : 'scale(1)',
        opacity: isHovered ? 1 : 0,
        transition: 'all 0.3s ease',
      }}></div>
    </div>
  );
};

export default function WhatWeDo() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [cards] = useState([
    {
      id: 1,
      icon: <Code size={32} />,
      title: 'Hands-on Workshops',
      description: 'Learn the latest programming languages, frameworks, and tools in sessions led by peers and mentors.'
    },
    {
      id: 2,
      icon: <Users size={32} />,
      title: 'Collaborative Projects',
      description: 'Build real-world applications and contribute to exciting team-based projects from concept to deployment.'
    },
    {
      id: 3,
      icon: <Trophy size={32} />,
      title: 'Tech Competitions',
      description: 'Sharpen your skills by participating in hackathons, coding challenges, and other competitive events.'
    },
    {
      id: 4,
      icon: <BookOpen size={32} />,
      title: 'Research Forums',
      description: 'Explore cutting-edge topics in computer science and present your findings in collaborative research discussions.'
    }
  ]);

  // Function to get initial positions based on screen size
  const getInitialPositions = () => {
    if (window.innerWidth <= 768) {
      return {
        1: { x: 90, y: 20 },
        2: { x: 30, y: 320 },
        3: { x: 100, y: 600 },
        4: { x: 30, y: 850 }
      };
    }
    return {
      1: { x: 100, y: 150 },
      2: { x: 500, y: 80 },
      3: { x: 250, y: 400 },
      4: { x: 650, y: 350 }
    };
  };

  // Random initial positions and rotations
  const [positions, setPositions] = useState(getInitialPositions());

  const [rotations] = useState({
    1: -5,
    2: 3,
    3: -2,
    4: 4
  });

  // Handle window resize
  React.useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setPositions({
          1: { x: 90, y: 20 },
          2: { x: 30, y: 320 },
          3: { x: 100, y: 600 },
          4: { x: 30, y: 850 }
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [hoveredCard, setHoveredCard] = useState(null);
  const [draggingId, setDraggingId] = useState(null);
  const [isResetting, setIsResetting] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseDown = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setDraggingId(id);
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
   
    
    // Calculate offset from top-left of card
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMouseMove = (e) => {
    if (draggingId === null) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    
    // Calculate new position relative to container
    const newX = e.clientX - containerRect.left - dragOffset.current.x;
    const newY = e.clientY - containerRect.top - dragOffset.current.y;
    
    // Get card dimensions
    const cardWidth = isMobile ? Math.min(320, containerRect.width - 40) : 320;
    const cardHeight = 280; // approximate card height
    
    // Constrain within container bounds
    const minX = 0;
    const minY = 0;
    const maxX = containerRect.width - cardWidth;
    const maxY = containerRect.height - cardHeight;
    
    const constrainedX = Math.max(minX, Math.min(newX, maxX));
    const constrainedY = Math.max(minY, Math.min(newY, maxY));
    
    setPositions(prev => ({
      ...prev,
      [draggingId]: { x: constrainedX, y: constrainedY }
    }));
  };

  const handleMouseUp = () => {
    setDraggingId(null);
  };

  const handleMouseEnter = (id) => {
    if (draggingId === null) {
      setHoveredCard(id);
    }
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const resetPositions = () => {
    setIsResetting(true);
    if (isMobile) {
      setPositions({
        1: { x: 90, y: 20 },
        2: { x: 30, y: 320 },
        3: { x: 100, y: 600 },
        4: { x: 30, y: 850 }
      });
    } else {
      setPositions({
        1: { x: 100, y: 150 },
        2: { x: 500, y: 80 },
        3: { x: 250, y: 400 },
        4: { x: 650, y: 350 }
      });
    }
    // Reset the flag after animation completes
    setTimeout(() => setIsResetting(false), 600);
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '3rem 2rem',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '1rem',
            textShadow: '0 0 20px rgba(89, 32, 255, 0.3)',
          }}>
            What We Do
          </h2>
          <p style={{
            color: 'rgba(203, 213, 225, 0.9)',
            fontSize: '1.125rem',
            maxWidth: '800px',
            margin: '0 auto 1rem',
          }}>
            We offer a variety of activities designed to build skills, foster teamwork, and challenge our members.
          </p>
          <p style={{
            color: '#5920ff',
            fontSize: '0.875rem',
            fontStyle: 'italic',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
          }}>
            <span style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>✨</span>
            Drag the cards around to explore!
          </p>
        </div>

        <div 
          ref={containerRef}
          style={{
            position: 'relative',
            background: 'rgba(15, 23, 42, 0.6)',
            borderRadius: '1.5rem',
            border: '2px solid rgba(89, 32, 255, 0.3)',
            height: isMobile ? '1200px' : '700px',
            overflow: 'hidden',
            pointerEvents: 'auto',
          }}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Background pattern */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.05,
            pointerEvents: 'none',
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}></div>
          </div>

          {cards.map((card) => (
            <DraggableCard
              key={card.id}
              card={card}
              position={positions[card.id]}
              rotation={rotations[card.id]}
              onMouseDown={handleMouseDown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              isHovered={hoveredCard === card.id}
              isMobile={isMobile}
              isResetting={isResetting}
            />
          ))}
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <button
            onClick={resetPositions}
            style={{
              padding: '0.875rem 2rem',
              background: '#5920ff',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 20px rgba(89, 32, 255, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 8px 30px rgba(89, 32, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 4px 20px rgba(89, 32, 255, 0.3)';
            }}
          >
            Reset Positions
          </button>
        </div>
      </div>
    </div>
  );
}