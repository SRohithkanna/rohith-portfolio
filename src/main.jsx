import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowRight, Github, Linkedin, Mail, ExternalLink,
  Code2, BrainCircuit, Layers3, Database, Terminal, Download, Menu
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Rohith Kanna S",
  email: "srohithkanna@gmail.com",
  github: "https://github.com/SRohithkanna",
  linkedin: "www.linkedin.com/in/rohith-kanna-6969a3277",
  // Replace the LinkedIn placeholder above with your profile URL before publishing.
};

const projects = [
  {
    number: "01",
    name: "CareerForge",
    type: "AI CAREER INTELLIGENCE PLATFORM",
    description:
      "A career intelligence platform that compares resumes with job descriptions, calculates semantic similarity, identifies skill gaps, and generates personalized recommendations.",
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "Gemini API"],
    github: "https://github.com/SRohithkanna/CareerForge.git",
    note: "",
  },
  {
    number: "02",
    name: "RAG 2.0 Search Engine",
    type: "RETRIEVAL-AUGMENTED GENERATION",
    description:
      "A document question-answering workflow with PDF ingestion, structured chunking, MiniLM embeddings, FAISS retrieval, and Gemini-generated responses with document citations.",
    stack: ["Python", "LangChain", "MiniLM", "FAISS", "Gemini", "Streamlit"],
    github: "https://github.com/SRohithkanna/RAG_2.0.git",
    note: "",
  },
  {
    number: "03",
    name: "Computer Vision Image Search",
    type: "OBJECT DETECTION & SEARCH",
    description:
      "An image search application that indexes detected object classes, bounding-box counts, and confidence scores, then supports Boolean filters and per-class thresholds.",
    stack: ["Python", "YOLOv11", "Streamlit", "JSON"],
    github: "https://github.com/SRohithkanna/Yolo_Image_Search.git",
    note: "",
  },
  {
    number: "04",
    name: "Web Connector AI",
    type: "FULL-STACK AI APPLICATION",
    description:
      "A modular MERN application with authentication and Gemini-powered workflows for profile, resume, and interview analysis, alongside personalized learning roadmaps.",
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "Gemini API"],
    github: "https://github.com/SRohithkanna/WebConnect-AI.git",
    note: "",
  },
];

