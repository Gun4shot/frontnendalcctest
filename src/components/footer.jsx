import React from 'react';
import { Github, Instagram, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .footer {
        margin-top:15rem;
          background: linear-gradient(180deg, #0f1419 0%, #0a0e13 100%);
          border-top: 1px solid #1a2332;
          padding: 60px 20px 30px;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.5),
            transparent
          );
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;
          margin-bottom: 50px;
        }

        .footer-section {
          animation: fadeIn 0.6s ease-out both;
        }

        .footer-section:nth-child(1) { animation-delay: 0.1s; }
        .footer-section:nth-child(2) { animation-delay: 0.2s; }
        .footer-section:nth-child(3) { animation-delay: 0.3s; }
        .footer-section:nth-child(4) { animation-delay: 0.4s; }

        .footer-brand {
          max-width: 300px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
          font-size: 1.2rem;
        }

        .logo-text {
          font-size: 1.4rem;
          font-weight: bold;
          color: white;
        }

        .footer-description {
          color: #9ca3af;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 0.95rem;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-link {
          width: 40px;
          height: 40px;
          background: #1a2332;
          border: 1px solid #2a3441;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
        }

        .social-link:hover {
          background: #3b82f6;
          border-color: #3b82f6;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
        }

        .footer-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 10px;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
          border-radius: 2px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-link {
          color: #9ca3af;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: #3b82f6;
          transform: translateX(5px);
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 15px;
          color: #9ca3af;
          font-size: 0.95rem;
        }

        .contact-icon {
          color: #3b82f6;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .contact-link {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: #3b82f6;
        }

        .footer-bottom {
          border-top: 1px solid #1a2332;
          padding-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-copyright {
          color: #6b7280;
          font-size: 0.9rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 30px;
        }

        .footer-bottom-link {
          color: #9ca3af;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-bottom-link:hover {
          color: white;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .footer-brand {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 40px 20px 20px;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .footer-bottom-links {
            flex-direction: column;
            gap: 15px;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* Brand Section */}
            <div className="footer-section footer-brand">
              <div className="footer-logo">
                <div className="logo-icon"><img src='/images/alcc.png' 
                 alt="Club logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}/></div>
                <div className="logo-text">ALCC</div>
              </div>
              <p className="footer-description">
                A Levels Computer Science Club at St. Xavier's College. 
                Empowering students to innovate, create, and excel in the world of technology.
              </p>
              <div className="social-links">
                <a href="https://github.com/SXC-ALCC" className="social-link" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.instagram.com/alevels_computer_club/" className="social-link" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="mailto:alcc@sxc.edu.np" className="social-link" title="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#team" className="footer-link">Team</a></li>
                <li><a href="#events" className="footer-link">Events</a></li>
                <li><a href="#projects" className="footer-link">Projects</a></li>
                <li><a href="#challenges" className="footer-link">Challenges</a></li>
                <li><a href="#join" className="footer-link">Join Us</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-section">
              <h3 className="footer-title">Resources</h3>
              <ul className="footer-links">
                <li><a href="#intro" className="footer-link">About Us</a></li>
                <li><a href="#hall-of-fame" className="footer-link">Hall of Fame</a></li>
                <li><a href="#blog" className="footer-link">Blog</a></li>
                <li><a href="#gallery" className="footer-link">Gallery</a></li>
                <li><a href="#faq" className="footer-link">FAQ</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h3 className="footer-title">Contact</h3>
              <div className="contact-item">
                <MapPin className="contact-icon" size={18} />
                <span>St. Xavier's College<br />Maitighar, Kathmandu</span>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" size={18} />
                <a href="mailto:alcc@sxc.edu.np" className="contact-link">
                  alcc@sxc.edu.np
                </a>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" size={18} />
                <a href="tel:+9771234567890" className="contact-link">
                  +977 123-4567890
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              © {currentYear} ALCC St. Xavier's College. All Rights Reserved.
            </div>
            
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;