"use client";
import "./manufacturing.css";

export default function Manufacturing() {
  return (
    <div className="mfg-page">

      {/* HERO */}
      <section className="mfg-hero">
        <div className="mfg-hero-box">
          <h1 className="mfg-hero-title">Manufacturing</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mfg-overview">
        <h2>Overview</h2>
        <p>
          In the fast-paced manufacturing world, we prioritize precision, efficiency, and innovation.
          Our services optimize production, elevate product quality, and enhance supply chain management,
          fostering success through streamlined operations and cutting-edge technology integration.
        </p>
        <p>
          At Taciti, we understand the critical role that manufacturing plays in the global economy.
          We are dedicated to helping manufacturing companies harness the power of SAP&apos;s
          cutting-edge technology to optimize their operations, reduce costs, and drive sustainable growth.
          With a team of seasoned experts who possess deep industry knowledge and SAP proficiency,
          we offer tailored solutions that align with the unique requirements of the manufacturing sector.
        </p>
      </section>

      {/* SERVICE CARDS */}
      <section className="mfg-solutions">
        <div className="mfg-solutions-grid">

          <div className="mfg-solution-item">
            <h4>SAP S/4HANA Transformation</h4>
            <p>Deep expertise to help clients adopt SAP S/4HANA. We have expertise across Greenfield, Brownfield or Select Migration Projects.</p>
          </div>

          <div className="mfg-solution-item">
            <h4>Industry Expertise</h4>
            <p>We bring industry thought leadership to help design and adopt leading practices to improve market competitiveness of our clients.</p>
          </div>

          <div className="mfg-solution-item">
            <h4>Process Design &amp; Performance Improvement</h4>
            <p>Through our in-depth analysis and established methodology, we bring about process and performance improvements across the business value chain.</p>
          </div>

          <div className="mfg-solution-item">
            <h4>Transformation Management</h4>
            <p>End to end program and project management expertise to ensure successful execution of ERP transformation.</p>
          </div>

          <div className="mfg-solution-item">
            <h4>Organizational Change and Learning Management</h4>
            <p>Expertise to drive organizational change management and enable employees, partners, customers with appropriate training and learning strategy.</p>
          </div>

          <div className="mfg-solution-item">
            <h4>Technology Acumen</h4>
            <p>New SAP product capabilities across the domains including SAP BTP, CPI, Cloud Platform, Archiving, Generative AI applications.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
