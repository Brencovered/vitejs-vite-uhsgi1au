import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="section hero">
      <div className="hero-inner">
        <div className="hero-image">
          <div className="hero-phone" />
        </div>

        <div className="hero-content">
          <p className="eyebrow">Join the Creator Movement</p>
          <h1 className="hero-title">
            Unlock Your Potential:
            <br />
            Join the Covered
            <br />
            Creator Community
          </h1>
          <p className="hero-subtitle">
            Turn your recipes, stories and community into predictable income and
            brand opportunities — all while doing what you already do:
            creating.
          </p>
          <a
            href="https://www.enjoycovered.com/creator"
            className="primary-button"
            target="_blank"
            rel="noreferrer"
          >
            Apply to Join
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
