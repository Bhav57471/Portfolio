// Importing required libraries
import React from 'react';
import './App.css'; // Add custom CSS for styling
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons

const App = () => (
  <div className="app">
    {/* Header Section */}
    <header className="header">
      <h1>M D Ghouse Mohinuddin</h1>
      <p>Dedicated Computer Science & Engineering student with a passion for innovation and technology.</p>
      <div className="social-icons">
        <a href="https://github.com/mdg157sonu" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/mdg157sonu" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>
    </header>

    {/* About Section */}
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>
        I am an adaptable and goal-oriented Computer Science & Engineering student specializing in Full-Stack Development.
        Seeking opportunities to leverage my technical skills and contribute to impactful projects.
      </p>
    </section>

    {/* Education Section */}
    <section id="education" className="section">
      <h2>Education</h2>
      <ul>
        <li><strong>St. Peter’s Engineering College</strong> - B.Tech in Computer Science (2021-2025) - CGPA: 6.35</li>
        <li><strong>St. Mary's Junior College</strong> - Senior Secondary (2019-2021) - Percentage: 50%</li>
        <li><strong>Vignana Vardini High School</strong> - SSC (2019) - CGPA: 6.5</li>
      </ul>
    </section>

    {/* Projects Section */}
    <section id="projects" className="section">
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>CareerCraft</strong>
          <p>
            A full-stack web application to streamline resume creation and optimization, ensuring tailored resumes align with job descriptions.
          </p>
        </li>
        <li>
          <strong>Cuisine Creator</strong>
          <p>
            A web platform for creating, sharing, and discovering recipes. Tools Used: React.js, Spring Boot, MySQL.
          </p>
        </li>
        <li>
          <strong>Recipe Maker</strong>
          <p>
            An innovative recipe-sharing platform supporting audio recipes and multilingual features.
          </p>
        </li>
      </ul>
    </section>

    {/* Technical Skills Section */}
    <section id="skills" className="section">
      <h2>Technical Skills</h2>
      <ul>
        <li>Programming: Python, Java</li>
        <li>Web Technologies: HTML, CSS, JavaScript, React.js</li>
        <li>Frameworks & Tools: Spring Boot, Git, Visual Studio Code</li>
        <li>Databases: MySQL</li>
      </ul>
    </section>

    {/* Certifications Section */}
    <section id="certifications" className="section">
      <h2>Certifications</h2>
      <ul>
        <li>Cloud Computing Fundamentals - Google</li>
        <li>Java Certification - DataFlair</li>
        <li>Google Data Analytics Certification</li>
      </ul>
    </section>

    {/* Achievements Section */}
    <section id="achievements" className="section">
      <h2>Achievements</h2>
      <ul>
        <li>Lead Sports Member - St. Peter’s Engineering College</li>
        <li>1st Prize in Basketball Match - SPEC</li>
        <li>Presented Papers at SPEC</li>
      </ul>
    </section>

    {/* Strengths Section */}
    <section id="strengths" className="section">
      <h2>Strengths</h2>
      <ul>
        <li>Strong communication and interpersonal skills</li>
        <li>Team leadership and collaboration</li>
        <li>Adaptability to new environments</li>
        <li>Efficient under pressure and meeting deadlines</li>
        <li>Eagerness to learn and grow professionally</li>
      </ul>
    </section>
  </div>
);

export default App;
