"use client";

import React from "react";
import "./taciti-cares.css";

export default function TacitiCares() {
  return (
    <div className="taciti-cares-page">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
      />

      {/* HERO */}
      <section className="intro-section">
        <div className="intro-box">
          <h1 className="main-title">Taciti Cares</h1>
        </div>
      </section>

      {/* Charity T10 Tournament */}
      <section className="life-sections first-section" id="charity">

        <div className="container">

          <div className="row d-flex justify-content-center align-items-center my-4">

            <div className="col-md-6 col-12 my-3">

              <h2 className="life-heading mobile-center">
                Charity T10 Tournament – Playing for a Purpose
              </h2>

              <p className="section-text">
                Our annual T10 cricket tournament raises funds to support
                senior living homes.
              </p>

              <p className="section-text">
                Through this spirited event, Taciti employees play not
                just for victory, but to contribute towards the care,
                comfort, and well-being of the elderly — combining
                teamwork with purpose.
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

      {/* TREE PLANTATION */}
      <section className="life-sections tree-section">

        <div className="container">

          <div className="row d-flex justify-content-center align-items-center">

            <div className="col-md-6 col-12">

              <div className="tree-text">

                <h2 className="life-heading">
                  Tree Plantation Drive – Growing a Greener Tomorrow
                </h2>

                <p>
                  At Taciti, we’re committed to building a sustainable
                  tomorrow.
                </p>

                <p>
                  Through our Tree Plantation Drives, organized in
                  collaboration with environment-focused NGOs, our
                  employees actively contribute to reforestation and
                  urban greening efforts.
                </p>

                <p>
                  These initiatives not only reduce our carbon footprint
                  but also foster a deeper connection with nature —
                  making every sapling a symbol of hope and renewal.
                </p>

              </div>

            </div>

            <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">

              <div className="row d-flex justify-content-center align-items-center">

                <div className="col-md-6 col-12 my-3">

                  <img
                    src="/images/life/plant-1.png"
                    className="life-image-three-women"
                    alt="Tree Plantation 1"
                  />

                </div>

                <div className="col-md-6 col-12 my-3">

                  <img
                    src="/images/life/plant-2.png"
                    className="life-image-three-women"
                    alt="Tree Plantation 2"
                  />

                </div>

                <div className="col-md-6 col-12 my-3">

                  <img
                    src="/images/life/plant-3.png"
                    className="life-image-three-women"
                    alt="Tree Plantation 3"
                  />

                </div>

                <div className="col-md-6 col-12 my-3">

                  <img
                    src="/images/life/plant-4.png"
                    className="life-image-three-women"
                    alt="Tree Plantation 4"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CHILDREN'S DAY */}
      <section className="life-sections">

        <div className="container">

          <div className="row d-flex justify-content-center align-items-center my-4">

            <div className="col-md-6 col-12 my-3 column-with-padding-for-text">

              <h2 className="life-heading mobile-center children-title">
                Children’s Day Celebration – Spreading Smiles
              </h2>

              <p className="section-text">
                At Taciti, we’re committed to building a sustainable
                tomorrow.
              </p>

              <p className="section-text">
                Through our Tree Plantation Drives, organized in
                collaboration with environment-focused NGOs, our employees
                actively contribute to reforestation and urban greening
                efforts.
              </p>

              <p className="section-text">
                These initiatives not only reduce our carbon footprint
                but also foster a deeper connection with nature —
                making every sapling a symbol of hope and renewal.
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

    </div>
  );
}