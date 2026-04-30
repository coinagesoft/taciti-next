"use client";
import React, { useState } from "react";

const teamMembers = [
  { id: 1, name: "Deepak Bundela", role: "CEO & Managing Partner", img: "/Taciti assets/assests-76.png", bio: "Deepak Bundela is the CEO & Managing Partner at Taciti Consulting. With over 25 years of experience in enterprise consulting, he has led transformative engagements for Fortune 500 companies across the globe. His expertise spans strategic advisory, ERP-led transformations, and organizational change management." },
  { id: 2, name: "Alok Shrivastava", role: "Managing Partner", img: "/Taciti assets/assests-74.png", bio: "Alok Shrivastava is a Managing Partner at Taciti Consulting. He brings deep expertise in SAP implementation, business process re-engineering, and large-scale ERP transformation programs across multiple industries." },
  { id: 3, name: "Ram Battula", role: "Managing Partner", img: "/Taciti assets/assests-75.png", bio: "Ram Battula is a Managing Partner at Taciti Consulting, leading key client engagements and strategic advisory across digital transformation and IT consulting practices." },
  { id: 4, name: "Rishi Handa", role: "Managing Partner", img: "/Taciti assets/assests-77.png", bio: "Rishi Handa is a Managing Partner at Taciti Consulting with extensive experience in enterprise technology consulting, business strategy, and delivering large-scale transformation programs." },
  { id: 5, name: "Nikhil Nahar", role: "Head of Business Operations", img: "/Taciti assets/assests-78.png", bio: "Nikhil Nahar is the Head of Business Operations at Taciti Consulting. With deep expertise in enterprise operations and business strategy, Nikhil leads the operational backbone of Taciti's delivery excellence." },
  { id: 6, name: "Mihir Patel", role: "Associate Director – ERP Transformation", img: "/Taciti assets/assests-79.png", bio: "Mihir Patel is an Associate Director focused on ERP-led transformations at Taciti. He has extensive experience managing complex multi-country SAP rollouts and process harmonization programs." },
  { id: 7, name: "Ravi Iyer", role: "Principal Consultant – Cyber Security", img: "/Taciti assets/assests-80.png", bio: "Ravi Iyer is the Principal Consultant for Cyber Security at Taciti. He specializes in SAP security, risk management, and regulatory compliance, helping organizations build robust security frameworks." },
  { id: 8, name: "Priya Sharma", role: "Director – Strategy & Advisory", img: "/Taciti assets/assests-75.png", bio: "Priya Sharma serves as Director of Strategy & Advisory at Taciti. She specializes in digital transformation roadmaps and business process reengineering across manufacturing and life sciences sectors." },
];