const skillGroups = [
  { icon: Code2, title: "Programming", items: ["Python", "C++", "Java", "JavaScript", "SQL"] },
  { icon: BrainCircuit, title: "AI / Machine Learning", items: ["Generative AI", "LLM Integration", "Embeddings", "RAG", "YOLO", "NumPy", "Pandas"] },
  { icon: Layers3, title: "Frontend & Backend", items: ["React.js", "Redux", "Vite", "Node.js", "Express.js", "FastAPI", "REST APIs"] },
  { icon: Database, title: "Data & Tools", items: ["PostgreSQL", "MongoDB", "SQLite", "SQLAlchemy", "Git", "GitHub", "Postman", "AWS"] },
];

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><span className="label-line" /><span>{children}</span></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Rohith Kanna home">RK<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><Menu size={21} /></button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href={profile.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
            <p className="eyebrow">AI ENGINEERING · FULL-STACK DEVELOPMENT</p>
            <h1>Building useful<br />things with <span>intelligence.</span></h1>
            <p className="hero-description">
              I'm <strong>Rohith Kanna</strong>, an AI & Data Science undergraduate interested in building practical AI-powered products and thoughtful web experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-light" href="#contact">Get in touch <ArrowRight size={16} /></a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href={`mailto:${profile.email}`}><Mail size={17} /> Email</a>
            </div>
          </div>
          <div className="hero-aside" aria-label="Portfolio introduction">
            <div className="aside-index">PORTFOLIO / 2026</div>
            <div className="hero-art">
              <div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div>
              <div className="art-ring ring-one" /><div className="art-ring ring-two" />
              <div className="art-center">RK<span>.</span></div>
              <div className="art-caption">Curiosity → Code → Impact</div>
            </div>
            <div className="aside-bottom"><span>CHENNAI, INDIA</span><span>01 / 05</span></div>
          </div>
          <div className="hero-bottom-note"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
        </section>

        <section className="section-wrap about-section" id="about">
          <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
          <div className="about-grid">
            <h2>Engineer by training.<br /><span>Builder by curiosity.</span></h2>
            <div className="about-text">
              <p>I'm pursuing a B.Tech in Artificial Intelligence and Data Science at Shiv Nadar University, Chennai. I enjoy taking ideas from a problem statement to a working application.</p>
              <p>My work spans LLM-powered tools, retrieval-augmented generation, computer vision, and full-stack development. I care about clear architecture, useful features, and understanding how things work under the hood.</p>
              <div className="education-line"><span className="education-mark">EDU</span><div><strong>Shiv Nadar University, Chennai</strong><small>B.Tech · Artificial Intelligence and Data Science · 2023–Present</small></div></div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <SectionLabel number="02">TOOLS OF THE TRADE</SectionLabel>
            <div className="section-heading-row"><h2>Skills & <span>toolkit.</span></h2><p>A practical stack for building, integrating, and shipping software.</p></div>
            <div className="skills-grid">
              {skillGroups.map(({ icon: Icon, title, items }, i) => (
                <article className="skill-card" key={title}>
                  <div className="skill-card-top"><span>0{i + 1}</span><Icon size={21} strokeWidth={1.6} /></div>
                  <h3>{title}</h3>
                  <div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <SectionLabel number="03">SELECTED WORK</SectionLabel>
          <div className="section-heading-row projects-heading"><h2>Things I've <span>built.</span></h2><p>A selection of projects across AI, computer vision, and web development.</p></div>
          <div className="projects-list">
            {projects.map(project => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
                </div>
                <div className="project-link-wrap">
                  <a className="project-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}><ArrowUpRightIcon /></a>
                  {project.note && <small>{project.note}</small>}
                </div>
              </article>
            ))}
          </div>
          <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">Explore GitHub <ArrowRight size={16} /></a>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-wrap">
            <SectionLabel number="04">WHERE I'VE LEARNED</SectionLabel>
            <div className="section-heading-row"><h2>Experience & <span>growth.</span></h2><p>Learning by contributing to real development work and collaborative teams.</p></div>
            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-date">JUN 2026 — SEP 2026</div>
                <div className="timeline-marker" />
                <div className="timeline-content"><div className="timeline-title"><h3>Full Stack Developer Intern</h3><span>REMOTE</span></div><p className="company">CandiClie Consultancy</p><p>Worked on full-stack MERN modules for a CRM product, including REST API design, MongoDB schemas, React interfaces, and activity and notification features.</p><div className="mini-tags"><span>React</span><span>Node.js</span><span>Express</span><span>MongoDB</span></div></div>
              </article>
              <article className="timeline-item">
                <div className="timeline-date">JUN 2025 — JUL 2025</div>
                <div className="timeline-marker" />
                <div className="timeline-content"><div className="timeline-title"><h3>Software Development Intern</h3><span>INTERNSHIP</span></div><p className="company">Mayvel (previously SHLOKLABS)</p><p>Built a searchable internal IT knowledge base using React and Vite, and supported quality assurance through test cases, bug reports, and unit and integration testing.</p><div className="mini-tags"><span>React</span><span>Vite</span><span>Testing</span><span>Agile</span></div></div>
              </article>
            </div>
          </div>
        </section>

        <section className="education-section section-wrap">
          <SectionLabel number="05">EDUCATION & CERTIFICATIONS</SectionLabel>
          <div className="education-grid">
            <div><span className="tiny-label">2023 — PRESENT</span><h3>B.Tech, Artificial Intelligence and Data Science</h3><p>Shiv Nadar University, Chennai</p><span className="education-detail">CGPA: 7.9 / 10 </span></div>
            <div><span className="tiny-label">2021 — 2023</span><h3>Class XII · CBSE</h3><p>Maharishi International Residential School</p><span className="education-detail">90.8%</span></div>
          </div>
          <div className="certifications"><div className="cert-title"><Terminal size={18} /><span>CERTIFICATIONS</span></div><p>Building AI Assistants using OpenAI APIs <span>· Coursera, 2025</span></p><p>Introduction to Large Language Models (LLMs) <span>· Coursera, 2025</span></p></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <SectionLabel number="06">LET'S CONNECT</SectionLabel>
            <div className="contact-main"><div><p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p><h2>Let's make<br /><span>something matter.</span></h2></div><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRightIcon /></a></div>
            <div className="contact-bottom"><span>OPEN TO LEARNING, BUILDING & COLLABORATING.</span><div><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href={`mailto:${profile.email}`}><Mail size={16} /> Email</a></div></div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="wordmark" href="#home">RK<span>.</span></a><span>Designed & built with care.</span><span>© {new Date().getFullYear()} Rohith Kanna S</span></footer>
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ExternalLink size={18} strokeWidth={1.7} />;
}

createRoot(document.getElementById("root")).render(<App />);
