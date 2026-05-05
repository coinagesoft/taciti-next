"use client";
import "./consumer-packaged-goods.css";

const PRINCIPLES = [
  {
    icon: "/Taciti assets/small icons-02.png",
    text: "Quickly adapt product innovation for quicker market launches",
  },
  {
    icon: "/Taciti assets/small icons-03.png",
    text: "Stay competitive by assessing value levers in production and distribution",
  },
  {
    icon: "/Taciti assets/small icons-04.png",
    text: "Applying preset templates for better visualizations and adoption",
  },
  {
    icon: "/Taciti assets/small icons-06.png",
    text: "Hassle-free mergers & acquisitions",
  },
  {
    icon: "/Taciti assets/small icons-05.png",
    text: "Nominal disruptions to the existing ecosystem",
  },
];

export default function ConsumerPackagedGoods() {
  return (
    <div className="cpg-page">

      {/* ── HERO ──────────────────────────────── */}
      <section className="cpg-hero">
        <div className="cpg-hero-box">
          <h1 className="cpg-hero-title">
            Consumer<br />Packaged Goods (CPG)
          </h1>
        </div>
      </section>

      {/* ── OVERVIEW ──────────────────────────── */}
      <section className="cpg-overview">
        <h2>Overview</h2>
        <p>
          Where there&apos;s growth, there are also unique challenges. The meteoric rise of the Consumer
          Packaged Goods (CPG) industry, in just a few decades, has brought forth unique challenges that
          require unconventional solutions. The main fuel behind CPG companies&apos; success has been global
          consumer markets, a sharp focus on a high-demand product portfolio, fast development of
          international scale value chain operations, innovative products and customer satisfaction.
          But this formula cannot work forever. The issues of the future have arrived today.
        </p>
      </section>

      {/* ── OUR EXPERTISE ─────────────────────── */}
      <section className="cpg-expertise">
        <div className="cpg-expertise-inner">

          <div className="cpg-expertise-image">
            <img
              src="/Taciti assets/consumer-87.png"
              alt="CPG Expertise"
            />
          </div>

          <div className="cpg-expertise-content">
            <h2>Our Expertise</h2>
            <p>
              Natural resource depletion, market disruption, technological disruptions, strict carbon
              emission standards and tedious and strict industry regulations are already causing widespread
              disruptions. Organizations need to adapt, evolve and build an ecosystem that is agile,
              scalable and resilient to meet the new generation of challenges. Decades have brought forth
              unique challenges that require unconventional solutions. The main fuel behind CPG companies&apos;
              success has been global consumer markets, sharp focus on high-demand product portfolio, fast
              development of international scale value chain operations, innovative products and customer
              satisfaction. But this formula cannot work forever. The issues of the future have arrived today.
            </p>
            <p>
              At Taciti, solving issues in the CPG industry has been our forte as we have been closely
              associated with the top international names in the CPG industry for the past 20 years. We have
              firsthand seen the challenges of a globally competitive market and the challenges across the
              value chain. We have helped our clients overcome these challenges through transformation.
            </p>
          </div>

        </div>
      </section>

      {/* ── TRANSFORMATION PRINCIPLES ─────────── */}
      <section className="cpg-principles">
        <h2>Our approach to transformation will be based on the following principles:</h2>

        {/* Row 1 — 3 items */}
        <div className="cpg-principles-row cpg-principles-row--3">
          {PRINCIPLES.slice(0, 3).map((p) => (
            <div key={p.text} className="cpg-principle">
              <img src={p.icon} alt="" />
              <p>{p.text}</p>
            </div>
          ))}
        </div>

        {/* Row 2 — 2 items centred */}
        <div className="cpg-principles-row cpg-principles-row--2">
          {PRINCIPLES.slice(3).map((p) => (
            <div key={p.text} className="cpg-principle">
              <img src={p.icon} alt="" />
              <p>{p.text}</p>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}