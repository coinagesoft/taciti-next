import "../erp-transformation/erp-transformation.css";
import Link from "next/link";

const CASE_STUDIES = [
  {
    id: 1,
    image: "/Taciti assets/TACITI NEW  - 7 dec-25.png",
    title:
      "Empowering Innovation with No-Code/Low-Code (MS Power Platform) for a Manufacturing Leader.",
    href: "/casestudy/empowering-innovation-with-no-code-low-code-ms-power-platform-for-a-manufacturing-leader",
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
    active: false,
  },
  {
    label: "Technology Services",
    href: "/case-studies/technology-services",
    active: true,
  },
];

export default function TechnologyServicesCaseStudies() {
  return (
    <div className="cs-page">
      {/* HERO */}
      <section className="cs-hero">
        <div className="cs-hero-content">
          <h1>Technology Services</h1>
        </div>
      </section>

      {/* MAIN */}
      <section className="cs-main">
        {/* Category Tabs */}
        <div className="cs-tabs-wrapper">
          <div className="cs-tabs-container">
            <div className="cs-tab-column">
              <div className="cs-tab-wrap">
                <Link href="/case-studies/#all" className="cs-tab-link">
                  All
                </Link>
              </div>
            </div>

            <div className="cs-tab-column">
              <div className="cs-tab-wrap">
                <Link
                  href="/case-studies/erp-transformation"
                  className="cs-tab-link"
                >
                  ERP Transformation
                </Link>
              </div>
            </div>

            <div className="cs-tab-column">
              <div className="cs-tab-wrap">
                <Link
                  href="/case-studies/strategy-advisory/"
                  className="cs-tab-link"
                >
                  Strategy & Advisory
                </Link>
              </div>
            </div>

            <div className="cs-tab-column activeTab">
              <div className="cs-tab-wrap">
                <Link
                  href="/case-studies/technology-services"
                  className="cs-tab-link"
                >
                  Technology Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="cs-grid">
          {CASE_STUDIES.map((cs) => (
            <Link key={cs.id} href={cs.href} className="cs-card">
              <div className="cs-card-img-wrap">
                <div className="cs-card-bg-shape"></div>

                <div className="cs-card-main-image">
                  <img src={cs.image} alt={cs.title} />
                </div>
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
