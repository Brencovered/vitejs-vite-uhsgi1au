import { FC } from "react";
import creatorImg from "../assets/creator.png";

const HeroSection: FC = () => {
  return (
    <section className="section hero">
      <div className="hero-inner">
        {/* Left: hero content */}
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

        {/* Right: hero image */}
        <div className="hero-image">
          <div className="hero-phone">
            <img src={creatorImg} alt="Creator using Covered" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
