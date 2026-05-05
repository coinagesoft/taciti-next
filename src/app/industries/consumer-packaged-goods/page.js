"use client";
import "./consumer-packaged-goods.css";

export default function ConsumerPackagedGoods() {
  return (
    <div className="cpg-page">

      {/* HERO */}
      <section className="cpg-hero">
        <div className="cpg-hero-box">
          <h1 className="cpg-hero-title">Consumer Packaged Goods</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="cpg-overview">
        <h2>Overview</h2>
        <p>
          In the dynamic world of Consumer Packaged Goods, speed, agility, and customer-centricity are paramount.
          Our CPG practice supports brands in driving supply chain excellence, digital innovation, and operational
          efficiency — enabling them to stay ahead of shifting consumer demands and market disruptions.
        </p>
        <p>
          At Taciti, we work with leading CPG companies to design and implement scalable, integrated business
          platforms powered by SAP. Our team brings deep industry knowledge and hands-on experience across
          planning, manufacturing, logistics, and commercial operations to help you compete and grow.
        </p>
      </section>

      {/* EXPERTISE */}
      <section className="cpg-expertise">
        <div className="cpg-expertise-inner">
          <div className="cpg-expertise-content">
            <h2>Our Expertise</h2>
            <p>
              We help CPG companies unlock value through end-to-end transformation — from demand sensing and
              integrated business planning to trade promotion management and direct-store delivery.
            </p>
            <p>
              Our SAP-led solutions cover the full value chain: procurement, manufacturing, quality, warehousing,
              distribution, and customer service — all connected in real-time for better visibility and faster decisions.
            </p>
          </div>
          <div className="cpg-expertise-image">
            <img src="/Taciti assets/Consumer packaged goods-86.png" alt="CPG Expertise" />
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="cpg-principles">
        <h2 className="cpg-principles-heading">
          Empowering CPG Brands with Innovation &amp; Intelligence
        </h2>
        <div className="cpg-principles-grid">
          <div className="cpg-principle">
            <img src="/Taciti assets/assets-04.png" alt="Supply Chain" />
            <p>Supply Chain Excellence &amp; End-to-End Visibility</p>
          </div>
          <div className="cpg-principle">
            <img src="/Taciti assets/assets-05.png" alt="Digital Commerce" />
            <p>Digital Commerce &amp; Customer Engagement</p>
          </div>
          <div className="cpg-principle">
            <img src="/Taciti assets/assets-06.png" alt="Analytics" />
            <p>Data-Driven Insights &amp; Predictive Analytics</p>
          </div>
        </div>
      </section>

    </div>
  );
}
