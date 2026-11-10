import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Cloud,
  Code2,
  Cpu,
  Globe2,
  Headphones,
  Layers3,
  Mail,
  Menu,
  Play,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  UsersRound,
  X,
  type LucideIcon,
} from "lucide-react";

const heroArt = `${import.meta.env.BASE_URL}hero.png`;

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services", hasMenu: true },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const services: {
  icon: LucideIcon;
  title: string;
  description: string;
  number: string;
}[] = [
  {
    icon: Code2,
    title: "Web & Software Development",
    description: "Modern, scalable digital products shaped around the way you work.",
    number: "01",
  },
  {
    icon: Cloud,
    title: "Cloud & IT Infrastructure",
    description: "Secure, resilient foundations that grow with your business.",
    number: "02",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description: "Put intelligent tools to work on the tasks that slow you down.",
    number: "03",
  },
  {
    icon: Headphones,
    title: "IT Support & Consulting",
    description: "Clear advice and hands-on support, right when you need it.",
    number: "04",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Turn better online experiences into lasting customer relationships.",
    number: "05",
  },
];

const principles = [
  "Technology that fits your business—not the other way around.",
  "Thoughtful delivery, clear communication, and dependable support.",
  "A long-term partner for every stage of your digital journey.",
];

const projects = [
  {
    type: "Digital commerce",
    title: "A smoother way to shop",
    copy: "A streamlined storefront concept built to make discovery, checkout, and day-to-day management feel effortless.",
    mark: "01",
    accent: "blue",
    tags: ["E-commerce", "Experience design"],
  },
  {
    type: "Cloud infrastructure",
    title: "Ready for the next stage",
    copy: "A resilient cloud foundation concept that brings essential systems together and gives teams room to grow.",
    mark: "02",
    accent: "violet",
    tags: ["Cloud", "Modernization"],
  },
  {
    type: "Intelligent operations",
    title: "More time for meaningful work",
    copy: "An AI-assisted workflow concept designed to simplify repetitive support tasks and keep people in control.",
    mark: "03",
    accent: "cyan",
    tags: ["AI & automation", "Workflow"],
  },
];

