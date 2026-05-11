import "./casestudy-detail.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES_DATA } from "../caseStudiesData";

function BulletPointIcon() {
  return (
    <svg
      aria-hidden="true"
      className="e-font-icon-svg e-fas-dot-circle"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"></path>
    </svg>
  );
}

function getCaseStudyTitleFromHref(href) {
  if (!href) return "Case study";

  const normalized = href.replace(/\/$/, "");
  const slug = normalized.split("/").pop();

  if (!slug) return "Case study";

  return CASE_STUDIES_DATA[slug]?.title || "Case study";
}

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const cs = CASE_STUDIES_DATA[slug];

  if (!cs) {
    return {
      title: "Case Study | Taciti",
    };
  }

  return {
    title: `${cs.title} | Taciti`,
  };
}

export default async function CaseStudyDetail({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const cs = CASE_STUDIES_DATA[slug];

  if (!cs) {
    notFound();
  }

  return (
    <div className="csd-page">
      <div className="csd-body">
        <section className="csd-section csd-about">
          <h2 className="csd-section-title">About The Client</h2>
          <p className="csd-text">{cs.aboutClient}</p>
        </section>

        <section className="csd-section csd-two-col">
          <div className="csd-col">
            <h2 className="csd-section-title">Case Context / Overview</h2>

            <ul className="csd-list">
              {cs.caseContext.map((item, i) => (
                <li key={i}>
                  <span className="csd-list-icon" aria-hidden="true">
                    <BulletPointIcon />
                  </span>
                  <span className="csd-list-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="csd-col">
            <h2 className="csd-section-title">Key Solution Elements</h2>

            <ul className="csd-list">
              {cs.keySolutionElements.map((item, i) => (
                <li key={i}>
                  <span className="csd-list-icon" aria-hidden="true">
                    <BulletPointIcon />
                  </span>
                  <span className="csd-list-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="csd-section csd-two-col">
          <div className="csd-col">
            <h2 className="csd-section-title">Scope of Services</h2>

            <ul className="csd-list">
              {cs.scopeOfServices.map((item, i) => (
                <li key={i}>
                  <span className="csd-list-icon" aria-hidden="true">
                    <BulletPointIcon />
                  </span>
                  <span className="csd-list-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="csd-col">
            <h2 className="csd-section-title">Benefits and Value Delivered</h2>

            <ul className="csd-list">
              {cs.benefits.map((item, i) => (
                <li key={i}>
                  <span className="csd-list-icon" aria-hidden="true">
                    <BulletPointIcon />
                  </span>
                  <span className="csd-list-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {cs.relatedCaseStudies && cs.relatedCaseStudies.length > 0 && (
          <section className="csd-section csd-related">
            <div className="csd-related-heading-wrap">
              <h2 className="csd-section-title csd-related-heading">
                <span>Show all</span>
                <span>Case studies</span>
              </h2>
            </div>

            <div className="csd-related-content">
              <div className="csd-related-grid">
                {cs.relatedCaseStudies.map((related, i) => (
                  <Link
                    key={i}
                    href={related.href}
                    className="csd-related-card"
                  >
                    <div className="csd-related-image-wrap">
                      <img
                        src={related.image}
                        alt={getCaseStudyTitleFromHref(related.href)}
                        loading="lazy"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
