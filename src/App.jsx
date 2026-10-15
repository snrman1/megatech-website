


import { useState } from "react";
import "./index.css";

const services = [
  {
    number: "01",
    icon: "✳",
    title: "Website Development",
    description:
      "Professional, responsive websites that showcase your business and turn visitors into customers.",
    tags: ["Business websites", "Landing pages", "Portfolios"],
  },
  {
    number: "02",
    icon: "▦",
    title: "Web Applications",
    description:
      "Interactive web applications designed around your workflows, customers, and business goals.",
    tags: ["Dashboards", "Booking systems", "Portals"],
  },
  {
    number: "03",
    icon: "⌘",
    title: "Business Software",
    description:
      "Practical digital tools that help businesses organize their operations and work more efficiently.",
    tags: ["Management systems", "Automation", "Custom tools"],
  },
  {
    number: "04",
    icon: "</>",
    title: "IT & Technical Support",
    description:
      "Reliable technical assistance to help individuals and businesses solve everyday technology problems.",
    tags: ["Software setup", "Troubleshooting", "IT support"],
  },
];

const projects = [
  {
    number: "01",
    title: "Hotel Management System",
    category: "Business Software",
    description:
      "A hotel management solution designed to organize reservations, room management, reporting, and daily hotel operations.",
    image: "/projects/hotel-management.png",
    status: "Project Preview",
  },
  {
    number: "02",
    title: "Business Website",
    category: "Web Development",
    description:
      "A responsive business website designed to showcase services and help customers connect with a business.",
    image: "/projects/booking.png",
    status: "Project Preview",
  },
  {
    number: "03",
    title: "POS Applicattion",
    category: "Business Software",
    description:
      "A  web/system application designed to streamline Point of Sales for restaurants",
    image: "/projects/pos.png",
    status: "Screenshot Preview",
  },
];



function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Replace this with your WhatsApp number in international format.
 
const whatsappNumber = "233545221112";

