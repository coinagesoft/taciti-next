"use client";
import "./strategy.css";

export default function StrategyAdvisory() {
  return (
    <div className="sa-page">

      {/* HERO */}
      <section className="intro-section">
        <div className="intro-box">
          <h1 className="main-title">Next Horizon</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="sa-overview">
        <h2>Overview</h2>
        <p>
          The global business environment is constantly changing and becoming more complex.
          To succeed, companies need to have a strong foundation that can adapt to these changes.
          This means having a robust and scalable ecosystem that can support their growth.
        </p>
        <p>
          Successful companies are adopting business-focused digital transformations to capture
          performance improvements by enabling innovative business models. This strategy ensures
          they sustain their leadership and competitive edge in the market.
        </p>
      </section>

      {/* SERVICES INCLUDE */}
      <section className="sa-services">
        <h2>Strategy And Advisory Services Include</h2>
        <div className="sa-services-grid">
          <ul>
            <li>
              <span className="sa-arrow-icon" aria-hidden="true"></span>
              CFO and CIO Advisory
            </li>
            <li>
              <span className="sa-arrow-icon" aria-hidden="true"></span>
              Global Business Process and Technology Assessments
            </li>
            <li>
              <span className="sa-arrow-icon" aria-hidden="true"></span>
              Mergers, Acquisitions and Divestitures related Due Diligence
            </li>
          </ul>
          <ul>
            <li>
              <span className="sa-arrow-icon" aria-hidden="true"></span>
              Digital Transformation Roadmap and Business Case Management
            </li>
            <li>
              <span className="sa-arrow-icon" aria-hidden="true"></span>
              ITSM Advisory
            </li>
            <li>
              <span className="sa-arrow-icon" aria-hidden="true"></span>
              Vendor Selection and Benchmarking
            </li>
          </ul>
        </div>
      </section>

      {/* ORGANIZATIONAL TRANSFORMATION */}
      <section className="sa-transform">
        <h2>Organizational Transformation For Performance Advancement</h2>
        <p>
          At Taciti, our strategy and advisory practice is dedicated to crafting innovative
          and sustainable solutions that empower businesses to thrive in dynamic markets.
          We collaborate closely with clients to develop strategic roadmaps that align
          technology and management, driving lasting success.
        </p>
      </section>

      {/* CARDS — 3 visible + 1 extra matching the site */}
      <section className="sa-cards-section">
        <div className="sa-cards-grid">
          <div className="sa-card">
            <h3>Strategy For Sustainable Success</h3>
            <p>
              At Taciti, our strategy and advisory practice is dedicated to crafting innovative
              and sustainable solutions that empower businesses to thrive in dynamic markets.
              We collaborate closely with clients to develop strategic roadmaps that align
              technology and management, driving lasting success.
            </p>
          </div>
          <div className="sa-card sa-card--active">
            <h3>Guiding Transformative Pathways</h3>
            <p>
              Our strategy and advisory expertise pave the way for transformative journeys.
              We work hand in hand with organizations to navigate complexity, seize opportunities,
              and implement forward-thinking strategies that propel them toward their goals.
            </p>
          </div>
          <div className="sa-card">
            <h3>Informed Decision-Making</h3>
            <p>
              In an ever-evolving business landscape, our advisory practice equips clients with
              the insights needed for informed decision-making. Through data-driven analysis and
              industry foresight, we guide strategic choices that enhance efficiency, innovation,
              and competitiveness.
            </p>
          </div>
          <div className="sa-card">
            <h3>Customized Solutions, Lasting Impact</h3>
            <p>
              Our services offer personalized approaches that address current needs and position
              your business for sustained growth and long-term competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE */}
      <section className="sa-expertise">
        <h2>Our Expertise</h2>
        <div className="sa-exp-grid">
          <div className="sa-exp-col">
            <p>CFO and CIO Advisory Services</p>
            <p>Digital Transformation Roadmap and Business Case Development</p>
            <p>Global Business Process and Technology Assessments</p>
            <p>Mergers, Acquisitions and Divestiture Related Due Diligence</p>
          </div>
          <div className="sa-exp-center">
            <div className="sa-brain-circle">
              <img src="/Taciti assets/assets-22.png" alt="Expertise" />
            </div>
          </div>
          <div className="sa-exp-col">
            <p>Cloud Transformation</p>
            <p>ITSM Benchmarking, Design, and Implementation</p>
            <p>Vendor Selection and Benchmarking</p>
            <p>Advanced Data and Analytics</p>
          </div>
        </div>
      </section>

    </div>
  );
}
