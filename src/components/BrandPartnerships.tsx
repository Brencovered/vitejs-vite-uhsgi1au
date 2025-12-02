import * as React from "react";

const BrandPartnerships: FC.FC = () => {
  return (
    <section className="section">
      <div className="section-inner two-column">
        <div>
          <h2 className="section-title">Brand Partnerships</h2>
          <p className="section-kicker">Collaborate with the right brands</p>

          <h3 className="section-subtitle">Connect with brands</h3>
          <p className="body-text">
            Join Covered to connect with brands that align with your values,
            while keeping full control over how you work. You maintain{" "}
            <strong>100% of your partnership fees</strong>, and we provide the
            platform and insights that make those campaigns more valuable.
          </p>
          <p className="body-text">
            Every time you introduce a brand that signs a marketing agreement
            with Covered, you&apos;ll also earn a{" "}
            <strong>5% commission on the contract value</strong>.
          </p>
        </div>

        <div className="brand-stats">
          <div className="brand-badge">
            <span className="brand-number">100%</span>
            <span className="brand-label">Creator earnings retention</span>
          </div>
          <div className="brand-badge">
            <span className="brand-number">5%</span>
            <span className="brand-label">B2B contract commission</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPartnerships;
