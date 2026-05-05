"use client";
import "./hi-tech.css";

export default function HiTech() {
  return (
    <div className="hitech-page">

      {/* HERO */}
      <section className="hitech-hero">
        <div className="hitech-hero-box">
          <h1 className="hitech-hero-title">Hi-Tech</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="hitech-overview">
        <h2>Overview</h2>
        <p>
          The Hi-Tech industry is defined by rapid innovation, complex global supply chains, and intense
          competitive pressure. From semiconductors and software to electronics and telecommunications,
          companies must continuously reinvent themselves to stay relevant.
        </p>
        <p>
          At Taciti, we partner with hi-tech companies to accelerate product innovation and operational
          efficiency through SAP-led digital transformation. Our experts help you streamline engineer-to-order
          processes, optimize supply chain execution, and leverage AI-powered insights for better decision-making.
        </p>
      </section>

      {/* CAPABILITIES */}
      <section className="hitech-capabilities">
        <div className="hitech-capabilities-grid">

          <div className="hitech-cap-item">
            <div className="hitech-cap-icon">
              <img src="/Taciti assets/assets-01.png" alt="Product Lifecycle" />
            </div>
            <span className="hitech-cap-label">Product Lifecycle Management</span>
          </div>

          <div className="hitech-cap-item">
            <div className="hitech-cap-icon">
              <img src="/Taciti assets/assets-02.png" alt="Supply Chain" />
            </div>
            <span className="hitech-cap-label">Global Supply Chain Optimization</span>
          </div>

          <div className="hitech-cap-item">
            <div className="hitech-cap-icon">
              <img src="/Taciti assets/assets-03.png" alt="Revenue" />
            </div>
            <span className="hitech-cap-label">Revenue Recognition &amp; Subscription Management</span>
          </div>

          <div className="hitech-cap-item">
            <div className="hitech-cap-icon">
              <img src="/Taciti assets/assets-04.png" alt="ITSM" />
            </div>
            <span className="hitech-cap-label">ITSM Strategy &amp; Global Rollout</span>
          </div>

          <div className="hitech-cap-item">
            <div className="hitech-cap-icon">
              <img src="/Taciti assets/assets-05.png" alt="Quality" />
            </div>
            <span className="hitech-cap-label">Quality Process Assessment &amp; Process Mapping</span>
          </div>

          <div className="hitech-cap-item">
            <div className="hitech-cap-icon">
              <img src="/Taciti assets/assets-06.png" alt="AI" />
            </div>
            <span className="hitech-cap-label">AI &amp; Analytics-Driven Innovation</span>
          </div>

        </div>
      </section>

    </div>
  );
}
