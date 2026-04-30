"use client";

import React from "react";

export default function TacitiCares() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
      />

      {/* Hero Section */}
      <section className="intro-section">
        <div className="intro-box">
          <h1 className="main-title">Taciti Cares</h1>
        </div>
      </section>

      {/* Charity T10 Tournament */}
      {/* <div className="row text-center my-5">
        <h2 className="life-heading">Life @ Taciti - Taciti Cares</h2>
      </div> */}

      <section className="life-sections first-section" id="charity">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center my-4">
            <div className="col-md-6 col-12 my-3">
              <h2 className="life-heading mobile-center">
                Charity T10 Tournament – Playing for a Purpose
              </h2>
              <p>
                Our annual T10 cricket tournament raises funds to support senior
                living homes. Through this spirited event, Taciti employees play
                not just for victory, but to contribute towards the care,
                comfort, and well-being of the elderly — combining teamwork with
                purpose.
              </p>
            </div>
            <div className="col-md-6 col-12 my-3 text-center">
              <img
                src="/images/life/charity.png"
                className="life-image"
                alt="Charity T10 tournament"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🌳 Tree Plantation Drive (with white text) */}
      <section className="life-sections tree-section">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-12">
              <div className="tree-text">
                <h2 className="life-heading">
                  Tree Plantation Drive – Growing a Greener Tomorrow
                </h2>
                <p>
                  At Taciti, we’re committed to building a sustainable tomorrow.
                  Through our Tree Plantation Drives, organized in collaboration
                  with environment-focused NGOs, our employees actively
                  contribute to reforestation and urban greening efforts. These
                  initiatives not only reduce our carbon footprint but also
                  foster a deeper connection with nature — making every sapling
                  a symbol of hope and renewal.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-12 my-3">
                  <img
                    src="/images/life/plant-1.png"
                    className="life-image-three-women"
                  />
                </div>
                <div className="col-md-6 col-12 my-3">
                  <img
                    src="/images/life/plant-2.png"
                    className="life-image-three-women"
                  />
                </div>
                <div className="col-md-6 col-12 my-3">
                  <img
                    src="/images/life/plant-3.png"
                    className="life-image-three-women"
                  />
                </div>
                <div className="col-md-6 col-12 my-3">
                  <img
                    src="/images/life/plant-4.png"
                    className="life-image-three-women"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Children's Day Celebration */}
      <section className="life-sections">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center my-4">
            <div className="col-md-6 col-12 my-3 column-with-padding-for-text">
              <h2
                className="life-heading mobile-center"
                style={{ marginBottom: "25px" }}
              >
                Children’s Day Celebration – Spreading Smiles
              </h2>
              <p>At Taciti, we’re committed to building a sustainable tomorrow.</p>
              <p>
                Through our Tree Plantation Drives, organized in collaboration
                with environment-focused NGOs, our employees actively contribute
                to reforestation and urban greening efforts.
              </p>
              <p>
                These initiatives not only reduce our carbon footprint but also
                foster a deeper connection with nature — making every sapling a
                symbol of hope and renewal.
              </p>
            </div>
            <div className="col-md-6 col-12 my-3 text-center">
              <img
                src="/images/life/foundation.png"
                className="life-image"
                alt="Children's Day celebration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Styles */}
      <style jsx>{`
        /* Hero Section */
        .intro-section {
          background: url("/images/taciti-cares.png") no-repeat;
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

        .first-section {
          padding-top: 0;
        }
        /* 🌳 Tree Plantation Section */
        .tree-section {
          background-color: #013470;
          padding-top: 7%;
          padding-bottom: 7%;
        }
        .tree-text {
          width: 80%;
          color: #ffffff !important;
        }
        .tree-text h2 {
          color: #ffffff !important;
        }
        .tree-text p {
          color: #ffffff !important;
        }

        @media (max-width: 767px) {
          .intro-box {
            margin-left: 20px;
            padding-top: 60px;
          }
          .main-title {
            font-size: 40px;
          }

          .life-sections {
            padding-left: 30px;
            padding-right: 30px;
          }
          /* Tree Plantation Section Mobile Fixes */
          .tree-text {
            width: 100% !important;
            text-align: center;
          }
          .life-image-three-women {
            width: 100%;
            height: auto;
            max-width: 300px; /* Adjust as needed to fit */
            margin-left: 25px; /* Add more margin from left */
          }
        }
      `}</style>
    </div>
  );
}
