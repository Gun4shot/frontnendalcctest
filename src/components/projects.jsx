import React, { useState } from 'react';
import { Search, X, Github, FileText, ExternalLink } from 'lucide-react';
import { projects } from '../../data/projectsData';

const ProjectsShowcase = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

 

  const tags = ['All', 'Research Paper', 'Software', 'Hardware', 'AI/ML'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'All' || project.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
            z-index:999;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            z-index:999;
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .projects-page {
         position: relative;
          z-index:999;
          min-height: 100vh;
          
          padding: 60px 20px;
        }

        .projects-container {
        z-index:999;
          max-width: 1400px;
          margin: 0 auto;
        }

        .projects-header {
          z-index:999;
          text-align: center;
          margin-bottom: 50px;
          animation: fadeInUp 0.8s ease-out;
        }

        .projects-title {
          z-index:999;
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
          margin-bottom: 10px;
        }

        .projects-subtitle {
          color: #b0b0b0;
          font-size: 1rem;
        }

        .search-filter-section {
          margin-bottom: 40px;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .search-bar {
          display: flex;
          align-items: center;
          background: #1a1a2e;
          border: 1px solid #2a2a3e;
          border-radius: 8px;
          padding: 12px 20px;
          margin-bottom: 20px;
          transition: border-color 0.3s ease;
        }

        .search-bar:focus-within {
          border-color: #3b82f6;
        }

        .search-icon {
          color: #6b6b7b;
          margin-right: 10px;
        }

        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: white;
          font-size: 1rem;
        }

        .search-input::placeholder {
          color: #6b6b7b;
        }

        .tags-container {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .tag-button {
          padding: 10px 20px;
          background: #1a1a2e;
          border: 1px solid #2a2a3e;
          border-radius: 6px;
          color: #b0b0b0;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .tag-button:hover {
          background: #2a2a3e;
          border-color: #3b82f6;
        }

        .tag-button.active {
          background: #3b82f6;
          border-color: #3b82f6;
          color: white;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 40px;
        }

         @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .project-card {
          background: #1a1a2e;
          border-radius: 12px;
          overflow: hidden;
           transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          cursor: pointer;
          animation: scaleIn 0.5s ease-out ;
          border: 1px solid rgba(59, 130, 246, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.2s; }
        .project-card:nth-child(3) { animation-delay: 0.3s; }
        .project-card:nth-child(4) { animation-delay: 0.4s; }
        .project-card:nth-child(5) { animation-delay: 0.5s; }
        .project-card:nth-child(6) { animation-delay: 0.6s; }

        .project-card:hover {
         transform: translateY(-12px) scale(1.02);
         box-shadow: 
         0 20px 40px rgba(59, 130, 246, 0.15),
         0 0 20px rgba(59, 130, 246, 0.25),
         0 0 0 1px rgba(59, 130, 246, 0.2);
         border-color: rgba(59, 130, 246, 0.4);
        }
         

        .project-image {
          height: 180px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
        }

        .project-tag-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 6px 12px;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          font-size: 0.75rem;
          color: white;
        }

        .project-content {
          padding: 20px;
        }

        .project-category {
          font-size: 0.8rem;
          color: #3b82f6;
          margin-bottom: 8px;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: bold;
          color: white;
          margin-bottom: 8px;
        }

        .project-author {
          font-size: 0.85rem;
          color: #b0b0b0;
          margin-bottom: 12px;
        }

        .project-description {
          font-size: 0.9rem;
          color: #9b9b9b;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .view-project-btn {
          width: 100%;
          padding: 12px;
          background: #3b82f6;
          border: none;
          border-radius: 6px;
          color: white;
          font-size: 0.95rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .view-project-btn:hover {
          background: #2563eb;
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }

        .pagination-btn {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1a1a2e;
          border: 1px solid #2a2a3e;
          border-radius: 6px;
          color: #b0b0b0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pagination-btn:hover:not(.active) {
          background: #2a2a3e;
          border-color: #3b82f6;
        }

        .pagination-btn.active {
          background: #3b82f6;
          border-color: #3b82f6;
          color: white;
        }

        .pagination-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          background: #1a1a2e;
          border-radius: 16px;
          max-width: 700px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: scaleIn 0.3s ease-out;
        }

        .modal-header {
          height: 200px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          border-radius: 16px 16px 0 0;
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.5);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s ease;
          color: white;
        }

        .modal-close-btn:hover {
          background: rgba(0, 0, 0, 0.7);
        }

        .modal-body {
          padding: 30px;
        }

        .modal-title {
          font-size: 2rem;
          font-weight: bold;
          color: white;
          margin-bottom: 10px;
        }

        .modal-author {
          color: #3b82f6;
          margin-bottom: 20px;
        }

        .modal-section {
          margin-bottom: 25px;
        }

        .modal-section-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          margin-bottom: 10px;
        }

        .modal-text {
          color: #b0b0b0;
          line-height: 1.6;
        }

        .modal-actions {
          display: flex;
          gap: 15px;
        }

        .modal-action-btn {
          flex: 1;
          padding: 14px;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .modal-action-btn.primary {
          background: #3b82f6;
          color: white;
        }

        .modal-action-btn.primary:hover {
          background: #2563eb;
          transform: translateY(-2px);
        }

        .modal-action-btn.secondary {
          background: #2a2a3e;
          color: white;
        }

        .modal-action-btn.secondary:hover {
          background: #3a3a4e;
        }

        @media (max-width: 768px) {
          .projects-title {
            font-size: 2rem;
            z-index:999;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .modal-title {
            font-size: 1.5rem;
          }

          .modal-body {
            padding: 20px;
          }

          .modal-actions {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="projects-page">
        <div className="projects-container">
          <div className="projects-header">
            <h1 className="projects-title"> Research & Projects</h1>
            <p className="projects-subtitle">
              Highlighting the club's commitment to innovation and acknowledging the hard work of its members.
            </p>
          </div>

          <div className="search-filter-section">
            <div className="search-bar">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search by project, author, or keyword..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>

            <div className="tags-container">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedTag(tag);
                    setCurrentPage(1);
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {currentProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div
                  className="project-image"
                  style={{ background: project.gradient }}
                >
                  <span className="project-tag-badge">{project.tag}</span>
                </div>
                <div className="project-content">
                  <div className="project-category">
                    {project.type === 'research' ? 'Research Paper' : 'Software'}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-author">By {project.author}</p>
                  <p className="project-description">{project.description}</p>
                  <button
                    className="view-project-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-btn"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                ‹
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className="pagination-btn"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                ›
              </button>
            </div>
          )}
        </div>

        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div
                className="modal-header"
                style={{ background: selectedProject.gradient }}
              >
                <button
                  className="modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                >
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
                    onClick={() => window.open(selectedProject.link, '_blank')}
                  >
                    {selectedProject.type === 'research' ? (
                      <>
                        <FileText size={20} />
                        Read Paper
                      </>
                    ) : (
                      <>
                        <Github size={20} />
                        View on GitHub
                      </>
                    )}
                  </button>
                  <button
                    className="modal-action-btn secondary"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectsShowcase;