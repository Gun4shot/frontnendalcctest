import React, { useEffect, useState } from 'react';

const TeamMembers = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const executives = [
    {
      name: "Stuti Upreti",
      role: "President",
      description: "Passionate about AI and machine learning.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    },
    {
      name: "Samraghi Lamichhane",
      role: "Secretary",
      description: "Manages communications and event logistics.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris"
    },
    {
      name: "Prerit Gautam",
      role: "Teachnical Lead",
      description: "Oversees club finances and sponsorships.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diana"
    },
  {
      name: "Sidant Chaturbedi",
      role: "Teachnical Lead",
      description: "Oversees club finances and sponsorships.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diana"
    },
    {
      name: "Sambi Timalsina",
      role: "Public Relations officer",
      description: "Oversees club finances and sponsorships.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diana"
    },
    {
      name: "Shriyans Shrestha",
      role: "Treasurer",
      description: "Oversees club finances and sponsorships.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diana"
    },
    {
      name: "Anushman Pokhrel",
      role: "Event Manager",
      description: "Oversees club finances and sponsorships.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diana"
    },
    {
      name: "Sonika Bhandari",
      role: "Project Manager",
      description: "Oversees club finances and sponsorships.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diana"
    },
    {
      name: "Parchetash Dhakal",
      role: "Media Manager",
      description: "Oversees club finances and sponsorships.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diana"
    },
    
  ];

  const members = [
    {
      name: "Ethan Hunt",
      description: "Member, Cybersecurity enthusiast.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ethan"
    },
    {
      name: "Fiona Glen",
      description: "Member, Interested in UI/UX design.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fiona"
    },
    {
      name: "George King",
      description: "Member, Competitive programmer.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=George"
    },
    {
      name: "Hannah Ives",
      description: "Member, Robotics and IoT projects.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hannah"
    },
    {
      name: "Ian Vance",
      description: "Member, Focus on cloud computing.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ian"
    },
    {
      name: "Jane Doe",
      description: "Member, Game development with Unity.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
    },
    {
      name: "Kevin Lomax",
      description: "Member, Exploring data science.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin"
    },
    {
      name: "Laura Palmer",
      description: "Member, Mobile app development.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Laura"
    }
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .team-page {
          min-height: 100vh;
          z-index:999;
          padding: 80px 20px 60px;
        }

        .page-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-header {
          text-align: center;
          margin-bottom: 80px;
          opacity: 0;
          z-index:999;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .page-header.loaded {
          opacity: 1;
        }

        .page-title {
          font-size: 3.5rem;
          font-weight: bold;
          color: white;
          margin-bottom: 1rem;
          z-index:999;
        }

        .page-description {
          color: #b0b0b0;
          font-size: 1.2rem;
          animation-delay: 0.2s;
        }

        .section {
          margin-bottom: 80px;
        }

        .section-title {
          font-size: 2rem;
          font-weight: bold;
          color: white;
          margin-bottom: 40px;
          opacity: 0;
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .section-title.loaded {
          opacity: 1;
        }

        .section:first-of-type .section-title {
          animation-delay: 0.4s;
        }

        .section:last-of-type .section-title {
          animation-delay: 0.6s;
        }

        .members-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
        }

        .member-card {
          text-align: center;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .member-card.loaded {
          opacity: 1;
        }

        .member-card:nth-child(1) { animation-delay: 0.5s; }
        .member-card:nth-child(2) { animation-delay: 0.6s; }
        .member-card:nth-child(3) { animation-delay: 0.7s; }
        .member-card:nth-child(4) { animation-delay: 0.8s; }
        .member-card:nth-child(5) { animation-delay: 0.9s; }
        .member-card:nth-child(6) { animation-delay: 1s; }
        .member-card:nth-child(7) { animation-delay: 1.1s; }
        .member-card:nth-child(8) { animation-delay: 1.2s; }

        .member-card:hover {
          transform: translateY(-10px);
        }

        .member-image {
          width: 160px;
          height: 160px;
          margin: 0 auto 20px;
          border-radius: 50%;
          overflow: hidden;
          background: #2a2a3e;
          border: 4px solid #3a3a4e;
          transition: all 0.4s ease;
          position: relative;
        }

        .member-card:hover .member-image {
          border-color: #3b82f6;
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
          transform: scale(1.1) rotate(5deg);
        }

        .member-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .member-card:hover .member-image::before {
          opacity: 1;
        }

        .member-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .member-card:hover .member-image img {
          transform: scale(1.1);
        }

        .member-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          margin-bottom: 8px;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .member-card:hover .member-name {
          color: #3b82f6;
          transform: scale(1.05);
        }

        .member-role {
          font-size: 0.9rem;
          color: #3b82f6;
          margin-bottom: 8px;
          transition: all 0.3s ease;
        }

        .member-card:hover .member-role {
          color: #60a5fa;
          font-weight: 600;
        }

        .member-description {
          font-size: 0.9rem;
          color: #b0b0b0;
          line-height: 1.5;
          transition: color 0.3s ease;
        }

        .member-card:hover .member-description {
          color: #d0d0d0;
        }

        .page-footer {
          margin-top: 80px;
          padding-top: 30px;
          border-top: 1px solid #3a3a4e;
          text-align: center;
          color: #6b6b7b;
          font-size: 0.9rem;
          opacity: 0;
          animation: fadeIn 0.8s ease-out 1.5s forwards;
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2.5rem;
          }

          .page-description {
            font-size: 1rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .members-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 30px;
          }

          .member-image {
            width: 120px;
            height: 120px;
          }

          .team-page {
            padding: 40px 15px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .members-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1025px) {
          .members-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .page-header,
          .section-title,
          .member-card,
          .page-footer {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      <div className="team-page">
        <div className="page-container">
          <div className={`page-header ${loaded ? 'loaded' : ''}`}>
            <h1 className="page-title">Meet the Team</h1>
            <p className="page-description">
              The brilliant minds behind the ALCC, driving innovation and community.
            </p>
          </div>

          <div className="section">
            <h2 className={`section-title ${loaded ? 'loaded' : ''}`}>Our Executive Committee</h2>
            <div className="members-grid">
              {executives.map((exec, index) => (
                <div key={index} className={`member-card ${loaded ? 'loaded' : ''}`}>
                  <div className="member-image">
                    <img src={exec.image} alt={exec.name} />
                  </div>
                  <h3 className="member-name">{exec.name}</h3>
                  <p className="member-role">{exec.role}</p>
                  <p className="member-description">{exec.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <h2 className={`section-title ${loaded ? 'loaded' : ''}`}>Club Members</h2>
            <div className="members-grid">
              {members.map((member, index) => (
                <div key={index} className={`member-card ${loaded ? 'loaded' : ''}`}>
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-description">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="page-footer">
            © 2024 ALCC St. Xavier's. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMembers;