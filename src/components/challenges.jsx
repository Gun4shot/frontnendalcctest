import React, { useState, useEffect } from 'react';
import { X, Upload, Trophy, Github } from 'lucide-react';

const CodingChallenge = () => {
  const [activeTab, setActiveTab] = useState('problem');
  const [file, setFile] = useState(null);
  const [githubLink, setGithubLink] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 10,
    minutes: 30,
    seconds: 55
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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = () => {
    if (file || githubLink) {
      alert('Solution submitted successfully!');
    } else {
      alert('Please upload a file or provide a GitHub link');
    }
  };

  const hallOfFame = [
    {
      month: 'September 2025',
      challenge: 'The Quantum Sort',
      winner: 'Sidant'
    },
    {
      month: 'August 2025',
      challenge: "The Sentinel's Password",
      winner: 'Sidant'
    },
    {
      month: 'July 2025',
      challenge: 'Mars Rover Pathfinding',
      winner: 'Sidant'
    }
  ];

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            z-index:999;
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            z-index:999;
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .challenge-page {
          z-index:999;
          min-height: 100vh;
          
          padding: 40px 20px;
        }

        .challenge-container {
          z-index:999;
          max-width: 1400px;
          margin: 0 auto;
        }

        .challenge-header {
          z-index:999;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 50px;
          animation: fadeIn 0.6s ease-out;
        }

        .challenge-title {
          z-index:999;
          font-size: 2rem;
          font-weight: bold;
          color: white;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .close-btn {
          background: transparent;
          border: none;
          color: white;
          cursor: pointer;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .close-btn:hover {
          transform: rotate(90deg);
        }

        .challenge-layout {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 30px;
        }

        .challenge-main {
          animation: fadeIn 0.6s ease-out 0.2s both;
        }

        .challenge-sidebar {
          animation: fadeIn 0.6s ease-out 0.4s both;
        }

        .challenge-card {
          background: #1a2332;
          border-radius: 12px;
          padding: 30px;
          margin-bottom: 20px;
        }

        .challenge-name {
          font-size: 1.8rem;
          font-weight: bold;
          color: white;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .challenge-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .meta-item {
          padding: 8px 16px;
          background: #0f1419;
          border-radius: 6px;
          color: #9ca3af;
          font-size: 0.9rem;
        }

        .meta-label {
          color: #6b7280;
          margin-right: 5px;
        }

        .timer-section {
          margin-bottom: 30px;
        }

        .timer-label {
          color: #9ca3af;
          font-size: 0.9rem;
          margin-bottom: 15px;
        }

        .timer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .timer-box {
          background: #0f1419;
          border-radius: 8px;
          padding: 15px;
          text-align: center;
        }

        .timer-number {
          font-size: 2rem;
          font-weight: bold;
          color: white;
          margin-bottom: 5px;
          animation: pulse 2s ease-in-out infinite;
        }

        .timer-unit {
          color: #6b7280;
          font-size: 0.8rem;
        }

        .tabs {
          display: flex;
          gap: 5px;
          margin-bottom: 20px;
          border-bottom: 1px solid #2a3441;
        }

        .tab-button {
          padding: 12px 24px;
          background: transparent;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          border-bottom: 2px solid transparent;
        }

        .tab-button:hover {
          color: white;
        }

        .tab-button.active {
          color: white;
          border-bottom-color: #3b82f6;
        }

        .tab-content {
          color: #d1d5db;
          line-height: 1.8;
        }

        .tab-content h3 {
          color: white;
          margin: 20px 0 10px;
          font-size: 1.1rem;
        }

        .tab-content ul {
          margin: 10px 0;
          padding-left: 20px;
        }

        .tab-content li {
          margin: 8px 0;
        }

        .tab-content code {
          background: #0f1419;
          padding: 2px 8px;
          border-radius: 4px;
          color: #3b82f6;
        }

        .sidebar-card {
          background: #1a2332;
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 20px;
        }

        .sidebar-title {
          font-size: 1.3rem;
          font-weight: bold;
          color: white;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 10px;
        }

        .sidebar-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
          border-radius: 2px;
        }

        .upload-area {
          border: 2px dashed #2a3441;
          border-radius: 8px;
          padding: 40px 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 20px;
        }

        .upload-area:hover {
          border-color: #3b82f6;
          background: #0f1419;
        }

        .upload-icon {
          color: #6b7280;
          margin-bottom: 15px;
        }

        .upload-text {
          color: #9ca3af;
          font-size: 0.95rem;
          margin-bottom: 5px;
        }

        .upload-subtext {
          color: #6b7280;
          font-size: 0.85rem;
        }

        .file-input {
          display: none;
        }

        .selected-file {
          background: #0f1419;
          padding: 12px;
          border-radius: 6px;
          color: #3b82f6;
          font-size: 0.9rem;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: space-between;
        }

        .file-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .remove-file-btn {
          background: transparent;
          border: none;
          color: #ef4444;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border-radius: 4px;
        }

        .remove-file-btn:hover {
          background: rgba(239, 68, 68, 0.1);
          transform: scale(1.1);
        }

        .divider {
          text-align: center;
          color: #6b7280;
          margin: 20px 0;
          position: relative;
        }

        .divider::before,
        .divider::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 40%;
          height: 1px;
          background: #2a3441;
        }

        .divider::before {
          left: 0;
        }

        .divider::after {
          right: 0;
        }

        .input-group {
          margin-bottom: 20px;
        }

        .input-label {
          display: block;
          color: #9ca3af;
          font-size: 0.9rem;
          margin-bottom: 8px;
        }

        .text-input {
          width: 100%;
          padding: 12px;
          background: #0f1419;
          border: 1px solid #2a3441;
          border-radius: 6px;
          color: white;
          font-size: 0.95rem;
          transition: border-color 0.3s ease;
          box-sizing: border-box;
        }

        .text-input:focus {
          outline: none;
          border-color: #3b82f6;
        }

        .text-input::placeholder {
          color: #6b7280;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          background: #3b82f6;
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
        }

        .hall-item {
          padding: 15px;
          background: #0f1419;
          border-radius: 8px;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 15px;
          transition: all 0.3s ease;
        }

        .hall-item:hover {
          background: #1a2332;
          transform: translateX(5px);
        }

        .trophy-icon {
          color: #fbbf24;
          flex-shrink: 0;
        }

        .hall-content {
          flex: 1;
        }

        .hall-challenge {
          color: white;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .hall-winner {
          color: #6b7280;
          font-size: 0.85rem;
        }

        .footer {
          z-index:999;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #2a3441;
          text-align: center;
          color: #6b7280;
          font-size: 0.9rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-links {
          z-index:999;
          display: flex;
          gap: 20px;
        }

        .footer-link {
          z-index:999;
          color: #9ca3af;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: white;
        }

        @media (max-width: 1024px) {
          .challenge-layout {
            grid-template-columns: 1fr;
          }

          .challenge-sidebar {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .challenge-page {
            padding: 20px 15px;
            
          }
          
          

          .challenge-header {
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
          }

          .challenge-title {
            font-size: 1.5rem;
          }

          .challenge-card {
            padding: 20px;
            
          }

          .challenge-name {
            font-size: 1.4rem;
          }

          .timer-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .tabs {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          .tab-button {
            white-space: nowrap;
          }

          .footer {
            flex-direction: column;
            gap: 15px;
          }
        }
      `}</style>

      <div className="challenge-page">
        <div className="challenge-container">
          <div className="challenge-header">
            <h1 className="challenge-title">Coding Challenge: November 2025</h1>
           
          </div>
          
          <div className="challenge-layout">
            <div className="challenge-main">
              <div className="challenge-card">
                <h2 className="challenge-name">This is the last time.</h2>
                
                <div className="challenge-meta">
                  <div className="meta-item">
                    <span className="meta-label">Difficulty:</span>
                    <span>Easy</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Language:</span>
                    <span>Any</span>
                  </div>
                </div>

                <div className="timer-section">
                  <div className="timer-label">Submission Deadline</div>
                  <div className="timer-grid">
                    <div className="timer-box">
                      <div className="timer-number">{String(timeLeft.days).padStart(2, '0')}</div>
                      <div className="timer-unit">Days</div>
                    </div>
                    <div className="timer-box">
                      <div className="timer-number">{String(timeLeft.hours).padStart(2, '0')}</div>
                      <div className="timer-unit">Hours</div>
                    </div>
                    <div className="timer-box">
                      <div className="timer-number">{String(timeLeft.minutes).padStart(2, '0')}</div>
                      <div className="timer-unit">Minutes</div>
                    </div>
                    <div className="timer-box">
                      <div className="timer-number">{String(timeLeft.seconds).padStart(2, '0')}</div>
                      <div className="timer-unit">Seconds</div>
                    </div>
                  </div>
                </div>

                <div className="tabs">
                  <button 
                    className={`tab-button ${activeTab === 'problem' ? 'active' : ''}`}
                    onClick={() => setActiveTab('problem')}
                  >
                    Problem
                  </button>
                  <button 
                    className={`tab-button ${activeTab === 'constraints' ? 'active' : ''}`}
                    onClick={() => setActiveTab('constraints')}
                  >
                    Constraints
                  </button>
                  <button 
                    className={`tab-button ${activeTab === 'examples' ? 'active' : ''}`}
                    onClick={() => setActiveTab('examples')}
                  >
                    Examples
                  </button>
                  <button 
                    className={`tab-button ${activeTab === 'prizes' ? 'active' : ''}`}
                    onClick={() => setActiveTab('prizes')}
                  >
                    Prizes
                  </button>
                </div>

                <div className="tab-content">
                  {activeTab === 'problem' && (
                    <div>
                      <p>
You are given <var>n</var> casinos, numbered from 1 to <var>n</var>. Each casino is described by three integers:<var> l<sub>i</sub>, r<sub>i</sub>, and real<sub>i</sub> (l<sub>i</sub> &le; real<sub>i</sub> &le; r<sub>i</sub>).</var> You initially have <var>k</var> coins.
You can play at casino <var>i</var> only if the current number of coins <var>x</var> satisfies <var>l<sub>i</sub> &le; x &le; r<sub>i</sub>.</var> After playing, your number of coins becomes real<sub>i</sub>.
You can visit the casinos in any order and are not required to visit all of them. Each casino can be visited no more than once.
Your task is to find the maximum final number of coins you can obtain.
</p>

                      <p>
                        Your task is to write a program that takes the Labyrinth's structure and a sequence of 
                        directional keys as input, and outputs the decoded message. The navigation starts at the top-left 
                        corner (0,0) of the grid.
                      </p>
                      <h3>Input Format</h3>
                      <ul>
                        <li>First line: Two integers N and M representing grid dimensions</li>
                        <li>Next N lines: M characters representing the Labyrinth grid</li>
                        <li>Last line: A string of directional keys (U, D, L, R)</li>
                      </ul>
                      <h3>Output Format</h3>
                      <ul>
                        <li>A single string containing the decoded message</li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'constraints' && (
                    <div>
                      <h3>Technical Constraints</h3>
                      <ul>
                        <li><code>1 ≤ N, M ≤ 100</code> - Grid dimensions</li>
                        <li><code>1 ≤ key sequence length ≤ 1000</code> - Number of moves</li>
                        <li>Grid contains only printable ASCII characters</li>
                        <li>Invalid moves should be ignored (out of bounds)</li>
                        <li>Time limit: 2 seconds per test case</li>
                        <li>Memory limit: 256 MB</li>
                      </ul>
                      <h3>Edge Cases to Consider</h3>
                      <ul>
                        <li>Movement that goes out of bounds</li>
                        <li>Empty grid or empty key sequence</li>
                        <li>Starting position contains special character</li>
                        <li>Consecutive invalid moves</li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'examples' && (
                    <div>
                      <h3>Example 1</h3>
                      <p><strong>Input:</strong></p>
                      <pre style={{background: '#0f1419', padding: '15px', borderRadius: '6px', overflow: 'auto'}}>
{`3 3
ABC
DEF
GHI
RRDD`}
                      </pre>
                      <p><strong>Output:</strong></p>
                      <pre style={{background: '#0f1419', padding: '15px', borderRadius: '6px'}}>
{`ACFI`}
                      </pre>
                      <p><strong>Explanation:</strong> Start at A(0,0), move right to C, down to F, down to I</p>

                      <h3>Example 2</h3>
                      <p><strong>Input:</strong></p>
                      <pre style={{background: '#0f1419', padding: '15px', borderRadius: '6px', overflow: 'auto'}}>
{`2 4
HELL
OWRD
RRRDRLL`}
                      </pre>
                      <p><strong>Output:</strong></p>
                      <pre style={{background: '#0f1419', padding: '15px', borderRadius: '6px'}}>
{`HELLOWORLD`}
                      </pre>
                    </div>
                  )}

                  {activeTab === 'prizes' && (
                    <div>
                      <h3>Prize Pool</h3>
                      <ul>
                        <li><strong>🥇 First Place:</strong> Rs. 180 canteen coupon</li>
                        <li><strong>🥈 Second Place:</strong> Rs. 150 canteen coupon</li>
                        <li><strong>🥉 Third Place:</strong> A warm thank you from the club president.</li>
                      </ul>
                      <h3>Judging Criteria</h3>
                      <ul>
                        <li><strong>Correctness (40%):</strong> Solution passes all test cases</li>
                        <li><strong>Efficiency (30%):</strong> Time and space complexity optimization</li>
                        <li><strong>Code Quality (20%):</strong> Readability, documentation, and style</li>
                        <li><strong>Creativity (10%):</strong> Innovative approach or elegant solution</li>
                      </ul>
                      <h3>Additional Rewards</h3>
                      <p>All participants who submit a valid solution will receive:</p>
                      <ul>
                        <li>Digital certificate of participation</li>
                        <li>Possible Entry into our Hall of Fame</li>
                        <li>Early access to next month's challenge</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="challenge-sidebar">
              <div className="sidebar-card">
                <h3 className="sidebar-title">Submit Your Solution</h3>
                <p style={{color: '#9ca3af', fontSize: '0.9rem', marginBottom: '20px'}}>
                  Upload a single .py file or a link to your public GitHub repository.
                </p>

                <div 
                  className="upload-area"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById('fileInput').click()}
                >
                  <Upload className="upload-icon" size={40} style={{margin: '0 auto', display: 'block'}} />
                  <div className="upload-text">Click to upload or drag and drop</div>
                  <div className="upload-subtext">.py, .js, .java, .cpp</div>
                </div>

                <input
                  id="fileInput"
                  type="file"
                  className="file-input"
                  accept=".py,.js,.java,.cpp"
                  onChange={handleFileChange}
                />

                {file && (
                  <div className="selected-file">
                    <div className="file-info">
                      <Upload size={16} />
                      {file.name}
                    </div>
                    <button 
                      className="remove-file-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFile(null);
                      }}
                      title="Remove file"
                    >
                      <X size={18} />
                    </button>
                  </div>
                )}

                <div className="divider">OR</div>

                <div className="input-group">
                  <label className="input-label">GitHub/Replit Link</label>
                  <input
                    type="text"
                    className="text-input"
                    placeholder="https://github.com/user/repo"
                    value={githubLink}
                    onChange={(e) => setGithubLink(e.target.value)}
                  />
                </div>

                <button className="submit-btn" onClick={handleSubmit}>
                  Submit Solution
                </button>
              </div>

              <div className="sidebar-card">
                <h3 className="sidebar-title">Hall of Fame</h3>
                {hallOfFame.map((item, index) => (
                  <div key={index} className="hall-item">
                    <Trophy className="trophy-icon" size={24} />
                    <div className="hall-content">
                      <div className="hall-challenge">
                        {item.month}: {item.challenge}
                      </div>
                      <div className="hall-winner">Winner: {item.winner}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="footer">
            <div>© 2024 ALCC St. Xavier's College. All Rights Reserved.</div>
            <div className="footer-links">
              <a href="#" className="footer-link">
                <Github size={20} />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodingChallenge;