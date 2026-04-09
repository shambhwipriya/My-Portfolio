import React, { useEffect, useState } from 'react';
import './index.css';

// Custom SVG Icons
const IconLocation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);
const IconLinkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);
const IconCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
);
const IconLayout = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" /></svg>
);
const IconDatabase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
);
const IconAward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>
);

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav style={{ background: scrolled ? 'rgba(11, 15, 25, 0.95)' : 'rgba(11, 15, 25, 0.8)' }}>
        <div className="container nav-container">
          <a href="#" className="nav-logo">SP.</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="about" className="hero container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Hi, I'm <br /><span className="gradient-text">Shambhwi Priya</span></h1>
              <p>Computer Science undergraduate seeking an opportunity to contribute to a fast-paced tech environment and build scalable software solutions.</p>

              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">View Projects</a>
                <a href="#skills" className="btn btn-outline">My Skills</a>
              </div>

              <div className="contact-list">
                <div className="contact-item">
                  <IconLocation /> Arrah, Bihar
                </div>
                <div className="contact-item">
                  <IconPhone /> +91 7070913247
                </div>
                <div className="contact-item">
                  <IconMail /> priyashambhwi0@gmail.com
                </div>
                <div className="contact-item">
                  <IconLinkedin /> <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn Profile</a>
                </div>
              </div>
            </div>

            <div className="hero-image-container">
              <img src="/avatar.png" alt="Shambhwi Priya" className="hero-image" />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section container">
          <h2 className="section-title">Technical <span>Skills</span></h2>

          <div className="skills-grid">
            <div className="glass-card skill-category">
              <h3><IconCode /> Programming Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C</span>
                <span className="skill-tag">Python</span>
              </div>
            </div>

            <div className="glass-card skill-category">
              <h3><IconLayout /> Web Development</h3>
              <div className="skill-tags">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
              </div>
            </div>

            <div className="glass-card skill-category">
              <h3><IconDatabase /> Core Concepts</h3>
              <div className="skill-tags">
                <span className="skill-tag">Data Structures (DSA)</span>
                <span className="skill-tag">Object-Oriented Programming</span>
                <span className="skill-tag">DBMS Fundamentals</span>
              </div>
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section className="section container" style={{ paddingTop: '2rem' }}>
          <div className="glass-card">
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: 'var(--primary)' }}>My Strengths</h3>
            <div className="skill-tags">
              <span className="skill-tag" style={{ borderColor: 'var(--surface-border)' }}>Communication & Teamwork</span>
              <span className="skill-tag" style={{ borderColor: 'var(--surface-border)' }}>Dedicated & Disciplined</span>
              <span className="skill-tag" style={{ borderColor: 'var(--surface-border)' }}>Quick Learner</span>
              <span className="skill-tag" style={{ borderColor: 'var(--surface-border)' }}>Logical & Analytical Thinking</span>
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section id="education" className="section container">
          <h2 className="section-title">Education & <span>Path</span></h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-content">
                <h3>Bachelor of Technology (CSE)</h3>
                <p className="subtitle">United College of Engineering & Research, Prayagraj • Expected 2027</p>
                <p>Currently pursuing Computer Science Engineering, focusing on advanced concepts, system design, and scalable architectures.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-content">
                <h3>Intermediate</h3>
                <p className="subtitle">Rajkiyakrit Sri Jain Pathshala, Arrah • 2023</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-content">
                <h3>High School</h3>
                <p className="subtitle">DAV Public School, Dhanpura, Arrah • 2021</p>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Projects */}
        <section id="projects" className="section container">
          <h2 className="section-title">Academic <span>Projects</span></h2>

          <div className="skills-grid">
            <div className="glass-card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Logical Problem Solving</h3>
              <p style={{ color: 'var(--text-muted)' }}>Implemented logical solutions to diverse problem statements utilizing structured and object-oriented programming approaches.</p>
            </div>

            <div className="glass-card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Core Programming</h3>
              <p style={{ color: 'var(--text-muted)' }}>Developed fundamental applications using Java and Python as part of extensive academic coursework, focusing on algorithm efficiency.</p>
            </div>

            <div className="glass-card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Database Management</h3>
              <p style={{ color: 'var(--text-muted)' }}>Designed and executed robust SQL queries for comprehensive database operations including insert, update, delete, and advanced retrieval.</p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="section container">
          <h2 className="section-title"><IconAward style={{ display: 'inline', verticalAlign: 'middle', marginRight: '10px', color: 'var(--primary)', width: '36px', height: '36px' }} /> Certifications & <span>Learning</span></h2>
          <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {[
                "Accenture Innovation Challenge Bootcamp – Hack2Skill",
                "UHack 3.0 – UCER Prayagraj",
                "HackDiwas 2.0 – United University",
                "Pitching Event 2025 – E-Cell UCER",
                "PBEL Virtual Internship in Cyber Security – IBM",
                "Introduction to IoT and Digital Transformation – Cisco"
              ].map((cert, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ color: 'var(--secondary)', marginTop: '2px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  </div>
                  <span style={{ color: 'var(--text-main)' }}>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>

      <footer>
        <div className="container">
          <h2 className="nav-logo" style={{ fontSize: '2rem', marginBottom: '1rem' }}>SP.</h2>
          <p>© {new Date().getFullYear()} Shambhwi Priya. All rights reserved.</p>
          <div className="social-links">
            <a href="#">LinkedIn</a>
            <a href="mailto:priyashambhwi0@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
