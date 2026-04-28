"use client";
import "./strategy.css";

export default function StrategyAdvisory() {
  return (
    <div className="sa-page">

      {/* ── HERO ── */}
      <section className="sa-hero">
        <div className="sa-hero-content">
          <h1>
Strategy & Advisory</h1>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
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

      {/* ── STRATEGY AND ADVISORY SERVICES INCLUDE ── */}
      <section className="sa-services">
        <h2>Strategy And Advisory Services Include</h2>
        <div className="sa-services-grid">
          <ul>
            <li>
              <span className="sa-icon" />
              CFO and CIO Advisory
            </li>
            <li>
              <span className="sa-icon" />
              Global Business Process and Technology Assessments
            </li>
            <li>
              <span className="sa-icon" />
              Mergers, Acquisitions and Divestitures related Due Diligence
            </li>
          </ul>
          <ul>
            <li>
              <span className="sa-icon" />
              Digital Transformation Roadmap and Business Case Management
            </li>
            <li>
              <span className="sa-icon" />
              ITSM Advisory
            </li>
            <li>
              <span className="sa-icon" />
              Vendor Selection and Benchmarking
            </li>
          </ul>
        </div>
      </section>

      {/* ── FEATURE CARDS (3 top + 2 bottom, matching live site) ── */}
      <section className="sa-cards-section">
        <div className="sa-cards-row sa-cards-row--top">
          <div className="sa-card">
            <h3>Strategy For Sustainable Success</h3>
            <p>
              At Taciti, our strategy and advisory practice is dedicated to crafting innovative
              and sustainable solutions that empower businesses to thrive in dynamic markets.
              We collaborate closely with clients to develop strategic roadmaps that align
              technology and management, driving lasting success.
            </p>
          </div>
          <div className="sa-card ">
            <h3>Guiding Transformative Pathways</h3>
            <p>
              Our strategy and advisory expertise pave the way for transformative journeys.
              We work hand in hand with organizations to navigate complexity, seize
              opportunities, and implement forward-thinking strategies that propel them
              toward their goals.
            </p>
          </div>
          <div className="sa-card">
            <h3>Informed Decision-Making</h3>
            <p>
              In an ever-evolving business landscape, our advisory practice equips clients
              with the insights needed for informed decision-making. Through data-driven
              analysis and industry foresight, we guide strategic choices that enhance
              efficiency, innovation, and competitiveness.
            </p>
          </div>
        </div>
        <div className="sa-cards-row sa-cards-row--bottom">
          <div className="sa-card">
            <h3>Customized Solutions, Lasting Impact</h3>
            <p>
              Your unique challenges deserve tailored solutions. Our strategy and advisory
              services offer personalized approaches that not only address current needs but
              also position your business for sustained growth and future excellence.
            </p>
          </div>
          <div className="sa-card">
            <h3>Empowering Your Vision</h3>
            <p>
              We are dedicated to amplifying your vision. Through our strategic guidance
              and advisory support, we empower you to turn aspirations into actionable plans,
              ensuring your company achieves its utmost potential.
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR EXPERTISE ── */}
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
            <div className="sa-brain-outer">
              <div className="sa-brain-inner">
                <img src="/Taciti assets/assets-27.png" alt="Our Expertise" />
              </div>
            </div>
          </div>
          <div className="sa-exp-col sa-exp-col--right">
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
