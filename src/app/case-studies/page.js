import "../case-studies/erp-transformation/erp-transformation.css";
import Link from "next/link";

const ALL_CASE_STUDIES = [
  {
    id: 1,
    image: "/Taciti assets/thumbnail 1.png",
    title:
      "Optimizing Working Capital: An Order-To-Cash transformation for a leading life sciences major.",
    href: "/casestudy/optimizing-working-capital-an-order-to-cash-transformation-for-a-leading-life-sciences-major",
  },
  {
    id: 2,
    image: "/Taciti assets/thumbnail2.png",
    title:
      "Global Quality Process Assessment & Process Mapping for a leading hi-tech manufacturer.",
    href: "/casestudy/global-quality-process-assessment-process-mapping",
  },
  {
    id: 3,
    image: "/Taciti assets/thumbnail3.png",
    title:
      "ITSM strategy assessment, design and global rollout for a global hi-tech manufacturer.",
    href: "/casestudy/itsm-it-service-management-strategy-assessment-design-and-global-roll-out-for-a-global-hi-tech-manufacturer",
  },
  {
    id: 4,
    image: "/Taciti assets/TACITI NEW  - 7 dec-23.png",
    title:
      "A large-scale SAP S/4HANA-led digital transformation for a US-based manufacturer.",
    href: "/casestudy/a-large-scale-sap-s-4hana-led-digital-transformation-for-a-us-based-manufacturer",
  },
  {
    id: 5,
    image: "/Taciti assets/TACITI NEW  - 7 dec-24.png",
    title:
      "A SAP S/4HANA-led Engineer-to-Order (ETO) process transformation for a global industrial manufacturer",
    href: "/casestudy/a-sap-s-4hana-led-engineer-to-order-eto-configure-to-order-cto-process-transformation-for-a-global-industrial-manufacturer-offering-complex-configurable-products",
  },
  {
    id: 6,
    image: "/Taciti assets/thumbnail6.png",
    title:
      "Intelligent Predictive Maintenance and Service for large manufacturing plants across the US and Canada",
    href: "/casestudy/intelligent-predictive-maintenance-and-service-for-large-manufacturing-plants-across-us-and-canada",
  },
  {
    id: 7,
    image: "/Taciti assets/TACITI NEW  - 7 dec-25.png",
    title:
      "Empowering Innovation with No-Code/Low-Code (MS Power Platform) for a manufacturing leader.",
    href: "/casestudy/empowering-innovation-with-no-code-low-code-ms-power-platform-for-a-manufacturing-leader",
  },
];

const TABS = [
  { label: "All", href: "/case-studies", active: true },
  { label: "ERP Transformation", href: "/case-studies/erp-transformation", active: false },
  { label: "Strategy & Advisory", href: "/case-studies/strategy-advisory", active: false },
  { label: "Technology Services", href: "/case-studies/technology-services", active: false },
];

export default function CaseStudies() {
  // Split into rows of 3 to match Elementor layout (last row centred if < 3 cards)
  const rows = [];
  for (let i = 0; i < ALL_CASE_STUDIES.length; i += 3) {
    rows.push(ALL_CASE_STUDIES.slice(i, i + 3));
  }

  return (
    <div className="cs-page">
      {/* HERO */}
      <section className="cs-hero">
        <div className="cs-hero-content">
          <h1>Case Studies</h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="cs-main">
        {/* Category Tabs */}
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

        {/* Case Study Cards — row by row so last row can be centred */}
        <div className="cs-rows">
          {rows.map((row, ri) => (
            <div
              key={ri}
              className={`cs-grid${row.length < 3 ? " cs-grid--centre" : ""}`}
            >
              {row.map((cs) => (
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
          ))}
        </div>
      </section>
    </div>
  );
}