const getWhatsAppLink = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">&lt;/&gt;</span>
            <span>
              MEGA<span className="brand-light">TECH</span>
              <small>TECHNOLOGY & DIGITAL SOLUTIONS</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#work" onClick={closeMenu}>Our work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Let's talk <span>↗</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="status-dot" />
                YOUR IDEAS. OUR TECHNOLOGY.
              </div>

              <h1>
                We build digital solutions for{" "}
                <span className="text-blue">ambitious businesses.</span>
              </h1>

              <p className="hero-description">
                From modern websites to custom business applications,
                we help turn your ideas into practical digital experiences.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Start a project <span>↗</span>
                </a>
                <a className="button button-secondary" href="#services">
                  Explore services <span>↓</span>
                </a>
              </div>

              <div className="hero-note">
                <span className="note-line" />
                Built with purpose. Designed for growth.
              </div>
            </div>

            <div className="hero-visual" aria-label="Abstract software development illustration">
              <div className="visual-glow" />
              <div className="code-window">
                <div className="window-top">
                  <div className="window-dots">
                    <i /><i /><i />
                  </div>
                  <span>your-next-idea.jsx</span>
                  <span className="window-menu">•••</span>
                </div>

                <div className="code-content">
                  <div className="code-line">
                    <span className="line-no">01</span>
                    <span><span className="code-purple">const</span> idea = {"{"}</span>
                  </div>
                  <div className="code-line">
                    <span className="line-no">02</span>
                    <span className="indent">
                      name: <span className="code-green">"Your business"</span>,
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-no">03</span>
                    <span className="indent">
                      vision: <span className="code-green">"Something great"</span>,
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-no">04</span>
                    <span className="indent">
                      potential: <span className="code-orange">Infinity</span>,
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-no">05</span>
                    <span>{"};"}</span>
                  </div>
                  <div className="code-line code-gap">
                    <span className="line-no">06</span>
                    <span><span className="code-purple">function</span> <span className="code-blue">buildFuture</span>() {"{"}</span>
                  </div>
                  <div className="code-line">
                    <span className="line-no">07</span>
                    <span className="indent">
                      <span className="code-purple">return</span> createSolution(idea);
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-no">08</span>
                    <span>{"}"}</span>
                  </div>
                  <div className="code-line code-gap">
                    <span className="line-no">09</span>
                    <span className="code-muted">// Let's build it together.</span>
                  </div>
                </div>

                <div className="window-footer">
                  <span><span className="status-dot" /> Ready to build</span>
                  <span>MEGATECH ©</span>
                </div>
              </div>

              <div className="floating-card floating-top">
                <span className="float-icon">✳</span>
                <span>
                  <strong>Ideas to reality</strong>
                  <small>Digital innovation</small>
                </span>
              </div>

              <div className="floating-card floating-bottom">
                <span className="float-check">✓</span>
                <span>
                  <strong>Built around you</strong>
                  <small>Solutions that fit</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <span>WHAT WE DO</span>
            <div>Websites</div>
            <i />
            <div>Web applications</div>
            <i />
            <div>Business software</div>
            <i />
            <div>IT solutions</div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">OUR SERVICES</span>
                <h2>Technology that works <span className="text-blue">for you.</span></h2>
              </div>
              <p>
                Practical digital solutions, built around the real needs
                of your business.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-top">
                    <span className="service-icon">{service.icon}</span>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="tag-list">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a
                    className="text-link"
                    href="#contact"
                    aria-label={`Ask about ${service.title}`}
                  >
                    Discuss your project <span>↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">SELECTED WORK</span>
                <h2>Ideas deserve <span className="text-blue">great execution.</span></h2>
              </div>
              <p>
                A look at the kinds of digital products and systems
                we can create for our clients.
              </p>
            </div>

            <div className="work-grid">
              {projects.map((project) => (
                <article className="work-card" key={project.number}>
                  
<div className={`project-art project-art-${project.number}`}>
  {project.image ? (
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      className="project-screenshot"
      loading="lazy"
    />
  ) : (
    <div className="project-placeholder">
      <span className="placeholder-icon">&lt;/&gt;</span>
      <span>{project.status}</span>
    </div>
  )}

  <span className="project-overlay-label">
    {project.image ? "SCREENSHOT PREVIEW" : project.status.toUpperCase()}
  </span>
</div>

                  <div className="work-card-copy">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>

           <p className="portfolio-note">
  Explore selected project previews from MEGATECH. Full live demos
  will be added as projects are published.
</p>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="about-icon">&lt;/&gt;</div>
              <span className="about-orbit orbit-one" />
              <span className="about-orbit orbit-two" />
              <div className="about-caption">
                <span className="status-dot" />
                TECHNICAL THINKING. HUMAN SOLUTIONS.
              </div>
            </div>

            <div className="about-copy">
              <span className="eyebrow">ABOUT MEGATECH</span>
              <h2>Good technology starts with <span className="text-blue">understanding people.</span></h2>
              <p>
                MEGATECH is a technology brand focused on helping individuals
                and businesses solve problems through software, websites,
                and practical IT solutions.
              </p>
              <p>
                Our approach is simple: understand the problem, build a
                thoughtful solution, and make technology easier to use.
              </p>
              <a className="text-link" href="#contact">
                Tell us what you need <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-panel">
            <div>
              <span className="eyebrow eyebrow-light">HAVE A PROJECT IN MIND?</span>
              <h2>Let's turn your idea into something real.</h2>
              <p>
                Tell us what you're planning. We'll discuss your needs
                and the next steps.
              </p>
            </div>
            <div className="contact-actions">
              <a
                className="button button-white"
               href={getWhatsAppLink(
               "Hello MEGATECH, I am interested in your services. Please tell me more."
                 )}
                 target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp <span>↗</span>
              </a>
              
              


            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">&lt;/&gt;</span>
            <span>
              MEGA<span className="brand-light">TECH</span>
              <small>TECHNOLOGY & DIGITAL SOLUTIONS</small>
            </span>
          </a>
          <p>Building useful digital experiences.</p>
          <span>© {new Date().getFullYear()} MEGATECH</span>
        </div>
      </footer>
    </>
  );
}

export default App;
