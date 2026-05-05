"use client";
import "./utilities.css";

export default function Utilities() {
  return (
    <div className="util-page">

      {/* HERO */}
      <section className="util-hero">
        <div className="util-hero-box">
          <h1 className="util-hero-title">Utilities</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="util-overview">
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

      {/* SERVICE CARDS */}
      <section className="util-cards-section">
        <div className="util-cards-row">

          <div className="util-card">
            <div className="util-card-header">
              <h4>Digital Transformation</h4>
              <span>
                <img src="/Taciti assets/utilities icon-02.png" alt="" className="util-card-icon util-icon-default" />
                <img src="/Taciti assets/utilities icon-07.png" alt="" className="util-card-icon util-icon-hover" />
              </span>
            </div>
            <p>
              Modernizing utility operations through smart grid technology, advanced metering infrastructure,
              and integrated digital platforms for real-time operational visibility.
            </p>
          </div>

          <div className="util-card">
            <div className="util-card-header">
              <h4>Asset Management</h4>
              <span>
                <img src="/Taciti assets/utilities icon-03.png" alt="" className="util-card-icon util-icon-default" />
                <img src="/Taciti assets/utilities icon-08.png" alt="" className="util-card-icon util-icon-hover" />
              </span>
            </div>
            <p>
              Comprehensive asset lifecycle management from capital planning and maintenance
              to decommissioning — driving reliability, safety, and cost efficiency.
            </p>
          </div>

          <div className="util-card">
            <div className="util-card-header">
              <h4>Customer Engagement</h4>
              <span>
                <img src="/Taciti assets/utilities icon-04.png" alt="" className="util-card-icon util-icon-default" />
                <img src="/Taciti assets/utilities icon-09.png" alt="" className="util-card-icon util-icon-hover" />
              </span>
            </div>
            <p>
              Delivering superior customer experiences through omnichannel engagement, self-service
              portals, and AI-powered service management for residential and commercial customers.
            </p>
          </div>

        </div>

        <div className="util-cards-row-center">

          <div className="util-card">
            <div className="util-card-header">
              <h4>Regulatory Compliance</h4>
              <span>
                <img src="/Taciti assets/utilities icon-05.png" alt="" className="util-card-icon util-icon-default" />
                <img src="/Taciti assets/utilities icon-10.png" alt="" className="util-card-icon util-icon-hover" />
              </span>
            </div>
            <p>
              Navigating complex regulatory requirements with confidence through automated compliance
              reporting, audit trails, and integrated risk management frameworks.
            </p>
          </div>

          <div className="util-card">
            <div className="util-card-header">
              <h4>Sustainability &amp; ESG</h4>
              <span>
                <img src="/Taciti assets/utilities icon-06.png" alt="" className="util-card-icon util-icon-default" />
                <img src="/Taciti assets/utilities icon-11.png" alt="" className="util-card-icon util-icon-hover" />
              </span>
            </div>
            <p>
              Supporting your sustainability goals with integrated ESG reporting, carbon tracking,
              renewable energy management, and green energy transition planning.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
