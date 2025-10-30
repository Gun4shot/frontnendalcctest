import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Award, Code, Clock } from 'lucide-react';

const ChallengeBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 10,
    minutes: 30,
    seconds: 42
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .challenge-banner-section {
          padding: 80px 20px;
          background: linear-gradient(180deg, #0f1419 0%, #1a1f2e 100%);
          position: relative;
          overflow: hidden;
        }

        .challenge-banner-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .challenge-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section-label {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 20px;
          color: #60a5fa;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 20px;
          animation: fadeInUp 0.6s ease-out;
        }

        .challenge-content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .challenge-info {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .challenge-title {
          font-size: 3rem;
          font-weight: bold;
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .challenge-subtitle {
          color: #9ca3af;
          font-size: 1.1rem;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .challenge-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .meta-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: #1a2332;
          border-radius: 8px;
          color: #d1d5db;
          font-size: 0.9rem;
          border: 1px solid #2a3441;
        }

        .meta-icon {
          color: #3b82f6;
        }

        .challenge-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border: none;
          border-radius: 10px;
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .challenge-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.5);
        }

        .challenge-cta:hover .arrow-icon {
          transform: translateX(5px);
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        .challenge-visual {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .challenge-card {
          background: linear-gradient(135deg, #1a2332 0%, #1f2937 100%);
          border-radius: 20px;
          padding: 40px;
          border: 1px solid #2a3441;
          position: relative;
          overflow: hidden;
          animation: glow 3s ease-in-out infinite;
        }

        .challenge-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.1),
            transparent
          );
          animation: shimmer 3s infinite;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .challenge-month {
          font-size: 0.85rem;
          color: #3b82f6;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .difficulty-badge {
          padding: 6px 12px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 6px;
          color: #f87171;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .difficulty-badge.easy {
          background: rgba(34, 197, 94, 0.1);
          border-color: rgba(34, 197, 94, 0.3);
          color: #4ade80;
        }

        .difficulty-badge.medium {
          background: rgba(251, 191, 36, 0.1);
          border-color: rgba(251, 191, 36, 0.3);
          color: #fbbf24;
        }

        .card-challenge-name {
          font-size: 1.8rem;
          font-weight: bold;
          color: white;
          margin-bottom: 20px;
        }

        .timer-mini-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 25px;
        }

        .timer-mini-box {
          background: #0f1419;
          border-radius: 10px;
          padding: 12px;
          text-align: center;
        }

        .timer-mini-number {
          font-size: 1.5rem;
          font-weight: bold;
          color: #3b82f6;
          margin-bottom: 4px;
        }

        .timer-mini-label {
          font-size: 0.7rem;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .prize-info {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px;
          background: rgba(251, 191, 36, 0.1);
          border-radius: 10px;
          border: 1px solid rgba(251, 191, 36, 0.2);
        }

        .prize-icon {
          color: #fbbf24;
          animation: float 3s ease-in-out infinite;
        }

        .prize-text {
          color: #fbbf24;
          font-weight: 600;
          font-size: 0.95rem;
        }

        @media (max-width: 968px) {
          .challenge-content-wrapper {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .challenge-title {
            font-size: 2.5rem;
          }

          .challenge-visual {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .challenge-banner-section {
            padding: 60px 20px;
          }

          .challenge-title {
            font-size: 2rem;
          }

          .challenge-subtitle {
            font-size: 1rem;
          }

          .challenge-card {
            padding: 30px 20px;
          }

          .card-challenge-name {
            font-size: 1.4rem;
          }

          .timer-mini-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .challenge-meta {
            flex-direction: column;
            gap: 12px;
          }

          .meta-badge {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .challenge-title {
            font-size: 1.6rem;
          }

          .challenge-cta {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <section className="challenge-banner-section">
        <div className="challenge-container">
          <span className="section-label">ACTIVE CHALLENGE</span>
          
          <div className="challenge-content-wrapper">
            <div className="challenge-info">
              <h2 className="challenge-title">
                Monthly Coding Challenge
              </h2>
              <p className="challenge-subtitle">
                Test your problem-solving skills and compete with fellow members. 
                New challenges every month with exciting prizes for top performers.
              </p>
              
              <div className="challenge-meta">
                <div className="meta-badge">
                  <Calendar className="meta-icon" size={18} />
                  <span>November 2025</span>
                </div>
                <div className="meta-badge">
                  <Code className="meta-icon" size={18} />
                  <span>Any Language</span>
                </div>
                <div className="meta-badge">
                  <Award className="meta-icon" size={18} />
                  <span>Prizes: Handshake with the president</span>
                </div>
              </div>

              <a href="challenges.html" className="challenge-cta">
                View Challenge
                <ArrowRight className="arrow-icon" size={20} />
              </a>
            </div>

            <div className="challenge-visual">
              <div className="challenge-card">
                <div className="card-header">
                  <span className="challenge-month">November 2025</span>
                  <span className="difficulty-badge">Easy</span>
                </div>

                <h3 className="card-challenge-name">This is the last time.</h3>

                <div className="timer-mini-grid">
                  <div className="timer-mini-box">
                    <div className="timer-mini-number">{String(timeLeft.days).padStart(2, '0')}</div>
                    <div className="timer-mini-label">Days</div>
                  </div>
                  <div className="timer-mini-box">
                    <div className="timer-mini-number">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="timer-mini-label">Hours</div>
                  </div>
                  <div className="timer-mini-box">
                    <div className="timer-mini-number">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="timer-mini-label">Minutes</div>
                  </div>
                  <div className="timer-mini-box">
                    <div className="timer-mini-number">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="timer-mini-label">Seconds</div>
                  </div>
                </div>

                <div className="prize-info">
                  <Award className="prize-icon" size={24} />
                  <span className="prize-text">Prize includes handshake with the president</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChallengeBanner;