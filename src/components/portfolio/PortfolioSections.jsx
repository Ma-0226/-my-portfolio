import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Database,
  GraduationCap,
  Mail,
  PenLine,
  Sparkles,
} from "lucide-react";
import {
  awards,
  education,
  projects,
  skillGroups,
  writing,
} from "@/data/portfolio";
import Reveal from "@/components/portfolio/Reveal";
import Image from "next/image";
import Link from "next/link";

function SectionHeading({ eyebrow, title, description, id, className = "" }) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      <p className="section-heading__eyebrow section-kicker">{eyebrow}</p>
      <div className="section-heading__content">
        <h2 id={id}>{title}</h2>
        {description ? (
          <p className="section-heading__description">{description}</p>
        ) : null}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section 
      className="hero" 
      style={{ borderBottom: "2px solid var(--line-strong)" }}
      aria-labelledby="hero-title"
    >
      <div className="hero__inner">
        <p className="hero__location">Homs, Syria</p>
        <Reveal>
          <h1 id="hero-title">
            <span>MAMOUN</span>
            <span>ALREFAI .</span>
          </h1>
        </Reveal>
        <Reveal delay={90}>
          <p className="hero__lede">
            Full-stack engineer building modern web and mobile applications,{" "}
            turning complex ideas into <strong>scalable</strong> digital experiences.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="hero__actions">
            <a className="button-pill button-pill--primary" href="#work">
              Explore the work
              <span className="button-pill__icon" aria-hidden="true">
                <ArrowRight size={19} />
              </span>
            </a>
            <a className="text-link" href="#about">
              A bit about me <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section 
      className="section" 
      id="about" 
      style={{ 
        backgroundColor: "var(--paper)", 
        borderBottom: "2px solid var(--line-strong)" 
      }}
      aria-labelledby="about-title"
    >
      <div className="section__inner">
        <SectionHeading
          eyebrow="About"
          title="A thoughtful builder."
          id="about-title"
        />
        <div className="about-grid">
          <Reveal className="portrait-card" aria-label="Illustrated placeholder for your portrait">
            <Image
              src="/profile.jpg"
              alt="My portrait"
              width={450}
              height={200}
              priority
            />
          </Reveal>
          <Reveal className="about-copy" delay={90}>
            <p className="about-copy__lead">
              Hello. I turn complex ideas into powerful web and mobile experiences.
            </p>
            <p>
              I&apos;m a Full-Stack Software Engineer passionate about building complete digital products, from intuitive user interfaces to robust backend systems.
            </p>
            <p>
              I enjoy every stage of development: understanding problems, designing solutions, building scalable architectures, and creating seamless experiences across web and mobile platforms.
            </p>
            <div className="about-note">
              <span className="about-note__dot" aria-hidden="true" />
              Open to thoughtful collaborations
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section
      className="section"
      id="skills"
      style={{ 
        backgroundColor: "color-mix(in srgb, rgba(255, 210, 29, 0.59) 12%, var(--paper))", 
        borderBottom: "2px solid var(--line-strong)" 
      }}
      aria-labelledby="skills-title"
    >
      <div className="section__inner">
        <SectionHeading
          eyebrow="Toolbox"
          title="What I build with"
          id="skills-title"
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal
              as="article"
              className="skill-group"
              key={group.title}
              delay={(index % 2) * 70}
            >
              <h3>{group.title}</h3>
              <div className="skill-pills">
                {group.items.map((tool) => (
                  <span className="skill-pill" key={tool.name}>
                    {tool.logo ? (
                      <Image
                        src={tool.logo}
                        alt=""
                        aria-hidden="true"
                        width={26}
                        height={26}
                        className="skill-pill__logo"
                      />
                    ) : (
                      <Database
                        className="skill-pill__generic-icon"
                        aria-hidden="true"
                        size={24}
                        strokeWidth={1.8}
                      />
                    )}
                    {tool.name}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience({ children }) {
  return (
    <section
      className="section"
      id="experience"
      style={{ borderBottom: "2px solid var(--line-strong)" }}
      aria-labelledby="experience-title"
    >
      <div className="section__inner">
        <SectionHeading
          eyebrow="Experience"
          title="Where I’ve been."
          id="experience-title"
          description="Expandable entries keep the overview light while leaving room for the story behind each role."
        />
        {children}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section 
      className="section" 
      id="work" 
      style={{ 
        backgroundColor: "color-mix(in srgb, #3b82f6 8%, var(--paper))", 
        borderBottom: "2px solid var(--line-strong)" 
      }}
      aria-labelledby="work-title"
    >
      <div className="section__inner">
        <SectionHeading
          className="section-heading--work"
          eyebrow="Selected work"
          title="Four things worth opening"
          id="work-title"
          description="Each of these has a full write-up — highlights, stack, screenshots and links."
        />

        <div className="work-staggered-grid">
          {projects.map((project, index) => {
            const isImageLeft = index % 2 === 1;

            return (
              <article className="work-card-row" key={project.title}>
                {/* Text Body */}
                <div 
                  className="work-card__body" 
                  style={{ order: isImageLeft ? 2 : 1 }}
                >
                  <p className="work-card__meta">
                    <span>{project.number} / {project.year}</span>
                    <span>{project.type}</span>
                  </p>

                  <h3>{project.title}</h3>

                  <p className="work-card__tag">
                    {project.tag}
                  </p>

                  <p className="work-card__description">
                    {project.description}
                  </p>

                  {project.award && (
                    <p className="work-card__award">
                      🏆 {project.award}
                    </p>
                  )}

                  <div className="work-card__stack" aria-label="Technologies used">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <Link
                    className="work-card__link-pill"
                    href={`/work/${project.slug}`}
                  >
                    Read the write-up <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>

                {/* Image / Preview Shot */}
                <Link
                  className="work-card__shot" 
                  href={`/work/${project.slug}`}
                  aria-label={`Read the ${project.title} project write-up`}
                  style={{ order: isImageLeft ? 1 : 2 }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill={true}
                    sizes="(max-width: 820px) 100vw, 50vw"
                    className="work-card__image "
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MoreAbout() {
  return (
    <section 
      className="section" 
      style={{ 
        backgroundColor: "color-mix(in srgb, #10b981 8%, var(--paper))", 
        borderBottom: "2px solid var(--line-strong)" 
      }}
      aria-labelledby="more-title"
    >
      <div className="section__inner">
        <SectionHeading
          eyebrow="The rest of it"
          title="Learning, sharing, growing."
          id="more-title"
          description="A home for the details that don't fit in a project card."
        />
        <div className="details-grid">
          <Reveal as="article" className="details-card">
            <div className="details-card__heading">
              <GraduationCap size={19} aria-hidden="true" />
              <h3>Education</h3>
            </div>
            <ul className="details-list">
              {education.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                  <span>{item.note}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal as="article" className="details-card" delay={70}>
            <div className="details-card__heading">
              <Award size={18} aria-hidden="true" />
              <h3>Highlights</h3>
            </div>
            <ul className="details-list">
              {awards.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal as="article" className="details-card" delay={140}>
            <div className="details-card__heading">
              <PenLine size={18} aria-hidden="true" />
              <h3>Writing</h3>
            </div>
            <ul className="details-list">
              {writing.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="section__inner">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something."
          id="contact-title"
        />
        <Reveal>
          <p className="contact__copy">
            Open for cool builds and interesting problems. The fastest way to reach me is email, I answer all of them.
          </p>
          <a className="contact__email" href="mailto:mamounalrefai6@gmail.com">
            <Mail size={21} aria-hidden="true" />
            mamounalrefai6@gmail.com
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
          <div className="contact__socials" aria-label="Social profiles">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href="mailto:hello@example.com?subject=Résumé%20request">
              <BriefcaseBusiness size={14} aria-hidden="true" /> Résumé on request
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function PortfolioSections({ experience }) {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      {/* <Experience>{experience}</Experience> */}
      <Work />
      {/* <MoreAbout /> */}
      <Contact />
      <footer className="site-footer">
        <p>Mamoun alrefai · Homs</p>
      </footer>
    </>
  );
}