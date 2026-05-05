"use client";
import "./utility.css";

const CARDS = [
  {
    title: "Digital Transformation",
    desc: "In the fast-paced manufacturing world, we prioritize precision, efficiency, and innovation. Our services optimize production, elevate product quality, and enhance supply chain management, fostering success through streamlined operations and cutting-edge technology integration.",
    iconDefault: "/Taciti assets/utilities icon-02.png",
    iconHover:   "/Taciti assets/utilities icon-07.png",
  },
  {
    title: "Asset Management",
    desc: "In the highly regulated and rapidly evolving life sciences industry, our services are designed to support your mission of improving healthcare and enhancing patient outcomes. From compliance and quality assurance to research and development, we provide specialized solutions that enable you to navigate complex regulatory landscapes and innovate in drug development.",
    iconDefault: "/Taciti assets/utilities icon-03.png",
    iconHover:   "/Taciti assets/utilities icon-08.png",
  },
  {
    title: "Customer Engagement",
    desc: "Consumer preferences and market dynamics are constantly changing in the CPG sector. Our services are aimed at helping you stay competitive and responsive. We offer strategies to optimize supply chain logistics, innovate in product development, and create compelling brand experiences to capture consumer attention and loyalty.",
    iconDefault: "/Taciti assets/utilities icon-04.png",
    iconHover:   "/Taciti assets/utilities icon-09.png",
  },
  {
    title: "Data Analytics & Insights",
    desc: "The high-tech industry demands constant innovation and adaptation. We provide services that enable you to employ emerging technologies, drive digital transformation, and maintain a competitive edge. We're equipped to assist you in navigating the ever-evolving landscape of high technology.",
    iconDefault: "/Taciti assets/utilities icon-05.png",
    iconHover:   "/Taciti assets/utilities icon-10.png",
  },
  {
    title: "Regulatory Compliance",
    desc: "The utilities sector faces unique challenges in balancing sustainability, regulatory compliance, and customer service. We aim to support your efforts in providing reliable and sustainable utility services to communities.",
    iconDefault: "/Taciti assets/utilities icon-06.png",
    iconHover:   "/Taciti assets/utilities icon-11.png",
  },
];

const WHY_US_ROW1 = [
  {
    title: "Industry Expertise",
    desc: "Our team comprises professionals with in-depth knowledge of both the utilities sector and SAP technology, providing you with holistic solutions that address your specific challenges.",
  },
  {
    title: "Customized Solutions",
    desc: "We understand that each utility company is unique. Our approach involves tailoring SAP solutions to your exact needs, ensuring maximum ROI and value.",
  },
  {
    title: "End-to-End Support",
    desc: "From initial consultation to post-implementation support, we accompany you every step of the way, ensuring a smooth transition and ongoing success.",
  },
];

const WHY_US_ROW2 = [
  {
    title: "Innovation Focus",
    desc: "The utilities industry is evolving rapidly. We stay at the forefront of technological advancements, offering you innovative solutions that future-proof your operations.",
  },
  {
    title: "Proven Track Record",
    desc: "Our track record speaks for itself. We have successfully empowered numerous utilities companies to transform their operations, enhance customer relationships, and achieve sustainable growth.",
  },
];

export default function Utility() {
  return (
    <div className="utility-page">

      {/* ── HERO ──────────────────────────────── */}
      <section className="utility-hero">
        <div className="utility-hero-box">
          <h1 className="utility-hero-title">Utilities</h1>
        </div>
      </section>

      {/* ── OVERVIEW ──────────────────────────── */}
      <section className="utility-overview">
        <h2>Overview</h2>
        <p>
          At Taciti, we understand the critical role that utilities play in powering our modern world.
          The ever-evolving landscape of the energy and utilities industry demands innovative solutions
          to address complex challenges. That&apos;s where our Utilities practice comes in.
        </p>
        <p>
          We are dedicated to helping energy and utilities companies harness the power of SAP&apos;s
          cutting-edge technology to optimize their operations, enhance customer experiences, and drive
          sustainable growth. With a team of seasoned experts who possess deep industry knowledge and
          SAP proficiency, we offer tailored solutions that align with the unique requirements of the
          utilities sector.
        </p>
      </section>

      {/* ── SERVICE CARDS ─────────────────────── */}
      <section className="utility-cards-section">

        {/* Row 1 — 3 cards */}
        <div className="utility-cards-row utility-cards-row--3">
          {CARDS.slice(0, 3).map((card) => (
            <div key={card.title} className="utility-card">
              <div className="utility-card-header">
                <h4>{card.title}</h4>
                <span className="utility-icon-wrap">
                  <img src={card.iconDefault} alt={card.title} className="utility-icon utility-icon--default" />
                  <img src={card.iconHover}   alt={card.title} className="utility-icon utility-icon--hover" />
                </span>
              </div>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Row 2 — 2 cards centred */}
        <div className="utility-cards-row utility-cards-row--center">
          {CARDS.slice(3).map((card) => (
            <div key={card.title} className="utility-card">
              <div className="utility-card-header">
                <h4>{card.title}</h4>
                <span className="utility-icon-wrap">
                  <img src={card.iconDefault} alt={card.title} className="utility-icon utility-icon--default" />
                  <img src={card.iconHover}   alt={card.title} className="utility-icon utility-icon--hover" />
                </span>
              </div>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ── WHY US ────────────────────────────── */}
      <section className="utility-whyus">
        <h2>Why Us?</h2>

        {/* Row 1 — 3 items */}
        <div className="utility-whyus-row utility-whyus-row--3">
          {WHY_US_ROW1.map((item) => (
            <div key={item.title} className="utility-whyus-item">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Row 2 — 2 items centred */}
        <div className="utility-whyus-row utility-whyus-row--center">
          {WHY_US_ROW2.map((item) => (
            <div key={item.title} className="utility-whyus-item">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}