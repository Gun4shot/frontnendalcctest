import React, { useState } from "react";
import {  Github, FileText,  } from "lucide-react";
import { projects } from "../../data/projectsData";

export default function RecentProjects() {
  const recent = projects.slice(0, 3);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="recent-projects-section fade-slide" style={{ margin: "4rem 0" }}>
      <style>{`
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .recent-header { text-align: center; margin-bottom: 1.5rem; }
        .recent-header h2 { font-size: clamp(1.6rem, 3vw, 2.2rem); margin: 0; color: #fff; }

        .recent-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: start; max-width: 1200px; margin: 0 auto; }
        @media (max-width: 1024px) { .recent-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .recent-grid { grid-template-columns: 1fr; } }

        .project-card {
          background: #1a1a2e;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          cursor: pointer;
          animation: scaleIn 0.5s ease-out;
          border: 1px solid rgba(59, 130, 246, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          
        }
        .project-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow:
            0 20px 40px rgba(59, 130, 246, 0.15),
            0 0 20px rgba(59, 130, 246, 0.25),
            0 0 0 1px rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.4);
        }

        .project-image { height: 140px; position: relative; }
        .project-tag-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 6px 12px;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          font-size: 0.75rem;
          color: white;
        }

        .project-content { padding: 16px; }
        .project-category { font-size: 0.8rem; color: #3b82f6; margin-bottom: 8px; }
        .project-title { font-size: 1.05rem; font-weight: 700; color: #fff; margin: 0 0 6px; }
        .project-author { font-size: 0.85rem; color: #b0b0b0; margin-bottom: 12px; }
        .project-description { font-size: 0.9rem; color: #9b9b9b; line-height: 1.5; margin-bottom: 12px; }

        .view-project-btn {
          width: 100%;
          padding: 10px 12px;
          background: #3b82f6;
          border: none;
          border-radius: 6px;
          color: white;
          font-size: 0.95rem;
          cursor: pointer;
          transition: background 0.3s ease, transform 160ms ease;
        }
        .view-project-btn:hover { background: #2563eb; transform: translateY(-2px); }

        /* Modal styles (same as projects.jsx) */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.85);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease-out;
        }
        .modal-content {
          background: #1a1a2e;
          border-radius: 16px;
          max-width: 700px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: scaleIn 0.25s ease-out;
        }
        .modal-header {
          height: 200px;
          position: relative;
          border-radius: 16px 16px 0 0;
        }
        .modal-close-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(0,0,0,0.45);
          border: none;
          border-radius: 50%;
          width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: white;
        }
        .modal-body { padding: 24px; }
        .modal-title { font-size: 1.6rem; font-weight: 700; color: white; margin-bottom: 8px; }
        .modal-author { color: #3b82f6; margin-bottom: 14px; }
        .modal-section { margin-bottom: 18px; }
        .modal-section-title { font-size: 1.05rem; font-weight: 600; color: white; margin-bottom: 8px; }
        .modal-text { color: #b0b0b0; line-height: 1.6; }

        .modal-actions { display: flex; gap: 12px; margin-top: 12px; }
        .modal-action-btn { flex: 1; padding: 12px; border: none; border-radius: 10px; font-size: 1rem; cursor: pointer; }
        .modal-action-btn.primary { background: #3b82f6; color: white; display:flex; gap:8px; align-items:center; justify-content:center; }
        .modal-action-btn.secondary { background: #2a2a3e; color: white; }
        .modal-action-btn.primary:hover { background: #2563eb; transform: translateY(-2px); }

        @media(max-width:768px){

        .project-card {
        margin:5px 15px 5px 15px;
        }
      `}</style>

      

      <div className="recent-grid" role="list">
        {recent.map((p) => (
          <article key={p.id} className="project-card" role="listitem" aria-labelledby={`proj-${p.id}`}>
            <div className="project-image" style={{ background: p.gradient }}>
              <span className="project-tag-badge">{p.tag}</span>
            </div>
            <div className="project-content">
              <div className="project-category">{p.type === "research" ? "Research Paper" : "Software"}</div>
              <h3 id={`proj-${p.id}`} className="project-title">{p.title}</h3>
              <p className="project-author">By {p.author}</p>
              <p className="project-description">{p.description}</p>
              <button
                className="view-project-btn"
                onClick={() => setSelectedProject(p)}
                aria-haspopup="dialog"
              >
                View Project
              </button>
            </div>
          </article>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <a href="projects.html" style={{
          padding: "0.9rem 1.6rem",
          background: "linear-gradient(90deg,#5227FF,#8C52FF)",
          color: "white",
          borderRadius: 999,
          textDecoration: "none",
          fontWeight: 600,
          boxShadow: "0 10px 30px rgba(89,32,255,0.18)"
        }}>
          See all projects
        </a>
      </div>

      {selectedProject && (
        <div className="modal-overlay" role="dialog" aria-modal="true" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header" style={{ background: selectedProject.gradient }}>
              <button className="modal-close-btn" onClick={() => setSelectedProject(null)} aria-label="Close"
                style={{ color: '#fff' }}>
                X
              </button>
            </div>
            <div className="modal-body">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-author">By {selectedProject.author}</p>

              <div className="modal-section">
                <h3 className="modal-section-title">Overview</h3>
                <p className="modal-text">{selectedProject.description}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Details</h3>
                <p className="modal-text">{selectedProject.details}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Category</h3>
                <p className="modal-text">{selectedProject.tag}</p>
              </div>

              <div className="modal-actions">
                <button
                  className="modal-action-btn primary"
                  onClick={() => window.open(selectedProject.link, "_blank")}
                >
                  {selectedProject.type === "research" ? <><FileText size={18} /> Read Paper</> : <><Github size={18} /> View on GitHub</>}
                </button>
                <button className="modal-action-btn secondary" onClick={() => setSelectedProject(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}