const articles = [
  {
    category: "AI & automation",
    read: "A practical starting point",
    title: "Where can AI make a real difference in your business?",
    copy: "A useful first step is often smaller than you think: start with the work that repeats.",
  },
  {
    category: "Cloud & infrastructure",
    read: "Building for resilience",
    title: "A clearer way to think about your cloud foundations",
    copy: "Security, flexibility, and day-to-day reliability work best when they’re designed together.",
  },
  {
    category: "Digital growth",
    read: "Better online experiences",
    title: "The details that make a digital experience feel effortless",
    copy: "Good digital products remove friction quietly, from the first click to the final follow-up.",
  },
];

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="ARB Tech Solutions home">
      <svg className="brand-orbit" viewBox="0 0 76 50" aria-hidden="true">
        <path d="M8 38C18 13 48 2 65 9c11 5 4 20-13 30C39 47 21 49 8 43" />
      </svg>
      <span className="brand-word">ARB</span>
      <span className="brand-subtitle">TECH SOLUTIONS</span>
    </a>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="section-label">
      <span className="section-label-dot" />
      {children}
    </p>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (!storyOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setStoryOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [storyOpen]);

  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} className="nav-link" href={link.href}>
                {link.label}
                {link.hasMenu && <span className="nav-chevron" aria-hidden="true">⌄</span>}
              </a>
            ))}
          </nav>
          <a className="header-quote" href="#contact">
            <span className="quote-icon"><ArrowUpRight size={17} strokeWidth={2.4} /></span>
            Get a Quote
          </a>
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
        {menuOpen && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}<ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
            <a className="mobile-nav-quote" href="#contact" onClick={closeMenu}>
              Get a Quote<ArrowRight size={17} aria-hidden="true" />
            </a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <img
            className="hero-art"
            src={heroArt}
            alt="A glowing digital globe above a laptop in a modern, blue-lit technology workspace"
          />
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="hero-badge"><Sparkles size={15} /> Innovative. Reliable. Scalable.</div>
              <h1 id="hero-title">
                <span className="hero-brandline"><span>ARB</span> <span className="gradient-text">Tech Solutions</span></span>
                <span className="hero-headline">Building Smarter Businesses Through Technology.</span>
              </h1>
              <p className="hero-description">
                We design, develop, and deploy digital solutions that move your business forward—from websites and software to AI automation and IT support.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#services">
                  Explore Our Services<ArrowRight size={18} />
                </a>
                <button className="button button-ghost" type="button" onClick={() => setStoryOpen(true)}>
                  <span className="play-icon"><Play size={13} fill="currentColor" /></span>
                  Watch Our Story
                </button>
              </div>
              <div className="hero-footnote">
                <span className="hero-footnote-line" />
                <span>Technology, made useful.</span>
              </div>
            </div>
            <div className="hero-orbit-label" aria-hidden="true">
              <span>YOUR TECH PARTNER</span>
              <strong>for a smarter<br /><em>tomorrow.</em></strong>
              <i />
            </div>
            <a className="hero-scroll" href="#services" aria-label="Scroll to services">
              <span>Scroll to explore</span><span className="scroll-track"><span /></span>
            </a>
          </div>
        </section>

        <section className="services-section section-pad" id="services" aria-labelledby="services-title">
          <div className="container">
            <div className="section-heading services-heading">
              <div>
                <SectionLabel>What we do</SectionLabel>
                <h2 id="services-title">Technology that <span className="gradient-text">moves you forward.</span></h2>
              </div>
              <p>From the first idea to the daily details, we bring the people, systems, and tools together to make progress feel possible.</p>
            </div>
            <div className="services-grid">
              {services.map(({ icon: Icon, title, description, number }) => (
                <a className="service-card" href="#contact" key={title}>
                  <span className="service-number">{number}</span>
                  <span className="service-icon"><Icon size={28} strokeWidth={1.7} /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="service-arrow" aria-label={`Ask about ${title}`}><ArrowUpRight size={18} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="ARB Tech Solutions by the numbers">
          <div className="container trust-grid">
            <div className="trust-item">
              <span className="trust-icon"><UsersRound size={34} fill="currentColor" strokeWidth={1.4} /></span>
              <div><strong>100+</strong><span>Happy clients</span></div>
            </div>
            <div className="trust-item">
              <span className="trust-icon"><ShieldCheck size={38} fill="currentColor" strokeWidth={1.7} /></span>
              <div><strong>99.9%</strong><span>Uptime guarantee</span></div>
            </div>
            <div className="trust-item">
              <span className="trust-icon"><Globe2 size={38} strokeWidth={1.7} /></span>
              <div><strong>Global reach</strong><span>Worldwide support</span></div>
            </div>
            <div className="trust-item trust-item-last">
              <span className="trust-icon"><Layers3 size={36} strokeWidth={1.7} /></span>
              <div><strong>A trusted tech partner</strong><span>For businesses & individuals</span></div>
            </div>
          </div>
        </section>

        <section className="about-section section-pad" id="about" aria-labelledby="about-title">
          <div className="container about-layout">
            <div className="about-visual">
              <div className="about-visual-top"><span className="status-dot" /> A smarter way to work</div>
              <div className="about-visual-center">
                <div className="about-orbit orbit-one" />
                <div className="about-orbit orbit-two" />
                <div className="about-core"><Cpu size={34} strokeWidth={1.6} /></div>
                <span className="orbit-node node-one"><Code2 size={17} /></span>
                <span className="orbit-node node-two"><Cloud size={18} /></span>
                <span className="orbit-node node-three"><BrainCircuit size={18} /></span>
              </div>
              <div className="about-visual-caption">
                <span>People + process + technology</span>
                <ArrowUpRight size={18} />
              </div>
              <div className="about-visual-glow" />
            </div>
            <div className="about-copy">
              <SectionLabel>About ARB</SectionLabel>
              <h2 id="about-title">A clearer path from <span className="gradient-text">challenge to change.</span></h2>
              <p className="about-lede">Technology should make business feel simpler, not more complicated.</p>
              <p className="body-copy">ARB Tech Solutions helps ambitious teams find the right next step—then brings the expertise and dependable delivery to make it real. We listen first, build with purpose, and stay alongside you as your needs evolve.</p>
              <ul className="principle-list">
                {principles.map((principle) => (
                  <li key={principle}><span className="check-icon"><Check size={14} /></span>{principle}</li>
                ))}
              </ul>
              <a className="text-link" href="#contact">Let’s talk about what’s next<ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="portfolio-section section-pad" id="portfolio" aria-labelledby="portfolio-title">
          <div className="container">
            <div className="section-heading portfolio-heading">
              <div>
                <SectionLabel>Selected capabilities</SectionLabel>
                <h2 id="portfolio-title">Ideas made <span className="gradient-text">practical.</span></h2>
              </div>
              <p>Every business is different. Here are a few ways we can turn a technology challenge into a more useful experience.</p>
            </div>
            <div className="portfolio-grid">
              {projects.map((project) => (
                <article className={`project-card project-${project.accent}`} key={project.title}>
                  <div className="project-visual" aria-hidden="true">
                    <span className="project-counter">ARB / {project.mark}</span>
                    <div className="project-artwork">
                      {project.accent === "blue" && <div className="shop-window"><span /><span /><span /><i /><i /><b /></div>}
                      {project.accent === "violet" && <div className="cloud-stack"><Cloud size={62} strokeWidth={1.2} /><span /><span /><span /></div>}
                      {project.accent === "cyan" && <div className="workflow-art"><span /><span /><span /><i /><i /><b /></div>}
                    </div>
                    <span className="project-visual-glow" />
                  </div>
                  <div className="project-content">
                    <p className="project-type">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p className="project-copy">{project.copy}</p>
                    <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
            <p className="portfolio-note"><Sparkles size={14} /> Illustrative solution concepts—every engagement is tailored to your business.</p>
          </div>
        </section>

        <section className="insights-section section-pad" id="insights" aria-labelledby="insights-title">
          <div className="container">
            <div className="section-heading insights-heading">
              <div>
                <SectionLabel>From the journal</SectionLabel>
                <h2 id="insights-title">A little clarity for <span className="gradient-text">what’s next.</span></h2>
              </div>
              <a className="text-link insights-link" href="#contact">Talk with our team<ArrowRight size={17} /></a>
            </div>
            <div className="insights-grid">
              {articles.map((article, index) => (
                <article className="insight-card" key={article.title}>
                  <div className={`insight-art insight-art-${index + 1}`} aria-hidden="true">
                    <span className="insight-category">{article.category}</span>
                    <span className="insight-orb"><Sparkles size={20} /></span>
                    <span className="insight-mark">0{index + 1}</span>
                  </div>
                  <div className="insight-content">
                    <p className="insight-read">{article.read}</p>
                    <h3>{article.title}</h3>
                    <p>{article.copy}</p>
                    <a href="#contact" className="insight-link">Read the insight<ArrowUpRight size={16} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
          <div className="container contact-layout">
            <div className="contact-copy">
              <SectionLabel>Start a conversation</SectionLabel>
              <h2 id="contact-title">Your next chapter starts with <span className="gradient-text">one good question.</span></h2>
              <p>Tell us what you’re working toward. We’ll help you find a clear, practical next step.</p>
              <div className="contact-prompt">
                <span className="contact-prompt-icon"><Mail size={19} /></span>
                <div><strong>Prefer a quick note?</strong><span>Share a little about your project in the form and we’ll take it from there.</span></div>
              </div>
              <div className="contact-sparkle" aria-hidden="true"><span /><span /><span /></div>
            </div>
            <div className="contact-form-wrap">
              <div className="form-heading">
                <span className="form-kicker">Tell us about your project</span>
                <span className="form-step">01 <i /> 02</span>
              </div>
              {formSubmitted ? (
                <div className="form-success" role="status">
                  <span className="success-icon"><Check size={24} /></span>
                  <h3>Thanks for reaching out.</h3>
                  <p>Your inquiry is ready in this preview. This form isn’t connected to an inbox yet, so no message has been sent.</p>
                  <button className="text-link form-reset" type="button" onClick={() => setFormSubmitted(false)}>Send another inquiry<ArrowRight size={16} /></button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={submitInquiry}>
                  <label className="form-field">
                    <span>Your name <b>*</b></span>
                    <input name="name" type="text" autoComplete="name" placeholder="e.g. Alex Morgan" required />
                  </label>
                  <label className="form-field">
                    <span>Work email <b>*</b></span>
                    <input name="email" type="email" autoComplete="email" placeholder="alex@company.com" required />
                  </label>
                  <label className="form-field">
                    <span>What can we help with?</span>
                    <select name="service" defaultValue="">
                      <option value="" disabled>Select a service</option>
                      {services.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </label>
                  <label className="form-field">
                    <span>A little about your goals <b>*</b></span>
                    <textarea name="message" rows={3} placeholder="What would you like to make possible?" required />
                  </label>
                  <button className="button button-primary form-submit" type="submit">Send an inquiry<ArrowRight size={17} /></button>
                  <p className="form-privacy">This preview stores nothing and doesn’t send your details. Connect an inbox before collecting live inquiries.</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-brand-block">
            <BrandMark />
            <p>Innovative. Reliable. Scalable.<br />Technology for a smarter tomorrow.</p>
          </div>
          <div className="footer-nav-column">
            <span className="footer-title">Explore</span>
            <a href="#about">About Us</a>
            <a href="#services">Our Services</a>
            <a href="#portfolio">Portfolio</a>
          </div>
          <div className="footer-nav-column">
            <span className="footer-title">Ideas</span>
            <a href="#insights">Insights</a>
            <a href="#contact">Contact</a>
            <a href="#home">Back to top <ArrowUpRight size={13} /></a>
          </div>
          <div className="footer-cta">
            <span className="footer-title">Have a challenge in mind?</span>
            <a href="#contact" className="footer-quote">Let’s make it clearer<ArrowUpRight size={17} /></a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} ARB Tech Solutions. All rights reserved.</span>
          <span className="footer-made"><span className="status-dot" /> Built for what’s next.</span>
        </div>
      </footer>

      {storyOpen && (
        <div className="story-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setStoryOpen(false)}>
          <section className="story-dialog" role="dialog" aria-modal="true" aria-labelledby="story-title">
            <button className="story-close" type="button" onClick={() => setStoryOpen(false)} aria-label="Close story dialog"><X size={21} /></button>
            <div className="story-visual"><div className="story-play"><Play size={22} fill="currentColor" /></div><span>ARB / OUR STORY</span></div>
            <div className="story-content">
              <SectionLabel>Our story</SectionLabel>
              <h2 id="story-title">Technology is better when it moves people forward.</h2>
              <p>ARB Tech Solutions brings practical thinking and thoughtful technology together. We start by listening, then help make the next step clearer—whether that means building something new, improving what you already have, or being there when you need support.</p>
              <a className="button button-primary" href="#contact" onClick={() => setStoryOpen(false)}>Let’s talk<ArrowRight size={17} /></a>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
