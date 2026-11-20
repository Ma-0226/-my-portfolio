import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import CaseStudyHeader from "@/components/portfolio/CaseStudyHeader";
import CaseGallery from "@/components/portfolio/CaseGallery";

import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Work not found | MAMOUN ALREFAI",
    };
  }

  return {
    title: `${project.title} | MAMOUN ALREFAI`,
    description: project.description,
  };
}

export default function ProjectPage({ params }) {
  return (
    <>
      <CaseStudyHeader />

      <Suspense
        fallback={
          <main className="case-study" aria-busy="true">
            <div className="case-study__inner">
              Loading project…
            </div>
          </main>
        }
      >
        <ProjectContent params={params} />
      </Suspense>
    </>
  );
}

async function ProjectContent({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="case-study">
      <div className="case-study__inner">

        {/* =========================
            PROJECT INTRO
        ========================= */}


        {/* =========================
            IMAGE GALLERY
        ========================= */}

<div
  className={`case-study__showcase ${
    project.layout === "side"
      ? "case-study__showcase--side"
      : "case-study__showcase--full"
  }`}
>
  <header className="case-study__intro">
    <p className="case-study__eyebrow">
      {project.year}

      <span aria-hidden="true">
        {" · "}
      </span>

      {project.type}
    </p>

    <h1>{project.title}</h1>

    <p className="case-study__tagline">
      {project.tag}
    </p>

    {project.award ? (
      <p className="case-study__award">
        <span aria-hidden="true">🏆</span>{" "}
        {project.award}
      </p>
    ) : null}

    <p className="case-study__description">
      {project.description}
    </p>
  </header>

  <CaseGallery project={project} />
</div>

        {/* =========================
            PROJECT DETAILS
        ========================= */}

        <div className="case-study__details">

          {/* WHAT IT DOES */}

          <section
            className="case-study__highlights"
            aria-labelledby="case-highlights"
          >

            <h2 id="case-highlights">
              What it does
            </h2>

            <ul>
              {project.highlights?.map(
                (highlight) => (
                  <li key={highlight}>
                    {highlight}
                  </li>
                )
              )}
            </ul>

          </section>


          {/* BUILT WITH */}

          <aside className="case-study__stack">

            <h2>
              Built with
            </h2>

            <ul
              className="case-study__chips"
              aria-label="Technologies used"
            >

              {project.stack?.map(
                (technology) => (
                  <li key={technology}>
                    {technology}
                  </li>
                )
              )}

            </ul>


            {/* CONTACT */}

            <Link
              className="case-study__contact"
              href={`mailto:mamounalrefai6@gmail.com?subject=${encodeURIComponent(
                `Question about ${project.title}`
              )}`}
            >

              Ask about this project

              <ArrowUpRight
                size={15}
                aria-hidden="true"
              />

            </Link>

          </aside>

        </div>


        {/* =========================
            FOOTER
        ========================= */}

        <footer className="case-study__footer">

          <Link href="/#work">

            <ArrowLeft
              size={15}
              aria-hidden="true"
            />

            Back to all work

          </Link>


          <a href="mailto:mamounalrefai6@gmail.com">
            mamounalrefai6@gmail.com
          </a>

        </footer>

      </div>
    </main>
  );
}