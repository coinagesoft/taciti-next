"use client";
import "./life-sciences.css";

export default function LifeSciences() {
  return (
    <div className="lsci-page">

      {/* HERO */}
      <section className="lsci-hero">
        <div className="lsci-hero-box">
          <h1 className="lsci-hero-title">Life Sciences</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="lsci-overview">
        <h2>Overview</h2>
        <p>
          Life Sciences companies operate in the most rapidly evolving, highly regulated and complex environments
          of all industries. The recent pandemic has once again proven this, challenging all aspects of the value
          chain and forcing these life sciences companies to innovate rapidly.
        </p>
        <p>
          Rapidly changing business environments and increasing cost and pricing pressures require a flexible,
          scalable business model and supporting ecosystem to deliver the best outcomes to patients and meet
          regulatory requirements. At Taciti, we have a team of experts who have many years of experience and
          have spent over 100,000 consulting hours working with leading Life Sciences companies.
        </p>
      </section>

      {/* SERVICE CARDS */}
      <section className="lsci-cards-section">
        <div className="lsci-cards-row">

          <div className="lsci-card">
            <div className="lsci-card-header">
              <h4>R&amp;D Administration</h4>
              <span>
                <img src="/Taciti assets/assets-01.png" alt="" className="lsci-card-icon lsci-icon-default" />
                <img src="/Taciti assets/inverse icon-02.png" alt="" className="lsci-card-icon lsci-icon-hover" />
              </span>
            </div>
            <p>
              Managing clinical trials, regulatory submissions, and research data with compliant,
              integrated SAP processes to accelerate time to market.
            </p>
          </div>

          <div className="lsci-card">
            <div className="lsci-card-header">
              <h4>Compliant Manufacturing</h4>
              <span>
                <img src="/Taciti assets/assets-02.png" alt="" className="lsci-card-icon lsci-icon-default" />
                <img src="/Taciti assets/inverse icon-03.png" alt="" className="lsci-card-icon lsci-icon-hover" />
              </span>
            </div>
            <p>
              GMP-compliant manufacturing processes with full batch record management, quality assurance,
              and electronic batch records in SAP S/4HANA.
            </p>
          </div>

          <div className="lsci-card">
            <div className="lsci-card-header">
              <h4>Quality Assurance</h4>
              <span>
                <img src="/Taciti assets/assets-03.png" alt="" className="lsci-card-icon lsci-icon-default" />
                <img src="/Taciti assets/inverse icon-04.png" alt="" className="lsci-card-icon lsci-icon-hover" />
              </span>
            </div>
            <p>
              End-to-end quality management across the product lifecycle, from supplier qualification
              and incoming inspection to customer complaints and recalls.
            </p>
          </div>

        </div>

        <div className="lsci-cards-row-center">

          <div className="lsci-card">
            <div className="lsci-card-header">
              <h4>Controlled Logistics &amp; Supply Chain</h4>
              <span>
                <img src="/Taciti assets/assets-04.png" alt="" className="lsci-card-icon lsci-icon-default" />
                <img src="/Taciti assets/inverse icon-05.png" alt="" className="lsci-card-icon lsci-icon-hover" />
              </span>
            </div>
            <p>
              Cold chain management, serialization, track-and-trace, and global distribution with
              full regulatory compliance and real-time visibility.
            </p>
          </div>

          <div className="lsci-card">
            <div className="lsci-card-header">
              <h4>Order-to-Cash Transformation</h4>
              <span>
                <img src="/Taciti assets/assets-05.png" alt="" className="lsci-card-icon lsci-icon-default" />
                <img src="/Taciti assets/inverse icon-06.png" alt="" className="lsci-card-icon lsci-icon-hover" />
              </span>
            </div>
            <p>
              Optimizing working capital through streamlined order management, billing, collections,
              and deduction management processes.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
