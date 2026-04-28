"use client";
import "./industries.css";
import Link from "next/link";

export default function Industries() {
  return (
    <div className="ind-page">
      {/* HERO */}
      <section className="ind-hero">
        <div className="ind-hero-content">
          <h1>
            Industries <br />
            We Cater To
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="ind-intro">
        <h2 className="ind-sub">Industries We Cater To</h2>
        <p>
          At the nexus of innovation and strategic insight, our company is
          primed to empower businesses across a spectrum of industries to
          fulfill their transformative needs. We take pride in our dynamic,
          results-oriented approach to pinpointing and executing effective
          solutions. With our dedicated team, boasting a collective track record
          of over 100,000 consulting hours, we bring a wealth of expertise to
          the fore. Moreover, our meticulously curated portfolio comprises over
          50 sharply tailored solutions, each crafted to address the unique
          challenges and opportunities present in various sectors.
        </p>
        <p>
          Taciti stands as your committed ally on the path to transformative
          success. Supported by a passionate team, extensive consulting
          experience and a diverse solution portfolio, we are ready to assist
          your business in flourishing amidst an ever-evolving landscape.
          Whether you aim to streamline operations, broaden market reach or
          tackle industry-specific hurdles, we possess the expertise and
          innovation necessary to facilitate your goals. Embrace a new era of
          transformation with us.
        </p>
        <p>
          Our extensive range of services caters to a diverse array of
          industries, each characterized by its distinct requirements and
          complexities. Here&apos;s an overview of the industries we proudly
          serve:
        </p>
        <h2 className="ind-know">Know More About How We Serve</h2>
      </section>

      {/* CARDS */}
      <section className="ind-cards-section">
        {/* Row 1 – Manufacturing, Life Sciences, CPG */}
        <div className="ind-cards-row">
          {/* Manufacturing */}
          <div className="ind-card">
            <div className="ind-card-header">
              <h4>Manufacturing</h4>
              <span>
                <img
                  src="/Taciti assets/inverse icons - Industries-09.png"
                  alt=""
                  className="ind-card-icon ind-icon-default"
                />
                <img
                  src="/Taciti assets/assets-44.png"
                  alt=""
                  className="ind-card-icon ind-icon-hover"
                />
              </span>
            </div>
            <p>
              In the dynamic realm of manufacturing, we prioritize precision,
              efficiency and innovation. Our tailored services optimize
              production, enhance product quality and refine supply chain
              management. From streamlined operations to cutting-edge tech
              integration, we fuel manufacturing success.
            </p>
            <Link href="/industries/manufacturing">Learn more</Link>
          </div>

          {/* Life Sciences */}
          <div className="ind-card">
            <div className="ind-card-header">
              <h4>Life Sciences</h4>
              <span>
                <img
                  src="/Taciti assets/blueicon-28.png"
                  alt=""
                  className="ind-card-icon ind-icon-default"
                />
                <img
                  src="/Taciti assets/inverse icons - Industries-10.png"
                  alt=""
                  className="ind-card-icon ind-icon-hover"
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
            <Link href="/industries/life-sciences">Learn more</Link>
          </div>

          {/* CPG */}
          <div className="ind-card">
            <div className="ind-card-header">
              <h4>
                Consumer Packaged <br />
                Goods (CPG)
              </h4>
              <span>
                <img
                  src="/Taciti assets/assets-45.png"
                  alt=""
                  className="ind-card-icon-cpg ind-icon-default"
                />
                <img
                  src="/Taciti assets/inverse icons - Industries-11.png"
                  alt=""
                  className="ind-card-icon-cpg ind-icon-hover"
                />
              </span>
            </div>
            <p>
              Consumer preferences and market dynamics are constantly changing
              in the CPG sector. Our services are aimed at helping you stay
              competitive and responsive. We offer strategies to optimize supply
              chain logistics, innovate in product development and create
              compelling brand experiences to capture consumer attention and
              loyalty.
            </p>
            <Link href="/industries/consumer-packaged-goods">Learn more</Link>
          </div>
        </div>

        {/* Row 2 – Hi-Tech, Utilities (centered) */}
        <div className="ind-cards-row-center">
          {/* Hi-Tech */}
          <div className="ind-card">
            <div className="ind-card-header">
              <h4>Hi-Tech</h4>
              <span>
                <img
                  src="/Taciti assets/assests.png"
                  alt=""
                  className="ind-card-icon ind-icon-default"
                />
                <img
                  src="/Taciti assets/inverse icons - Industries-12.png"
                  alt=""
                  className="ind-card-icon ind-icon-hover"
                />
              </span>
            </div>
            <p>
              High-tech industry demands constant innovation and adaptation. We
              provide services that emerge and enable one to find employment.
              Technologies drive digital transformation and maintain a
              competitive edge. We&apos;re equipped to help you navigate the
              constantly evolving landscape of high-technology.
            </p>
            <Link href="/industries/hi-tech">Learn more</Link>
          </div>

          {/* Utilities */}
          <div className="ind-card">
            <div className="ind-card-header">
              <h4>Utilities</h4>
              <span>
                <img
                  src="/Taciti assets/asset3.png"
                  alt=""
                  className="ind-card-icon-util ind-icon-default"
                />
                <img
                  src="/Taciti assets/inverse icons - Industries-13.png"
                  alt=""
                  className="ind-card-icon-util ind-icon-hover"
                />
              </span>
            </div>
            <p>
              The utilities sector faces unique challenges in balancing
              sustainability, regulatory compliance and customer service. We aim
              to support your efforts in providing reliable and sustainable
              utility services to communities.
            </p>
            <Link href="/industries/utility">Learn more</Link>
          </div>
        </div>
      </section>
    </div>
  );
}