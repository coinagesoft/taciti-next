"use client";
import "./consumer-packaged-goods.css";

export default function ConsumerPackagedGoods() {
  return (
    <div className="cpg-page">
      {/* HERO */}
      <section className="cpg-hero">
        <div className="cpg-hero-box">
          <h1 className="cpg-hero-title">Consumer Packaged Goods (CPG)</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="cpg-overview">
        <h2>Overview</h2>
        <p>
          Where there&apos;s growth, there are also unique challenges. The
          meteoric rise of the Consumer Packaged Goods (CPG) industry, in just a
          few decades, has brought forth unique challenges that require
          unconventional solutions. The main fuel behind CPG companies&apos;
          success has been global consumer markets, a sharp focus on a
          high-demand product portfolio, fast development of international scale
          value chain operations, innovative products and customer satisfaction.
          But this formula cannot work forever. The issues of the future have
          arrived today.
        </p>
      </section>

      {/* OUR EXPERTISE */}
      <section className="cpg-expertise">
        <div className="cpg-expertise-inner">
          {/* 👈 IMAGE FIRST */}
          <div className="cpg-expertise-image">
            <img src="/Taciti assets/assets-28.png" alt="CPG Expertise" />
          </div>

          {/* 👈 CONTENT SECOND */}
          <div className="cpg-expertise-content">
            <h2>Our Expertise</h2>

            <p>
              Natural resource depletion, market disruption, technological
              disruptions, strict carbon emission standards and tedious and
              strict industry regulations are already causing widespread
              disruptions. Organizations need to adapt, evolve and build an
              ecosystem that is agile, scalable and resilient to meet the new
              generation of challenges.
            </p>

            <p>
              Decades have brought forth unique challenges that require
              unconventional solutions. The main fuel behind CPG companies’
              success has been global consumer markets, sharp focus on
              high-demand product portfolio, fast development of international
              scale value chain operations, innovative products and customer
              satisfaction. But this formula cannot work forever. The issues of
              the future have arrived today.
            </p>

            <p>
              At Taciti, solving issues in the CPG industry has been our forte
              as we have been closely associated with the top international
              names in the CPG industry for the past 20 years. We have firsthand
              seen the challenges of a globally competitive market and the
              challenges across the value chain. We have helped our clients
              overcome these challenges through transformation.
            </p>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION PRINCIPLES */}
      <section className="cpg-principles">
        <h2 className="cpg-principles-heading">
          Our approach to transformation will be based on the following
          principles:
        </h2>

        <div className="cpg-principles-grid">
          <div className="cpg-principle">
            <img src="/Taciti assets/small-icons-02.png" alt="" />
            <p>Quickly adapt product innovation for quicker market launches</p>
          </div>

          <div className="cpg-principle">
            <img src="/Taciti assets/small-icons-03.png" alt="" />
            <p>
              Stay competitive by assessing value levers in production and
              distribution
            </p>
          </div>

          <div className="cpg-principle">
            <img src="/Taciti assets/small-icons-04.png" alt="" />
            <p>
              Applying preset templates for better visualizations and adoption
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
