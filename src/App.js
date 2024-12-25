// Importing required libraries
import React from 'react';
import './App.css'; // Add custom CSS for styling
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons

const App = () => (
  <div className="app">
    {/* Header Section */}
    <header className="header">
      <h1>Alluri Bhavana</h1>
      <p>Eager, enthusiastic, and motivated Computer Science & Engineering student.</p>
      <div className="social-icons">
        <a href="https://github.com/Bhav57471" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/alluribhavana" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>
    </header>

    {/* About Section */}
    <section id="about" className="section">
      <h2>Professional Summary</h2>
      <p>
        Eager, enthusiastic, and motivated Computer Science & Engineering student with a passion for
        software development and technology. Seeking a challenging position where I can utilize my technical
        skills and contribute to the growth and success of an organization.
      </p>
    </section>

    {/* Education Section */}
    <section id="education" className="section">
      <h2>Education</h2>
      <ul>
        <li><strong>ST. Peter’s Engineering College</strong> - B.Tech in Computer Science (2021-2025) - CGPA: 8.2</li>
        <li><strong>Sri Chaitanya Junior Kalashala</strong> - Intermediate (2019-2021) - Marks: 828/1000</li>
        <li><strong>S.B.R.S.S Jain High School</strong> - SSC (2019) - CGPA: 8.8</li>
      </ul>
    </section>

    {/* Projects Section */}
    <section id="projects" className="section">
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>Portfolio Website</strong>
          <p>
            Designed and developed a personal portfolio website using HTML, CSS, and React.js which showcases
            all my projects and skills. <a href="https://github.com/Bhav57471/My-portfolio" target="_blank" rel="noopener noreferrer">Link to Demo</a>
          </p>
        </li>
        <li>
          <strong>Cuisine Creator</strong>
          <p>
            A web platform for users to create, share, and discover recipes. Tools Used: HTML, CSS, React.js.
            <a href="https://github.com/Bhav57471/FN" target="_blank" rel="noopener noreferrer">Link to Demo</a>
          </p>
        </li>
        <li>
          <strong>Dharma Sweets Shop</strong>
          <p>
            Developed a website for Dharma Sweet Shop using HTML and CSS.
            <a href="https://github.com/Bhav57471/DharmaSweeetshop" target="_blank" rel="noopener noreferrer">Link to Demo</a>
          </p>
        </li>
        <li>
          <strong>Guesthouse Website</strong>
          <p>
            Built a modern, responsive web application with HTML, CSS, and React.js.
            <a href="https://github.com/Bhav57471/Guesthouse" target="_blank" rel="noopener noreferrer">Link to Demo</a>
          </p>
        </li>
      </ul>
    </section>

    {/* Technical Skills Section */}
    <section id="skills" className="section">
      <h2>Technical Skills</h2>
      <ul>
        <li>Programming Languages: CORE Java, HTML, CSS</li>
        <li>Frameworks: React.js</li>
        <li>Databases: MySQL</li>
        <li>Dev Tools: Excel, Eclipse, Visual Studio Code, Git</li>
      </ul>
    </section>

    {/* Certifications Section */}
    <section id="certifications" className="section">
      <h2>Certifications</h2>
      <ul>
        <li>Certification from Dataflair in JAVA</li>
        <li>Google Cloud Foundation Certification</li>
        <li>Google Data Analytics Certification</li>
      </ul>
    </section>

    {/* Achievements Section */}
    <section id="achievements" className="section">
      <h2>Achievements</h2>
      <ul>
        <li>Board Member in Shutterbugs Club</li>
        <li>Student Coordinator in NSS Club</li>
        <li>Participated in Cheriyal Painting organized by SPIC MACAY Heritage Club</li>
        <li>Participated in HACKTOPIA by GNI</li>
        <li>Hackathon participant in SPEC Fiesta 2024</li>
      </ul>
    </section>

    {/* Strengths Section */}
    <section id="strengths" className="section">
      <h2>Strengths</h2>
      <ul>
        <li>Fast Learning</li>
        <li>Team Leading Skills</li>
        <li>Adapting to any environment</li>
        <li>Ability to meet deadlines</li>
        <li>Willingness to work in rotational shifts</li>
        <li>Working well under pressure</li>
      </ul>
    </section>
  </div>
);

export default App;
