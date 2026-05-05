import "../erp-transformation/erp-transformation.css";
import Link from "next/link";

const CASE_STUDIES = [
  {
    id: 1,
    image: "/Taciti assets/thumbnail 1.png",
    title:
      "Optimizing Working Capital, An Order to Cash transformation for a leading Life Sciences major.",
    href: "/casestudy/optimizing-working-capital-an-order-to-cash-transformation-for-a-leading-life-sciences-major",
  },
  {
    id: 2,
    image: "/Taciti assets/thumbnail2.png",
    title:
      "Global Quality Process Assessment & Process Mapping for a leading Hi-tech Manufacturer.",
    href: "/casestudy/global-quality-process-assessment-process-mapping",
  },
  {
    id: 3,
    image: "/Taciti assets/thumbnail3.png",
    title:
      "ITSM strategy assessment, design and global roll out for a global Hi-Tech Manufacturer.",
    href: "/casestudy/itsm-it-service-management-strategy-assessment-design-and-global-roll-out-for-a-global-hi-tech-manufacturer",
  },
];

const TABS = [
  { label: "All", href: "/case-studies", active: false },
  {
    label: "ERP Transformation",
    href: "/case-studies/erp-transformation",
    active: false,
  },
  {
    label: "Strategy & Advisory",
    href: "/case-studies/strategy-advisory",
    active: true,
  },
  {
    label: "Technology Services",
    href: "/case-studies/technology-services",
    active: false,
  },
];

export default function StrategyAdvisoryCaseStudies() {
  return (
    <div className="cs-page">
      {/* HERO */}
      <section className="cs-hero">
        <div className="cs-hero-content">
          <h1>Strategy &amp; Advisory</h1>
        </div>
      </section>

      {/* MAIN */}
      <section className="cs-main">
        {/* Tabs */}
        <div className="cs-tabs-bar">
          {TABS.map((tab) => (
            <Link
              key={tab.label}
              href={tab.href}
              className={`cs-tab${tab.active ? " active" : ""}`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="cs-grid">
          {CASE_STUDIES.map((cs) => (
            <Link key={cs.id} href={cs.href} className="cs-card">
              <div className="cs-card-img-wrap">
                <img src={cs.image} alt={cs.title} />
              </div>
              <div className="cs-card-body">
                <p>{cs.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
