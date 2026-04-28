"use client";
import "./hi-tech.css";

export default function HiTech() {
  return (
    <div className="hitech-page">
      {/* HERO */}
      <section className="hitech-hero">
        <div className="hitech-hero-box">
          <h1 className="hitech-hero-title">Hi-Tech Industries</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="hitech-overview">
        <h2>Overview</h2>
        <p>
          The Hi-Tech industry operates within a highly competitive landscape,
          where the speed of product life cycles has intensified the importance
          of innovation as the driving force. For hi-tech organizations to
          flourish, they must rapidly discern customer needs, streamline
          expenses, and cultivate unique selling points. Additionally,
          significant mergers and acquisitions (M&As) are reshaping the industry
          by granting access to novel business domains, specialized expertise
          and valuable Intellectual Property.
        </p>
        <p>
          In the dynamic and intricate environment that prevails, it is
          imperative for companies to harness robust technological solutions to
          seize emerging business prospects and prevent missed opportunities.
        </p>
        <p>
          Taciti has formed strategic alliances with prominent global hi-tech
          leaders, collaborating closely to revolutionize their product and
          service roadmaps. Our contributions have been instrumental in
          generating fresh revenue streams, streamlining business processes,
          envisioning cutting-edge immersive customer experiences and enhancing
          profitability for our esteemed hi-tech clients.
        </p>
        <p>
          Leveraging our extensive domain knowledge, we have played a pivotal
          role in rationalizing their IT portfolios, offering valuable insights
          into supply chains and empowering marketing and sales enablement
          strategies.
        </p>
      </section>

      {/* CAPABILITIES */}
      <section className="hitech-capabilities">
        <div className="hitech-capabilities-grid">
          <div className="hitech-cap-item">
            <div className="hitech-cap-icon">
              <img
                src="/Taciti assets/assets-34.png"
                alt="Comprehensive Product Management"
              />
            </div>
            <span className="hitech-cap-label">
              Comprehensive Product Management
            </span>
          </div>

          <div className="hitech-cap-item">
            <div className="hitech-cap-icon">
              <img
                src="/Taciti assets/assets-36.png"
                alt="Digital Transformation"
              />
            </div>
            <span className="hitech-cap-label">Digital Transformation</span>
          </div>

          <div className="hitech-cap-item">
            <div className="hitech-cap-icon">
              <img
                src="/Taciti assets/assets-59.png"
                alt="Next-Generation M&A IT Integration"
              />
            </div>
            <span className="hitech-cap-label">
              Next-Generation M&amp;A IT Integration
            </span>
          </div>

          <div className="hitech-cap-item">
            <div className="hitech-cap-icon">
              <img
                src="/Taciti assets/assets-35.png"
                alt="Transforming Experiences"
              />
            </div>
            <span className="hitech-cap-label">Transforming Experiences</span>
          </div>

          <div className="hitech-cap-item">
            <div className="hitech-cap-icon">
              <img
                src="/Taciti assets/assets-58.png"
                alt="Next-Generation Application Management"
              />
            </div>
            <span className="hitech-cap-label">
              Next-Generation Application Management
            </span>
          </div>

          <div className="hitech-cap-item">
            <div className="hitech-cap-icon">
              <img
                src="/Taciti assets/assets-38.png"
                alt="Cloud Transformation"
              />
            </div>
            <span className="hitech-cap-label">Cloud Transformation</span>
          </div>
        </div>
      </section>
    </div>
  );
}
