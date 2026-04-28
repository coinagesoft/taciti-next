"use client";
import "./manufacturing.css";

export default function ManufacturingIndustries() {
  return (
    <div className="mfg-page">

      {/* HERO */}
      <section className="mfg-hero">
        <div className="mfg-hero-box">
          <h1 className="mfg-hero-title">Solution For The Manufacturing Industries</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mfg-overview">
        <h2>Overview</h2>
        <p className="mfg-overview-quote">
          &ldquo;Empowering manufacturing businesses through technology to connect and integrate factories&rdquo;
        </p>
        <p>
          Digitization, sustainability, and scalability are future needs of the manufacturing industry.
          However, these future needs must be fulfilled now! We help our manufacturing clients explore and
          adopt next-gen technologies for connected and integrated factories across people, processes, and
          technologies. This directly results in the implementation of best practices, improved efficiencies,
          enhanced collaborations, resource skills optimization, higher customer satisfaction, reduced costs,
          and increased profitability.
        </p>
        <p>
          Our experts, with a combined experience of 125 years and a deep understanding of the industry,
          will help you answer the what, when, why, and how to embrace new technologies to your competitive
          advantage across complex manufacturing processes and products. We will help you upgrade and enhance
          your manufacturing to deliver high value to your customers and stakeholders. The key enabler to
          manufacturing industry growth is addressing manufacturing and supply chain challenges. A few of
          them that we have seen are highlighted below:
        </p>
      </section>

      {/* CHALLENGES */}
      <section className="mfg-challenges">
        <div className="mfg-challenges-grid">
          <div className="mfg-challenge-card">
            <h3>Manufacturing Challenges</h3>
            <ul>
              <li><span className="mfg-bullet" />Plant-specific BOMs restrict cross-plant planning for manufacturing</li>
              <li><span className="mfg-bullet" />Lack of visibility into available global capacity increases manufacturing costs</li>
              <li><span className="mfg-bullet" />Absence of a comprehensive information mechanism impedes efficient collaboration</li>
              <li><span className="mfg-bullet" />Significant time lapses between data analysis and corrective actions delay key decisions</li>
            </ul>
          </div>
          <div className="mfg-challenge-card">
            <h3>Supply Chain Challenges</h3>
            <ul>
              <li><span className="mfg-bullet" />Complicated and disparate systems result in data complexities and high TCO</li>
              <li><span className="mfg-bullet" />Time and manual effort-intensive inventory monitoring increases inventory costs</li>
              <li><span className="mfg-bullet" />On-time delivery is hampered due to siloed inventory planning and allocation</li>
              <li><span className="mfg-bullet" />Delayed response and corrective action implementation hamper responses to customers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OUR SOLUTIONS */}
      <section className="mfg-solutions">
        <h2>Our Solutions</h2>
        <p className="mfg-solutions-intro">
          We offer specialized solutions across the manufacturing value chain with highly engineered product
          offerings imperative to build connected and integrated factories across people, processes and technologies.
        </p>

        <div className="mfg-pillars">
          <div className="mfg-pillar">
            <div className="mfg-pillar-icon"><img src="/Taciti assets/assets-39.png" alt="Expertise" /></div>
            <h3>Expertise</h3>
            <p>Deep manufacturing expertise and not just IT consultants. End-to-end manufacturing knowledge resonating with shop floor culture</p>
          </div>
          <div className="mfg-pillar">
            <div className="mfg-pillar-icon"><img src="/Taciti assets/assets-40.png" alt="Unbiased Opinion" /></div>
            <h3>Unbiased Opinion</h3>
            <p>Unbiased consultancy to adopt new technologies with clients&apos; interests at the forefront. Emphasis on the practical adoption of the solution and not &ldquo;Conference Room&rdquo; design</p>
          </div>
          <div className="mfg-pillar">
            <div className="mfg-pillar-icon"><img src="/Taciti assets/assets-41.png" alt="Transformation" /></div>
            <h3>Transformation</h3>
            <p>Value-based transformation of processes by adopting industry-leading technologies and best practices. Transformation to adopt Industry 4.0 realistically</p>
          </div>
          <div className="mfg-pillar">
            <div className="mfg-pillar-icon"><img src="/Taciti assets/assets-42.png" alt="Upskill To Innovate" /></div>
            <h3>Upskill To Innovate</h3>
            <p>Help build CoEs to upskill client&apos;s resources to adopt next-gen technologies to provide a better experience internally and externally</p>
          </div>
        </div>

        <div className="mfg-solutions-grid">
          <div className="mfg-solution-item">
            <h4>Standardization of processes</h4>
            <p>(Ex: Adopting technology best practices for process re-engineering)</p>
          </div>
          <div className="mfg-solution-item">
            <h4>Digitization of data</h4>
            <p>(Ex: Adopting technologies to enable Digital Twins, AR/VR, IoT)</p>
          </div>
          <div className="mfg-solution-item">
            <h4>Adoption of cloud-specific technologies</h4>
            <p>(Ex: Cloud computing application on the cloud for better resource utilization and reduced total cost of ownership (TCO))</p>
          </div>
          <div className="mfg-solution-item">
            <h4>Scalability of the solution</h4>
            <p>(Ex: Minimizing customization to ensure the solution is scalable for future business needs)</p>
          </div>
          <div className="mfg-solution-item">
            <h4>Automation of repetitive business and IT</h4>
            <p>(Ex: Test Automation, chatbot, RPA etc.)</p>
          </div>
          <div className="mfg-solution-item">
            <h4>Connected factories and warehouses</h4>
            <p>(Ex: Adopting state-of-the-art integration platforms and strategies to ensure real-time data integration)</p>
          </div>
          <div className="mfg-solution-item">
            <h4>Secure our data and ecosystem</h4>
            <p>(Ex: Adopt persona-based roles to minimize excess privilege, enhance cybersecurity, etc.)</p>
          </div>
          <div className="mfg-solution-item">
            <h4>Scalability of the solution</h4>
            <p>(Ex: Minimizing customization to ensure the solution is scalable for future business needs)</p>
          </div>
        </div>
      </section>

    </div>
  );
}
