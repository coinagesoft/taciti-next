"use client";
import "./life-sciences.css";

const SOLUTION_CARDS = [
  {
    title: "R&D Administration",
    desc: "R&D is an integral part of the life sciences industry. We offer specialized solutions that help you gain control of your organization's R&D.",
    iconDefault: "/Taciti assets/inverse icon-02.png",
    iconHover:   "/Taciti assets/assets-49.png",
  },
  {
    title: "Complaint Management",
    desc: "Resolving complaints helps build customer satisfaction and improve services. Our complaint management systems help you resolve complaints quickly and satisfactorily.",
    iconDefault: "/Taciti assets/assets-50.png",
    iconHover:   "/Taciti assets/inverse icon-03.png",
  },
  {
    title: "Procure To Pay",
    desc: "Experience a smarter, more efficient accounts payable and purchasing system with our procure-to-pay solution, which helps you establish a robust procurement management system.",
    iconDefault: "/Taciti assets/asset 89.png",
    iconHover:   "/Taciti assets/inverse icon-04.png",
  },
  {
    title: "Order-To-Cash",
    desc: "Stay ahead of customer orders with our seamless order-to-cash process, covering all aspects which can be customized to your organization's needs.",
    iconDefault: "/Taciti assets/assets-52.png",
    iconHover:   "/Taciti assets/inverse icon-06.png",
  },
  {
    title: "Supply Chain Planning",
    desc: "Stay on top of the demand and supply of your products with our comprehensive supply chain planning. The system anticipates highs and lows and helps you be ready.",
    iconDefault: "/Taciti assets/assets-53.png",
    iconHover:   "/Taciti assets/inverse icon-05.png",
  },
  {
    title: "Track & Trace Solution",
    desc: "Keep accurate track of drugs through our robust drug tracking system, which helps you accurately account for drugs and monitor purchases and sales for suspicious activity.",
    iconDefault: "/Taciti assets/assets-54.png",
    iconHover:   "/Taciti assets/inverse icon-08.png",
  },
];

const BOTTOM_LISTS = [
  [
    "Budget-based R&D Planning and Monitoring",
    "Clinical Trial Management",
    "Inventory Management",
    "Global Batch Traceability",
    "Pharmaceutical Developments",
    "Planning and Sourcing",
  ],
  [
    "Regulatory Submission",
    "Complete Supply Chain Management",
    "Complaint Management",
    "Operation Planning and Commercial Sales",
    "End-to-end Pharma Operations Manufacturing and Labeling",
    "Compliant Manufacturing",
  ],
];

export default function LifeSciences() {
  return (
    <div className="lsci-page">

      {/* ── HERO ──────────────────────────────── */}
      <section className="lsci-hero">
        <div className="lsci-hero-box">
          <h1 className="lsci-hero-title">
            Consultations To<br />Life Science Enterprises
          </h1>
        </div>
      </section>

      {/* ── OVERVIEW ──────────────────────────── */}
      <section className="lsci-overview">
        <h2>Overview</h2>
        <p>
          Life Sciences companies operate in the most rapidly evolving, highly regulated and complex
          environments of all industries. The recent pandemic has once again proven this, challenging all
          aspects of the value chain and forcing these life sciences companies to innovate rapidly.
          Traditional R&amp;D cycles were compelled to operate quickly to deliver results and ensure
          vaccines reached patients in record time. Rapidly changing business environments and increasing
          cost and pricing pressures require a flexible, scalable business model and supporting ecosystem
          to deliver the best outcomes to patients and meet regulatory requirements.
        </p>
        <p>
          At Taciti, we have a team of experts who have many years of experience and have spent over
          100,000 consulting hours working with leading Life Sciences companies in the areas of clinical
          trials supply chain management, compliant manufacturing, quality assurance and controlled
          logistics and supply chain processes. With this experience, we have built a pre-configured
          solution to ensure we deliver the solution rapidly to meet customer demands and reduce time to
          market for medications.
        </p>
      </section>

      {/* ── SOLUTION CARDS ────────────────────── */}
      <section className="lsci-cards-section">

        {/* Row 1 — 3 cards */}
        <div className="lsci-cards-row lsci-cards-row--3">
          {SOLUTION_CARDS.slice(0, 3).map((card) => (
            <div key={card.title} className="lsci-card">
              <div className="lsci-card-header">
                <h4>{card.title}</h4>
                <span className="lsci-icon-wrap">
                  <img src={card.iconDefault} alt={card.title} className="lsci-icon lsci-icon--default" />
                  <img src={card.iconHover}   alt={card.title} className="lsci-icon lsci-icon--hover" />
                </span>
              </div>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Row 2 — 3 cards */}
        <div className="lsci-cards-row lsci-cards-row--3">
          {SOLUTION_CARDS.slice(3, 6).map((card) => (
            <div key={card.title} className="lsci-card">
              <div className="lsci-card-header">
                <h4>{card.title}</h4>
                <span className="lsci-icon-wrap">
                  <img src={card.iconDefault} alt={card.title} className="lsci-icon lsci-icon--default" />
                  <img src={card.iconHover}   alt={card.title} className="lsci-icon lsci-icon--hover" />
                </span>
              </div>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Row 3 — centred single card */}
        <div className="lsci-cards-row lsci-cards-row--center">
          <div className="lsci-card">
            <div className="lsci-card-header">
              <h4>Compliant Manufacturing</h4>
              <span className="lsci-icon-wrap">
                <img src="/Taciti assets/assets-51.png"      alt="Compliant Manufacturing" className="lsci-icon lsci-icon--default" />
                <img src="/Taciti assets/inverse icon-07.png" alt="Compliant Manufacturing" className="lsci-icon lsci-icon--hover" />
              </span>
            </div>
            <p>
              The life sciences industry is heavily regulated. Through compliant manufacturing, we help
              meet stringent manufacturing and quality regulations and standards.
            </p>
          </div>
        </div>

      </section>

      {/* ── BOTTOM TAGLINE ────────────────────── */}
      <section className="lsci-tagline">
        <p>Taciti provides tailored solutions for all crucial business aspects within the life science industry</p>
      </section>

      {/* ── CAPABILITY LIST ───────────────────── */}
      <section className="lsci-capabilities">
        {BOTTOM_LISTS.map((col, ci) => (
          <ul key={ci} className="lsci-cap-list">
            {col.map((item) => (
              <li key={item}>
                <span className="lsci-cap-arrow">&#9658;</span>
                {item}
              </li>
            ))}
          </ul>
        ))}
      </section>

    </div>
  );
}