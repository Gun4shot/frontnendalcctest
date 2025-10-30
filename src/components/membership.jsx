import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MembershipApplication = () => {
  
  const [expandedSections, setExpandedSections] = useState({
    personal: true,
    interests: false,
    assessment: false
  });
  const [agreedToCode, setAgreedToCode] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    grade: '',
    phone: '',
    interests: [],
    skills: [],
    experience: '',
    motivation: '',
    projects: '',
    availability: '',
    expectations: ''
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = () => {
    if (agreedToCode && formData.fullName && formData.email && formData.grade) {
      alert('Application submitted successfully!');
    } else {
      alert('Please fill in all required fields and agree to the code of conduct.');
    }
  };

  const interestOptions = [
    'Web Development',
    'Mobile Development',
    'AI/Machine Learning',
    'Data Science',
    'Cybersecurity',
    'Game Development',
    'UI/UX Design',
    'Cloud Computing',
    'Robotics',
    'Blockchain'
  ];

  const skillOptions = [
    'Python',
    'JavaScript',
    'Java',
    'C++',
    'React',
    'Node.js',
    'SQL',
    'Git',
    'Docker',
    'AWS'
  ];

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

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .application-page {
          min-height: 100vh;
          
          padding: 40px 20px;
        }

        .application-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .application-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          animation: fadeIn 0.6s ease-out;
        }

        .header-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
          font-weight: 600;
        }

        

        .back-link {
          color: #9ca3af;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .back-link:hover {
          color: white;
        }

        .application-title {
          font-size: 2.5rem;
          font-weight: bold;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
          animation: fadeIn 0.6s ease-out 0.2s both;
        }

        .application-subtitle {
          color: #9ca3af;
          font-size: 1rem;
          margin-bottom: 40px;
          animation: fadeIn 0.6s ease-out 0.3s both;
        }



        .form-section {
          background: #1a2332;
          border-radius: 12px;
          margin-bottom: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          animation: fadeIn 0.6s ease-out both;
        }

        .form-section:nth-child(1) { animation-delay: 0.5s; }
        .form-section:nth-child(2) { animation-delay: 0.6s; }
        .form-section:nth-child(3) { animation-delay: 0.7s; }

        .section-header {
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .section-header:hover {
          background: #1f2937;
        }

        .section-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: white;
        }

        .section-icon {
          color: #9ca3af;
          transition: transform 0.3s ease;
        }

        .section-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          padding: 0 20px;
        }

        .section-content.expanded {
          max-height: 2000px;
          padding: 0 20px 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          color: #d1d5db;
          font-size: 0.9rem;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 12px;
          background: #0f1419;
          border: 1px solid #2a3441;
          border-radius: 6px;
          color: white;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          background: #1a2332;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #6b7280;
        }

        .form-select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239ca3af' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 36px;
        }

        .form-textarea {
          min-height: 100px;
          resize: vertical;
          font-family: inherit;
        }

        .checkbox-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 12px;
        }

        .checkbox-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .checkbox-input {
          width: 18px;
          height: 18px;
          cursor: pointer;
          accent-color: #3b82f6;
        }

        .checkbox-label {
          color: #d1d5db;
          font-size: 0.9rem;
          cursor: pointer;
        }

        .agreement-section {
          background: #1a2332;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 30px;
          animation: fadeIn 0.6s ease-out 0.8s both;
        }

        .agreement-checkbox {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .agreement-label {
          color: #d1d5db;
          font-size: 0.95rem;
        }

        .submit-button {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: fadeIn 0.6s ease-out 0.9s both;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
        }

        .submit-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        @media (max-width: 768px) {
          .application-page {
            padding: 20px 15px;
          }

          .application-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

          .application-title {
            font-size: 1.8rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .checkbox-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .application-title {
            font-size: 1.5rem;
          }

          .section-title {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="application-page">
        <div className="application-container">
          <div className="application-header">
            <div className="header-logo">
              <div className="logo-icon"></div>
              ALCC | St. Xavier's Loyola Campus
            </div>
            <a href="index.html" className="back-link">Back to Home</a>
          </div>

          <h1 className="application-title">ALCC Membership Application</h1>
          <p className="application-subtitle">
            Join our community of builders and innovators. Fill out the form below to get started.
          </p>

          <div className="form-section">
            <div className="section-header" onClick={() => toggleSection('personal')}>
              <h2 className="section-title">Personal Information</h2>
              {expandedSections.personal ? (
                <ChevronUp className="section-icon" size={24} />
              ) : (
                <ChevronDown className="section-icon" size={24} />
              )}
            </div>
            <div className={`section-content ${expandedSections.personal ? 'expanded' : ''}`}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Grade / Class Level *</label>
                  <select
                    className="form-select"
                    value={formData.grade}
                    onChange={(e) => handleInputChange('grade', e.target.value)}
                  >
                    <option value="">Select your grade</option>
                    <option value="as1">AS Level - Year 1</option>
                    <option value="as2">AS Level - Year 2</option>
                    <option value="a1">A Level - Year 1</option>
                    <option value="a2">A Level - Year 2</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+977 98XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="section-header" onClick={() => toggleSection('interests')}>
              <h2 className="section-title">Interests & Skills</h2>
              {expandedSections.interests ? (
                <ChevronUp className="section-icon" size={24} />
              ) : (
                <ChevronDown className="section-icon" size={24} />
              )}
            </div>
            <div className={`section-content ${expandedSections.interests ? 'expanded' : ''}`}>
              <div className="form-group">
                <label className="form-label">Areas of Interest (Select all that apply)</label>
                <div className="checkbox-grid">
                  {interestOptions.map((interest) => (
                    <div key={interest} className="checkbox-item">
                      <input
                        type="checkbox"
                        className="checkbox-input"
                        id={`interest-${interest}`}
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleCheckboxChange('interests', interest)}
                      />
                      <label htmlFor={`interest-${interest}`} className="checkbox-label">
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Technical Skills (Select all that apply)</label>
                <div className="checkbox-grid">
                  {skillOptions.map((skill) => (
                    <div key={skill} className="checkbox-item">
                      <input
                        type="checkbox"
                        className="checkbox-input"
                        id={`skill-${skill}`}
                        checked={formData.skills.includes(skill)}
                        onChange={() => handleCheckboxChange('skills', skill)}
                      />
                      <label htmlFor={`skill-${skill}`} className="checkbox-label">
                        {skill}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Previous Experience</label>
                <textarea
                  className="form-textarea"
                  placeholder="Tell us about any relevant projects, courses, or experience you have..."
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="section-header" onClick={() => toggleSection('assessment')}>
              <h2 className="section-title">Assessment Questions</h2>
              {expandedSections.assessment ? (
                <ChevronUp className="section-icon" size={24} />
              ) : (
                <ChevronDown className="section-icon" size={24} />
              )}
            </div>
            <div className={`section-content ${expandedSections.assessment ? 'expanded' : ''}`}>
              <div className="form-group">
                <label className="form-label">Why do you want to join ALCC? *</label>
                <textarea
                  className="form-textarea"
                  placeholder="Share your motivation for joining our club..."
                  value={formData.motivation}
                  onChange={(e) => handleInputChange('motivation', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">What projects or ideas are you interested in working on?</label>
                <textarea
                  className="form-textarea"
                  placeholder="Describe any projects you'd like to work on or contribute to..."
                  value={formData.projects}
                  onChange={(e) => handleInputChange('projects', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Weekly Availability</label>
                <select
                  className="form-select"
                  value={formData.availability}
                  onChange={(e) => handleInputChange('availability', e.target.value)}
                >
                  <option value="">Select your availability</option>
                  <option value="1-2">1-2 hours per week</option>
                  <option value="3-5">3-5 hours per week</option>
                  <option value="5-10">5-10 hours per week</option>
                  <option value="10+">10+ hours per week</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">What do you hope to gain from this experience?</label>
                <textarea
                  className="form-textarea"
                  placeholder="Tell us about your expectations and goals..."
                  value={formData.expectations}
                  onChange={(e) => handleInputChange('expectations', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="agreement-section">
            <div className="agreement-checkbox">
              <input
                type="checkbox"
                className="checkbox-input"
                id="code-agreement"
                checked={agreedToCode}
                onChange={(e) => setAgreedToCode(e.target.checked)}
              />
              <label htmlFor="code-agreement" className="agreement-label">
                I agree to the club's code of conduct.
              </label>
            </div>
          </div>

          <button
            className="submit-button"
            onClick={handleSubmit}
            disabled={!agreedToCode || !formData.fullName || !formData.email || !formData.grade}
          >
            Submit Application
          </button>
        </div>
      </div>
    </>
  );
};

export default MembershipApplication;