"use client";

import React from "react";

export default function NextHorizon() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
      />

      {/* Intro */}
      <section className="intro-section">
        <div className="intro-box">
          <h1 className="main-title">Next Horizon</h1>
        </div>
      </section>

      {/* Workforce Stability */}
      <section className="life-section first-section">
        <div className="container text-center">
          <h2 className="section-heading">
            Workforce Stability: Building a Culture of Retention and Resilience
          </h2>
          <div className="row align-items-center">
            <div className="col-md-6 col-12 text-start text-content">
              <p>
                At Taciti Consulting, workforce stability is a reflection of our
                people-first philosophy.
              </p>
              <p>
                We prioritize employee well-being, foster a positive work
                culture, and invest in continuous growth opportunities.
              </p>
              <p>
                Through structured engagement programs, timely recognition, and
                transparent communication, we’ve created an environment where
                employees choose to stay and grow.
              </p>
              <p>
                Our balanced attrition rate and increasing long-term tenure are
                strong indicators of the trust and commitment our workforce
                places in the organization.
              </p>
            </div>
            <div className="col-md-6 col-12">
              <img
                src="/images/life/life-1.png"
                alt="Workforce Stability"
                className="life-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="life-section">
        <div className="container text-center">
          <h2 className="section-heading">Purposeful Hiring</h2>
          <div className="row align-items-center">
            {/* Left: Text + icons */}
            <div className="col-md-6 col-12 text-start text-content">
              <p>
                {/* <i className="bi bi-bullseye icon me-2"></i> */}
                At Taciti Consulting, hiring is not just about filling
                roles—it's about aligning people with purpose. Our recruitment
                approach is guided by strategic workforce planning, focusing on
                future capabilities, cultural fit, and long-term growth.
              </p>
              <p>
                {/* <i className="bi bi-person-badge icon me-2"></i> */}
                We prioritize quality over quantity, ensuring each hire adds
                value not just to the team, but to the organization’s vision.
              </p>
              <p>
                {/* <i className="bi bi-stars icon me-2"></i> */}
                Whether it’s expanding core capabilities or building niche
                expertise, every recruitment decision is made with a clear
                intent—to strengthen our foundation for sustainable growth.
              </p>
              <p>
                {/* <i className="bi bi-people icon me-2"></i> */}
                By collaborating closely with business and delivery teams, our
                HR function ensures that new talent is aligned with evolving
                priorities and prepared to contribute meaningfully from day one.
              </p>
            </div>

            {/* Right: Image */}
            <div className="col-md-6 col-12">
              <img
                src="/images/life/life-2.png"
                alt="Purposeful Hiring"
                className="life-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustained Employee Engagement */}
      <section className="life-section blue-bg-section">
        <div className="container text-center">
          <h2 className="section-heading text-white">Sustained Employee Engagement</h2>
          <div className="row align-items-center text-white">
            <div className="col-md-6 col-12 text-start text-content">
              <p>
                At Taciti Consulting, employee engagement is a long-term
                strategy rooted in trust, transparency, and continuous
                improvement.
              </p>
              <p>
                Through regular pulse surveys, leadership connects, and targeted
                initiatives, we’ve fostered a culture where employees feel
                heard, valued, and inspired.
              </p>
              <p>
                Our focused efforts have led to a 40% improvement in engagement
                scores over time—reflecting a more motivated and connected
                workforce.
              </p>
              <p>
                From recognition programs to learning opportunities and
                inclusive celebrations, we create ongoing touchpoints that
                strengthen team bonds and drive organizational performance.
              </p>
            </div>
            <div className="col-md-6 col-12">
              <img
                src="/images/life/life-3.png"
                alt="Employee Engagement"
                className="life-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Workforce Expansion */}
      <section className="life-section">
        <div className="container text-center">
          <h2 className="section-heading">Strategic Workforce Expansion</h2>
          <p className="workforce-text">
            Workforce growth in FY 2024–25: Strategic expansion in India (29%)
            and the US (75%), with key focus areas in SAP, PLM Enovia,
            leadership, and cybersecurity.
          </p>
        </div>
      </section>

      {/* Growing Stronger, Together - equal image sizes */}
      <section className="life-section">
        <div className="container text-center">
          <h2 className="section-heading">Growing Stronger, Together</h2>
          <p className="workforce-text">
            At Taciti Consulting, we believe that true growth is rooted in
            people. Over 39% of our employees have been with us for more than 4
            years, a testament to the trust, stability, and long-term
            opportunities we foster. Their continued presence not only drives
            consistency but also fuels the strategic evolution of our
            organization.
          </p>
          <div className="row mt-4">
            <div className="col-md-6 col-12">
              <img
                src="/images/life/life-4.png"
                alt="Growing Together 1"
                className="life-image-equal"
              />
            </div>
            <div className="col-md-6 col-12">
              <img
                src="/images/life/life-5.png"
                alt="Growing Together 2"
                className="life-image-equal"
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .intro-section {
          background: url("/images/next-horizon.png") no-repeat;
          height: 40vw;
          width: 100vw;
          background-size: cover;
          background-position: top;
        }
        .intro-box {
          margin-left: 150px;
          padding-top: 100px;
        }
        .main-title {
          color: #fff;
          font-size: 55px;
          font-family: "futuraptMedium";
        }
        .tagline {
          font-size: 1.3rem;
          max-width: 700px;
          margin: 0 auto;
          color: #555;
        }
        .life-section {
          padding: 60px 0;
        }
        .first-section {
          padding-top: 0;
        }
        .section-heading {
          font-size: 1.9rem;
          font-weight: bold;
          margin-bottom: 30px;
        }
        .life-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
        .life-image-small {
          width: 70%;
          height: auto;
          border-radius: 8px;
        }
        .life-image-equal {
          width: 100%;
          height: 350px;
          object-fit: cover;
          border-radius: 8px;
        }
        .purposeful-hiring {
          background: #f9f9f9 url("/images/life/skyline-bg.png") center/cover
            no-repeat;
          padding: 60px 20px;
        }
        .purpose-wrapper {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          max-width: 1000px;
          margin: 0 auto;
          gap: 20px;
        }
        .purpose-text {
          max-width: 700px;
        }
        .purpose-text p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        .icon-col {
          font-size: 2rem;
          color: #1e4489;
          height: 100%;
        }
        .icon {
          font-size: 1.3rem;
          color: #1e4489;
        }
        .blue-bg-section {
            background-color: #1e4489;
        }
        .text-white {
            color: #fff !important;
        }
        .blue-bg-section p {
            color: #fff !important;
        }

        .purpose-img {
          width: 100%;
          max-width: 900px;
          border-radius: 12px;
          object-fit: cover;
        }
        .workforce-text {
            padding-left: 100px;
            padding-right: 100px;
        }

        @media (max-width: 767px) {
          .intro-box {
            margin-left: 20px;
            padding-top: 50px;
          }
          .main-title {
            font-size: 40px;
          }
          .life-image-equal {
            margin-bottom: 20px;
          }
          .life-section {
            padding-left: 30px;
            padding-right: 30px;
          }
          .text-content {
            padding-left: 15px;
            padding-right: 15px;
          }
          .workforce-text {
            padding-left: 15px;
            padding-right: 15px;
          }
        }
      `}</style>
    </div>
  );
}