export default function AboutUs() {
  const [popup, setPopup] = useState(null);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
      />

      {/* ── HERO ── */}
      <section className="intro-section">
        <div className="intro-box">
          <h1 className="main-title">About Us</h1>
        </div>
      </section>

      {/* ── KNOW US ── */}
      <section className="life-section know-section">
        <div className="container text-center">
          <h2 className="section-heading">Know us</h2>
          <p className="know-text">
            Founded in 2019 as DPCon Solutions by enterprise professionals with over 25 years of
            experience. Recently we have undertaken a rebranding exercise and have changed the
            firm&apos;s name to Taciti Consulting.
          </p>
          <p className="know-text">
            At Taciti we offer unbiased and informed advisory services to empower businesses to
            adapt and grow in the ever-evolving digital landscape. We have worked with some of the
            biggest brands across the globe. Whether you&apos;re seeking strategic insights,
            innovative solutions, or practical implementation strategies, our mission is to support
            you in achieving your digital transformation goals and staying ahead of the competition.
            We are committed to delivering results and building long-term relationships with our
            clients.
          </p>
        </div>
      </section>

      {/* ── VISION / MISSION / VALUES ── */}
      <section className="vmv-section">
        <div className="vmv-quote-left">&ldquo;</div>
        <div className="vmv-quote-right">&rdquo;</div>
        <div className="container vmv-container">
          <div className="vmv-bg-shape vmv-bg-shape--1"></div>
          <div className="vmv-bg-shape vmv-bg-shape--2"></div>

          <div className="vmv-row">
            <div className="vmv-item">
              <div className="vmv-label">VISION</div>
              <div className="vmv-divider"></div>
              <p className="vmv-text">
                At Taciti, our vision is to cultivate a community of passionate and innovative
                minds, dedicated to providing unparalleled customer experience. We firmly believe
                in delivering tangible business value, transcending beyond mere services.
              </p>
            </div>
            <div className="vmv-item">
              <div className="vmv-label">MISSION</div>
              <div className="vmv-divider"></div>
              <p className="vmv-text">
                To be a trusted transformation partner for both Business and IT organizations by
                providing unbiased consulting to unearth &ldquo;True Transformations&rdquo; that
                drive higher organizational growth.
              </p>
            </div>
            <div className="vmv-item">
              <div className="vmv-label">VALUES</div>
              <div className="vmv-divider"></div>
              <p className="vmv-text">
                Customer centricity, Transparency, Innovative solutions, On-Time Delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET OUR TEAM ── */}
      <section className="team-section">
        <div className="team-grid">

          {/* Blue label panel */}
          <div className="team-label-panel">
            <p className="team-label-text">Meet<br />our team</p>
          </div>

          {/* 4 × 2 photo grid */}
          {teamMembers.map((member) => (
            <div key={member.id} className="team-cell" onClick={() => setPopup(member)}>
              <img
                src={member.img}
                alt={member.name}
                className="team-photo"
              />
              <div className="team-overlay">
                <span className="team-name">{member.name}</span>
                <span className="team-role">{member.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom paragraph */}
        <div className="team-bottom">
          <p>
            A reverse pyramid model with highly experienced team of professionals, committed to
            designing industry solutions based on leading best practices and client needs. Deep
            expertise across business process reengineering, benchmarking, large scale
            transformation management, roadmap definition and implementations.
          </p>
        </div>
      </section>

      {/* ── POPUP MODAL ── */}
      {popup && (
        <div className="au-modal" onClick={() => setPopup(null)}>
          <div className="au-modal__box" onClick={(e) => e.stopPropagation()}>
            <button className="au-modal__close" onClick={() => setPopup(null)}>&#10005;</button>
            <div className="au-modal__inner">
              <img src={popup.img} alt={popup.name} className="au-modal__photo" />
              <div className="au-modal__info">
                <h3 className="au-modal__name">{popup.name}</h3>
                <p className="au-modal__role">{popup.role}</p>
                <p className="au-modal__bio">{popup.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`

        /* ── HERO ── */
        .intro-section {
                    background: url("/images/about-us-hero.png") no-repeat;
                    height: 100vh;
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

        /* ── KNOW US ── */
        .know-section {
          background: #fff;
        }
        .life-section {
          padding: 60px 0;
        }
        .section-heading {
          font-size: 1.9rem;
          font-weight: bold;
          margin-bottom: 24px;
          color: #013470;
        }
        .know-text {
          font-size: 14.5px;
          color: #4e5764;
          line-height: 1.78;
          text-align: left;
          margin-bottom: 16px;
          font-family: "Roboto", sans-serif;
        }

        /* ── VISION / MISSION / VALUES ── */
        .vmv-section {
          background: #eef4fb;
          padding: 70px 0;
          position: relative;
          overflow: hidden;
        }
        .vmv-quote-left {
          position: absolute;
          top: 20px;
          left: 36px;
          font-size: 130px;
          color: #174c93;
          opacity: 0.12;
          font-family: Georgia, serif;
          line-height: 1;
          user-select: none;
        }
        .vmv-quote-right {
          position: absolute;
          bottom: 0;
          right: 36px;
          font-size: 130px;
          color: #174c93;
          opacity: 0.12;
          font-family: Georgia, serif;
          line-height: 1;
          user-select: none;
        }
        .vmv-container {
          position: relative;
        }
        .vmv-bg-shape {
          position: absolute;
          background: rgba(23, 76, 147, 0.055);
          border-radius: 4px;
        }
        .vmv-bg-shape--1 {
          width: 55%;
          height: 110%;
          top: -5%;
          right: -4%;
          transform: skewX(-14deg);
        }
        .vmv-bg-shape--2 {
          width: 32%;
          height: 80%;
          top: 10%;
          right: 10%;
          transform: skewX(-14deg);
          background: rgba(23, 76, 147, 0.035);
        }
        .vmv-row {
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 2;
        }
        .vmv-item {
          display: grid;
          grid-template-columns: 150px 2px 1fr;
          align-items: start;
          gap: 0 36px;
          padding: 34px 0;
          border-bottom: 1px solid rgba(23, 76, 147, 0.14);
        }
        .vmv-item:last-child {
          border-bottom: none;
        }
        .vmv-label {
          font-size: 17px;
          font-weight: 800;
          color: #013470;
          font-family: "Futura PT Bold", sans-serif;
          letter-spacing: 1px;
          padding-top: 2px;
          text-align: right;
        }
        .vmv-divider {
          width: 2px;
          background: #174c93;
          align-self: stretch;
          min-height: 20px;
          border-radius: 2px;
        }
        .vmv-text {
          font-size: 14.5px;
          color: #4e5764;
          line-height: 1.78;
          font-family: "Roboto", sans-serif;
          margin: 0;
          text-align: justify;
        }

        /* ── MEET OUR TEAM ── */
        .team-section {
          background: #fff;
        }
        .team-grid {
          display: grid;
          grid-template-columns: 220px repeat(4, 1fr);
          grid-template-rows: repeat(2, 240px);
        }
        .team-label-panel {
          background: #013470;
          display: flex;
          align-items: center;
          justify-content: center;
          grid-row: 1 / 3;
          grid-column: 1 / 2;
        }
        .team-label-text {
          color: #fff;
          font-size: 30px;
          font-weight: 800;
          font-family: "Futura PT Bold", sans-serif;
          line-height: 1.3;
          text-align: left;
          padding: 0 24px;
          margin: 0;
        }
        .team-cell {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .team-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          filter: grayscale(100%);
          transition: filter 0.4s ease, transform 0.4s ease;
        }
        .team-cell:hover .team-photo {
          filter: grayscale(0%);
          transform: scale(1.06);
        }
        .team-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(0deg, rgba(1,52,112,0.90) 0%, rgba(1,52,112,0) 100%);
          padding: 40px 12px 10px;
          transform: translateY(100%);
          transition: transform 0.32s ease;
        }
        .team-cell:hover .team-overlay {
          transform: translateY(0);
        }
        .team-name {
          display: block;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          font-family: "Futura PT Bold", sans-serif;
        }
        .team-role {
          display: block;
          color: rgba(255,255,255,0.80);
          font-size: 10.5px;
          font-family: "Roboto", sans-serif;
          margin-top: 2px;
        }

        /* ── TEAM BOTTOM TEXT ── */
        .team-bottom {
          background: #eef4fb;
          padding: 36px 80px;
          text-align: center;
        }
        .team-bottom p {
          font-size: 14.5px;
          color: #4e5764;
          line-height: 1.78;
          font-family: "Roboto", sans-serif;
          max-width: 900px;
          margin: 0 auto;
        }

        /* ── MODAL ── */
        .au-modal {
          position: fixed;
          inset: 0;
          background: rgba(1,52,112,0.55);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .au-modal__box {
          background: #fff;
          border-radius: 12px;
          max-width: 580px;
          width: 100%;
          padding: 40px;
          position: relative;
          box-shadow: 0 24px 64px rgba(1,52,112,0.28);
        }
        .au-modal__close {
          position: absolute;
          top: 14px;
          right: 14px;
          background: none;
          border: none;
          font-size: 20px;
          color: #013470;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
          transition: background 0.2s;
        }
        .au-modal__close:hover { background: #eef4fb; }
        .au-modal__inner {
          display: flex;
          gap: 28px;
          align-items: flex-start;
        }
        .au-modal__photo {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
          object-position: top center;
          flex-shrink: 0;
          border: 3px solid #174c93;
        }
        .au-modal__name {
          font-size: 22px;
          font-weight: 700;
          color: #013470;
          font-family: "Futura PT Bold", sans-serif;
          margin: 0 0 4px;
        }
        .au-modal__role {
          font-size: 13.5px;
          color: #174c93;
          font-weight: 600;
          font-family: "Roboto", sans-serif;
          margin: 0 0 14px;
        }
        .au-modal__bio {
          font-size: 14px;
          color: #4e5764;
          line-height: 1.72;
          font-family: "Roboto", sans-serif;
          margin: 0;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: 160px repeat(4, 1fr);
            grid-template-rows: repeat(2, 200px);
          }
        }

        @media (max-width: 767px) {
          .intro-section { height: 50vw; }
          .intro-box { margin-left: 20px; padding-top: 50px; }
          .main-title { font-size: 40px; }
          .life-section { padding-left: 30px; padding-right: 30px; }
          .vmv-item {
            grid-template-columns: 1fr;
            gap: 10px 0;
            padding: 22px 0;
          }
          .vmv-label { text-align: left; }
          .vmv-divider { width: 36px; height: 2px; align-self: auto; }
          .vmv-section { padding: 40px 20px; }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
          }
          .team-label-panel { grid-row: 1/2; grid-column: 1/3; height: 90px; }
          .team-cell { height: 160px; }
          .team-bottom { padding: 28px 20px; }
          .au-modal__inner { flex-direction: column; align-items: center; text-align: center; }
        }
      `}</style>
    </div>
  );
}