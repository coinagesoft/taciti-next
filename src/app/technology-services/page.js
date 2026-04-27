"use client";
import "./technology-services.css";

export default function TechnologyServices() {
  return (
    <div className="ts-page">

      {/* HERO */}
      <section className="ts-intro-section">
        <div className="ts-intro-box">
          <h1 className="ts-main-title">Technology Services</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="ts-overview">
        <h2>Overview</h2>
        <p>
          Technology is advancing in all dimensions, and our expert technology teams help our
          clients solve business problems with innovative solutions. Our emphasis is on addressing
          business challenges and driving innovation and digitization with the latest technological
          advancements. We find the best approach for every business problem by leveraging
          state-of-the-art technologies. We have solved critical business issues using Generative
          AI models and internally developed AI/ML models.
        </p>
        <p>
          In summary, our primary focus is to provide your organization with forward-looking
          technology consulting services. Whether you are looking to bind technological
          advancements, integrate new systems after an acquisition, or optimize your existing
          tech infrastructure, our technology consulting services are here to pave the way
          for your success.
        </p>
      </section>

      {/* OUR TECHNOLOGY SERVICES INCLUDE */}
      <section className="ts-services">
        <h2>Our Technology Services Include</h2>
        <div className="ts-cards-grid">

          <div className="ts-card">
            <h3>Transformation</h3>
            <ul>
              <li>Migration of interfaces from legacy technologies to modern integration architecture</li>
              <li>Migration from SAP PO/PI to SAP CPI</li>
              <li>Interface Development - SAP CPI, Boomi, Talend, Azure Integration Services, etc.</li>
            </ul>
          </div>

          <div className="ts-card">
            <h3>SAP Application Upgrade and Migration Services</h3>
            <ul>
              <li>SAP S/4HANA application upgrade assessment</li>
              <li>SAP S/4HANA application upgrade execution</li>
              <li>SAP ECC to SAP S/4HANA migration/brownfield conversion</li>
            </ul>
          </div>

          <div className="ts-card">
            <h3>Legacy Application Modernization</h3>
            <ul>
              <li>Assess and develop a roadmap for legacy application modernization</li>
              <li>Migrate applications</li>
              <li>Develop applications using low/no code platforms like MS Power Platform</li>
            </ul>
          </div>

          <div className="ts-card">
            <h3>Integration Services</h3>
            <ul>
              <li>Define next generation integration architecture and set up integration CoE to support digital transformation</li>
            </ul>
          </div>

          <div className="ts-card">
            <h3>Application Development (SAP and Non-SAP)</h3>
            <ul>
              <li>SAP S/4 HANA and ECC - on-premises, cloud and extension</li>
              <li>SAP S/4HANA (On-Premise and Cloud) - custom development and extensions</li>
            </ul>
          </div>

          <div className="ts-card">
            <h3>Application Security Services (SAP and Non-SAP)</h3>
            <ul>
              <li>Define application security architecture to support digital transformation</li>
              <li>Application security Services</li>
              <li>SAP security services</li>
            </ul>
          </div>

        </div>
      </section>

      {/* OUR EXPERTISE */}
      <section className="ts-expertise">
        <h2>Our Expertise</h2>
        <p className="ts-expertise-intro">
          In the wake of events like mergers and acquisitions, internal revamps, market
          disruptions, and technology upgrades, the demand for technology consulting services
          becomes vital. This is where Taciti&apos;s expertise takes center stage, as we specialize
          in providing a host of tailored technology consulting solutions to address your
          organization&apos;s specific needs and objectives.
        </p>
        <div className="ts-expertise-grid">
          <div className="ts-expertise-item">
            <h3>Navigating Tech-Driven Change</h3>
            <ul>
              <li>
                <span className="ts-arrow-icon" aria-hidden="true"></span>
                Guide organizations through mergers, acquisitions, and critical technology upgrades
              </li>
              <li>
                <span className="ts-arrow-icon" aria-hidden="true"></span>
                Expert technology consulting for seamless transitions
              </li>
            </ul>
          </div>
          <div className="ts-expertise-item">
            <h3>Leveraging Technological Advancements</h3>
            <ul>
              <li>
                <span className="ts-arrow-icon" aria-hidden="true"></span>
                Harness the latest advancements to enhance operational efficiency
              </li>
              <li>
                <span className="ts-arrow-icon" aria-hidden="true"></span>
                Streamline processes and empower your organization in the digital era
              </li>
            </ul>
          </div>
          <div className="ts-expertise-item">
            <h3>Custom-Tailored Strategies</h3>
            <ul>
              <li>
                <span className="ts-arrow-icon" aria-hidden="true"></span>
                Highly personalized approach aligned with your specific challenges
              </li>
              <li>
                <span className="ts-arrow-icon" aria-hidden="true"></span>
                Solutions that ensure maximum return on investment
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERTISE QUALITIES */}
      <section className="ts-qualities">
        <h2>Why Choose Taciti Technology Services</h2>
        <div className="ts-qualities-grid">

          <div className="ts-quality-card">
            <h3>Holistic Technology Integration</h3>
            <p>
              Our services go beyond mere technology upgrades. We adopt a holistic approach
              that considers your organization&apos;s culture, employee engagement and leadership
              development, ensuring that technology is seamlessly integrated and adopted
              throughout your organization.
            </p>
          </div>

          <div className="ts-quality-card">
            <h3>Incorporating Best Practices</h3>
            <p>
              Our technology consulting solutions are underlined by industry best practices.
              We draw from tried-and-tested methodologies and enhance them with innovative
              thinking, providing you with a well-rounded, dependable and forward-looking
              approach.
            </p>
          </div>

          <div className="ts-quality-card">
            <h3>Innovative Management Techniques</h3>
            <p>
              Our team of technology consultants brings creative and adaptive management
              techniques to the table. We empower your leadership with innovative strategies
              to effectively guide your organization through technological transformation.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
