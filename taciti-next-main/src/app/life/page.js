"use client";

import Link from "next/link";
import React from "react";

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
      <div className="container" style={styles.page}>
        <div style={styles.headerRow}>
          <h2 style={styles.heading}>Life @ taciti</h2>
        </div>

        <div className="mainRow" style={styles.mainRow}>
          <div className="leftSection" style={styles.leftSection}>
            <img
              src="/images/TACITI LIFE.webp"
              alt="Life at Taciti"
              className="image"
              style={styles.image}
            />
          </div>

          <div className="rightSection" style={styles.rightSection}>
            <section style={styles.topSection} className="topSection">
              <div className="topContainer">
                {lifeCards.map((card) => (
                  <div key={card.href} className="topCardWrap">
                    <div className="topCard">
                      <h5 style={styles.topCardTitle}>{card.title}</h5>
                      <p style={styles.topCardText}>{card.text}</p>
                      <Link href={card.href} style={styles.topCardLink}>
                        Discover more <span style={styles.linkArrow}>&rarr;</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <style jsx>{`
        .topContainer {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        }

        .topCardWrap {
          display: flex;
        }

        .topCard {
          background: #fff;
          border: 1px solid #eaeaea;
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .topCard:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
        }

        .topCard p {
          margin-bottom: auto;
        }

        @media (max-width: 768px) {
          .topContainer {
            gap: 16px;
          }

          .topCard {
            padding: 16px;
          }
        }
      `}</style>

      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            padding: 20px !important;
          }

          .container h2 {
            font-size: 24px !important;
          }

          .mainRow {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
          }

          .leftSection {
            flex-direction: row !important;
            justify-content: center;
            align-items: center;
            gap: 10px !important;
            width: 100%;
          }

          .image {
            width: 100% !important;
            height: auto !important;
            object-fit: cover;
          }

          .rightSection {
            width: 100%;
            padding-bottom: 20px !important;
          }

          .topSection {
            margin-bottom: 20px !important;
          }

          .topContainer {
            gap: 16px !important;
          }

          .topCard {
            padding: 16px !important;
          }
        }
      `}</style>
    </>
  );
}

const styles = {
  page: {
    fontFamily: "'Poppins', sans-serif",
    padding: "40px",
  },
  headerRow: {
    marginBottom: "20px",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#333",
  },
  topSection: {
    marginBottom: "40px",
  },
  topCardTitle: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "8px",
  },
  topCardText: {
    fontSize: "13px",
    color: "#666",
    lineHeight: "1.5",
  },
  topCardLink: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#0070f3",
    textDecoration: "none",
    marginTop: "12px",
  },
  linkArrow: {
    marginLeft: "5px",
  },
  image: {
    maxWidth: "800px",
    height: "auto",
  },
  mainRow: {
    display: "flex",
    gap: "0px",
    alignItems: "flex-start",
  },
  leftSection: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    gap: "0px",
  },
  rightSection: {
    flex: 2,
  },
};
