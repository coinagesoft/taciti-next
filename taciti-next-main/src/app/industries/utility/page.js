"use client";
import "./utility.css";

export default function Utility() {
  return (
    <div className="utility-page">
      {/* HERO */}
      <section className="utility-hero">
        <div className="utility-hero-box">
          <h1 className="utility-hero-title">Utilities</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="utility-overview">
        <h2>Overview</h2>
        <p>
          At Taciti, we understand the critical role that utilities play in
          powering our modern world. The ever-evolving landscape of the energy
          and utilities industry demands innovative solutions to address complex
          challenges. That&apos;s where our Utilities practice comes in.
        </p>
        <p>
          We are dedicated to helping energy and utilities companies harness the
          power of SAP&apos;s cutting-edge technology to optimize their
          operations, enhance customer experiences, and drive sustainable
          growth. With a team of seasoned experts who possess deep industry
          knowledge and SAP proficiency, we offer tailored solutions that align
          with the unique requirements of the utilities sector.
        </p>
      </section>

      {/* SERVICE CARDS */}
      <section className="utility-cards-section">
        {/* Row 1 – 3 cards */}
        <div className="utility-cards-row">
          {/* Digital Transformation */}
          <div className="utility-card">
            <div className="utility-card-header">
              <h4>Digital Transformation</h4>
              <span>
                <img
                  src="/Taciti assets/utilities icon-02.png"
                  alt=""
                  className="utility-card-icon utility-card-icon-default"
                />
                <img
                  src="/Taciti assets/utilities icon-07.png"
                  alt=""
                  className="utility-card-icon utility-card-icon-hover"
                />
              </span>
            </div>
            <p>
              In the fast-paced manufacturing world, we prioritize precision,
              efficiency, and innovation. Our services optimize production,
              elevate product quality, and enhance supply chain management,
              fostering success through streamlined operations and cutting-edge
              technology integration.
            </p>
          </div>

          {/* Asset Management */}
          <div className="utility-card">
            <div className="utility-card-header">
              <h4>Asset Management</h4>
              <span>
                <img
                  src="/Taciti assets/utilities icon-03.png"
                  alt=""
                  className="utility-card-icon utility-card-icon-default"
                />
                <img
                  src="/Taciti assets/utilities icon-08.png"
                  alt=""
                  className="utility-card-icon utility-card-icon-hover"
                />
              </span>
            </div>
            <p>
              In the highly regulated and rapidly evolving life sciences
              industry, our services are designed to support your mission of
              improving healthcare and enhancing patient outcomes. From
              compliance and quality assurance to research and development, we
              provide specialized solutions that enable you to navigate complex
              regulatory landscapes and innovate in drug development.
            </p>
          </div>

          {/* Customer Engagement */}
          <div className="utility-card">
            <div className="utility-card-header">
              <h4>Customer Engagement</h4>
              <span>
                <img
                  src="/Taciti assets/utilities icon-04.png"
                  alt=""
                  className="utility-card-icon utility-card-icon-default"
                />
                <img
                  src="/Taciti assets/utilities icon-09.png"
                  alt=""
                  className="utility-card-icon utility-card-icon-hover"
                />
              </span>
            </div>
            <p>
              Consumer preferences and market dynamics are constantly changing
              in the CPG sector. Our services are aimed at helping you stay
              competitive and responsive. We offer strategies to optimize supply
              chain logistics, innovate in product development, and create
              compelling brand experiences to capture consumer attention and
              loyalty.
            </p>
          </div>
        </div>

        {/* Row 2 – 2 cards centered */}
        <div className="utility-cards-row-center">
          {/* Data Analytics */}
          <div className="utility-card">
            <div className="utility-card-header">
              <h4>Data Analytics &amp; Insights</h4>
              <span>
                <img
                  src="/Taciti assets/utilities icon-05.png"
                  alt=""
                  className="utility-card-icon utility-card-icon-default"
                />
                <img
                  src="/Taciti assets/utilities icon-10.png"
                  alt=""
                  className="utility-card-icon utility-card-icon-hover"
                />
              </span>
            </div>
            <p>
              The high-tech industry demands constant innovation and adaptation.
              We provide services that enable you to employ emerging
              technologies, drive digital transformation, and maintain a
              competitive edge. We&apos;re equipped to assist you in navigating
              the ever-evolving landscape of high technology.
            </p>
          </div>

          {/* Regulatory Compliance */}
          <div className="utility-card">
            <div className="utility-card-header">
              <h4>Regulatory Compliance</h4>
              <span>
                <img
                  src="/Taciti assets/utilities icon-06.png"
                  alt=""
                  className="utility-card-icon utility-card-icon-default"
                />
                <img
                  src="/Taciti assets/utilities icon-11.png"
                  alt=""
                  className="utility-card-icon utility-card-icon-hover"
                />
              </span>
            </div>
            <p>
              The utilities sector faces unique challenges in balancing
              sustainability, regulatory compliance, and customer service. We
              aim to support your efforts in providing reliable and sustainable
              utility services to communities.
            </p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="utility-whyus">
        <h2>Why Us?</h2>

        <div className="utility-whyus-top">
          <div className="utility-whyus-item">
            <h3>Industry Expertise</h3>
            <p>
              Our team comprises professionals with in-depth knowledge of both
              the utilities sector and SAP technology, providing you with
              holistic solutions that address your specific challenges.
            </p>
          </div>
          <div className="utility-whyus-item">
            <h3>Customized Solutions</h3>
            <p>
              We understand that each utility company is unique. Our approach
              involves tailoring SAP solutions to your exact needs, ensuring
              maximum ROI and value.
            </p>
          </div>
          <div className="utility-whyus-item">
            <h3>End-to-End Support</h3>
            <p>
              From initial consultation to post-implementation support, we
              accompany you every step of the way, ensuring a smooth transition
              and ongoing success.
            </p>
          </div>
        </div>

        <div className="utility-whyus-bottom">
          <div className="utility-whyus-item">
            <h3>Innovation Focus</h3>
            <p>
              The utilities industry is evolving rapidly. We stay at the
              forefront of technological advancements, offering you innovative
              solutions that future-proof your operations.
            </p>
          </div>
          <div className="utility-whyus-item">
            <h3>Proven Track Record</h3>
            <p>
              Our track record speaks for itself. We have successfully empowered
              numerous utilities companies to transform their operations, enhance
              customer relationships, and achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
