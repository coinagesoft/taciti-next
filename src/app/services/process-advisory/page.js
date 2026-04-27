"use client";
import "./process-advisory.css";

export default function ProcessAdvisory() {
  return (
    <div className="pa-page">

      {/* HERO */}
      <section className="intro-section">
        <div className="intro-box">
          <h1 className="main-title">Next Horizon</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="pa-overview">
        <h2>Overview</h2>
        <p>
          With a specialized focus on SAP S/4HANA, we are the experts in crafting and executing
          large-scale ERP-led transformations that redefine the way businesses operate. Our goal
          is to guide enterprises towards embracing innovation, efficiency and excellence through
          cutting-edge technology. At Taciti, we understand that a successful ERP transformation
          is not just about implementing software — it&apos;s about orchestrating a harmonious
          convergence of strategy, processes and technology. With a team of seasoned professionals
          who bring a wealth of industry knowledge and technical prowess, we are your trusted
          allies in navigating the complexities of modern business landscapes. Our clients trust
          us for our detailed approach to ensure program design, roadmap and associated budgets
          take a pragmatic view and avoid major surprises while execution.
        </p>
      </section>

      {/* THREE FEATURE CARDS */}
      <section className="pa-features">
        <div className="pa-features-grid">
          <div className="pa-feature-card">
            <h3>SAP S/4HANA Transformation</h3>
            <p>
              Deep expertise to help clients adopt SAP S/4HANA. We have expertese across
              Greenfield, Brownfield or Select Migration Projects.
            </p>
          </div>
          <div className="pa-feature-card pa-feature-card--active">
            <h3>Industry Expertise</h3>
            <p>
              We bring industry thought leadership to help design and adopt leading practices
              to improve market competitiveness of our clients across the value chain.
            </p>
          </div>
          <div className="pa-feature-card">
            <h3>Process Design &amp; Performance Improvement</h3>
            <p>
              Through our in-depth analysis and established methodology, we bring about process
              and performance improvements across the business value chain.
            </p>
          </div>
          <div className="pa-feature-card">
            <h3>Program Management</h3>
            <p>
              Comprehensive program management services that ensure the successful execution
              of ERP transformation.
            </p>
          </div>
          <div className="pa-feature-card">
            <h3>Learning &amp; Training</h3>
            <p>
              Empowering employees, partners, customers with appropriate training and
              learning strategy.
            </p>
          </div>
          <div className="pa-feature-card">
            <h3>Enterprise Applications</h3>
            <p>
              Expertise and experience across a range of enterprise applications.
            </p>
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE */}
      <section className="pa-expertise">
        <h2>Our Expertise</h2>
        <div className="pa-exp-grid">
          <div className="pa-exp-col">
            <p>ERP Strategy, Roadmap &amp; Business Case Development</p>
            <p>SAP S/4HANA Migration Services</p>
            <p>SAP Center of Excellence Design and Implementation</p>
            <p>Global Business Process &amp; Performance Improvement Services</p>
          </div>
          <div className="pa-exp-center">
            <div className="pa-brain-circle">
              <img src="/Taciti assets/assets-22.png" alt="Expertise" />
            </div>
          </div>
          <div className="pa-exp-col pa-exp-col--right">
            <p>SAP Center of Excellence Design and Implementation</p>
            <p>Industrialized SAP Development</p>
            <p>SAP Activate-Based Agile Program Execution &amp; Management</p>
            <p>Organizational Change and Learning Management</p>
          </div>
        </div>
      </section>

    </div>
  );
}
