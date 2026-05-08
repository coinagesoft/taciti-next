"use client";

import Link from "next/link";
import React from "react";
import "./life.css";

const lifeCards = [
  {
    title: "Next Horizon",
    text: "Shaping the future with vision, innovation, and bold strategies that drive meaningful growth.",
    href: "/life/next-horizon",
  },
  {
    title: "Culture Connect",
    text: "Bringing people together through moments of joy, connection, and shared celebration.",
    href: "/life/culture-connect",
  },
  {
    title: "Taciti Cares",
    text: "Driving positive change through compassion, community engagement, and responsible action.",
    href: "/life/taciti-cares",
  },
  {
    title: "Taciti Pulse",
    text: "Real stories from our people that reflect the heart and soul of life at Taciti.",
    href: "/life/taciti-pulse",
  },
  {
    title: "Learning Ladder",
    text: "Empowering growth through continuous learning, skill-building, and development opportunities.",
    href: "/life/taciti-empower",
  },
];

export default function Life() {
  return (
    <>
      <div className="life-container">

        <div className="life-headerRow">
          <h2 className="life-heading">
            Life @ taciti
          </h2>
        </div>

        <div className="life-mainRow">

          <div className="life-leftSection">

            <img
              src="/images/TACITI LIFE.webp"
              alt="Life at Taciti"
              className="life-image"
            />

          </div>

          <div className="life-rightSection">

            <section className="life-topSection">

              <div className="life-topContainer">

                {lifeCards.map((card) => (

                  <div
                    key={card.href}
                    className="life-topCardWrap"
                  >

                    <div className="life-topCard">

                      <h5 className="life-topCardTitle">
                        {card.title}
                      </h5>

                      <p className="life-topCardText">
                        {card.text}
                      </p>

                      <Link
                        href={card.href}
                        className="life-topCardLink"
                      >
                        Discover more

                        <span className="life-linkArrow">
                          &rarr;
                        </span>

                      </Link>

                    </div>

                  </div>

                ))}

              </div>

            </section>

          </div>

        </div>

      </div>
    </>
  );
}