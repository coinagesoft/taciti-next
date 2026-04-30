"use client";

import "../case-studies/erp-transformation/erp-transformation.css";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const CATEGORIES = {
  all: "all",
  erpTransformation: "erp-transformation",
  strategyAdvisory: "strategy-advisory",
  technologyServices: "technology-services",
};

const ALL_CASE_STUDIES = [
  {
    id: 1,
    image: "/Taciti assets/thumbnail 1.png",
    title:
      "Optimizing Working Capital, An Order to Cash transformation for a leading Life Sciences major.",
    href: "/casestudy/optimizing-working-capital-an-order-to-cash-transformation-for-a-leading-life-sciences-major",
    categories: [CATEGORIES.strategyAdvisory],
  },
  {
    id: 2,
    image: "/Taciti assets/thumbnail2.png",
    title:
      "Global Quality Process Assessment & Process Mapping for a leading Hi-tech Manufacturer.",
    href: "/casestudy/global-quality-process-assessment-process-mapping",
    categories: [CATEGORIES.strategyAdvisory],
  },
  {
    id: 3,
    image: "/Taciti assets/thumbnail3.png",
    title:
      "ITSM strategy assessment, design and global roll out for a global Hi-Tech Manufacturer.",
    href: "/casestudy/itsm-it-service-management-strategy-assessment-design-and-global-roll-out-for-a-global-hi-tech-manufacturer",
    categories: [CATEGORIES.strategyAdvisory],
  },
  {
    id: 4,
    image: "/Taciti assets/TACITI NEW  - 7 dec-23.png",
    title:
      "A large scale SAP S/4HANA led digital transformation for a US based manufacturer.",
    href: "/casestudy/a-large-scale-sap-s-4hana-led-digital-transformation-for-a-us-based-manufacturer",
    categories: [CATEGORIES.erpTransformation],
  },
  {
    id: 5,
    image: "/Taciti assets/TACITI NEW  - 7 dec-24.png",
    title:
      "A SAP S/4HANA led Engineer to Order (ETO), process transformation for a global industrial manufacturer.",
    href: "/casestudy/a-sap-s-4hana-led-engineer-to-order-eto-configure-to-order-cto-process-transformation",
    categories: [CATEGORIES.erpTransformation],
  },
  {
    id: 6,
    image: "/Taciti assets/thumbnail6.png",
    title:
      "Intelligent Predictive Maintenance and Service for large manufacturing plants across US and Canada.",
    href: "/casestudy/intelligent-predictive-maintenance-and-service-for-large-manufacturing-plants",
    categories: [CATEGORIES.erpTransformation],
  },
  {
    id: 7,
    image: "/Taciti assets/TACITI NEW  - 7 dec-25.png",
    title:
      "Empowering Innovation with No-Code/Low-Code (MS Power Platform) for a Manufacturing Leader.",
    href: "/casestudy/empowering-innovation-with-no-code-low-code-ms-power-platform-for-a-manufacturing-leader",
    categories: [CATEGORIES.technologyServices],
  },
];

const TABS = [
  { label: "All", value: CATEGORIES.all, hash: "all" },
  {
    label: "ERP Transformation",
    value: CATEGORIES.erpTransformation,
    hash: "e",
  },
  {
    label: "Strategy & Advisory",
    value: CATEGORIES.strategyAdvisory,
    hash: "s",
  },
  {
    label: "Technology Services",
    value: CATEGORIES.technologyServices,
    hash: "t",
  },
];

const HASH_TO_CATEGORY = {
  "#all": CATEGORIES.all,
  "#e": CATEGORIES.erpTransformation,
  "#s": CATEGORIES.strategyAdvisory,
  "#t": CATEGORIES.technologyServices,
};

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.all);

  useEffect(() => {
    const syncFromHash = () => {
      const fromHash = HASH_TO_CATEGORY[window.location.hash] || CATEGORIES.all;
      setActiveCategory(fromHash);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  const filteredCaseStudies = useMemo(() => {
    if (activeCategory === CATEGORIES.all) {
      return ALL_CASE_STUDIES;
    }

    return ALL_CASE_STUDIES.filter((caseStudy) =>
      caseStudy.categories?.includes(activeCategory)
    );
  }, [activeCategory]);

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
            <button
              key={tab.value}
              type="button"
              className={`cs-tab${activeCategory === tab.value ? " active" : ""}`}
              onClick={() => {
                setActiveCategory(tab.value);
                window.history.replaceState(null, "", `#${tab.hash}`);
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Study Cards Grid */}
        <div className="cs-grid">
          {filteredCaseStudies.map((cs) => (
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
