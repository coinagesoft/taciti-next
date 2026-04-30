import "./casestudy-detail.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES_DATA } from "../caseStudiesData";

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = CASE_STUDIES_DATA[slug];
  if (!cs) return { title: "Case Study | Taciti" };
  return { title: `${cs.title} | Taciti` };
}

export default async function CaseStudyDetail({ params }) {
  const { slug } = await params;
  const cs = CASE_STUDIES_DATA[slug];

  if (!cs) {
    notFound();
  }

  return (
    <div className="csd-page">
      {/* ── HERO ── */}
      <section className="csd-hero">
        <div className="csd-hero-content">
          <h1>{cs.title}</h1>
        </div>
      </section>

      {/* ── BODY ── */}
      <div className="csd-body">
        {/* Back link */}
        <Link href="/case-studies" className="csd-back">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          All Case Studies
        </Link>

        {/* About the Client */}
        <div className="csd-about">
          <h2 className="csd-section-title">About The Client</h2>
          <p>{cs.aboutClient}</p>
        </div>

        <hr className="csd-divider" />

        {/* Case Context & Key Solution */}
        <div className="csd-two-col">
          <div>
            <h2 className="csd-section-title">Case Context / Overview</h2>
            <ul className="csd-list">
              {cs.caseContext.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="csd-section-title">Key Solution Elements</h2>
            <ul className="csd-list">
              {cs.keySolutionElements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="csd-divider" />

        {/* Scope & Benefits */}
        <div className="csd-two-col">
          <div>
            <h2 className="csd-section-title">Scope of Services</h2>
            <ul className="csd-list">
              {cs.scopeOfServices.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="csd-section-title">Benefits and Value Delivered</h2>
            <ul className="csd-list">
              {cs.benefits.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related Case Studies */}
        {cs.relatedCaseStudies && cs.relatedCaseStudies.length > 0 && (
          <>
            <hr className="csd-divider" />
            <div className="csd-related">
              <h2 className="csd-section-title" style={{ marginBottom: "24px" }}>
                Show all Case Studies
              </h2>
              <div className="csd-related-grid">
                {cs.relatedCaseStudies.map((related, i) => (
                  <Link key={i} href={related.href} className="csd-related-card">
                    <img src={related.image} alt="Related case study" />
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
