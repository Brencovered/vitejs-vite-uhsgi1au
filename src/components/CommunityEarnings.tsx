import React from "react";

const CommunityEarnings: React.FC = () => {
  return (
    <section className="section">
      <div className="section-inner two-column">
        <div>
          <h2 className="section-title">What does joining the community mean?</h2>
          <p className="section-kicker">
            Unlock additional revenue opportunities today
          </p>

          <h3 className="section-subtitle">
            Steady income from shared revenue
          </h3>
          <p className="body-text">
            Take full ownership of how much you earn by doing what you already
            do — creating. Covered shows you how your audience shops from your
            content. You earn <strong>$1 per month</strong> from every
            subscription you bring to Covered.
          </p>

          <h3 className="section-subtitle">Own your brand partnerships</h3>
          <p className="body-text">
            Use Covered as a sales and insight tool to get your content in front
            of brands that align with your community. You keep{" "}
            <strong>100% of the campaign fees</strong> and full creative
            control, unless you want us to support. No more agent fees.
          </p>
        </div>

        <div className="card earnings-card">
          <h4 className="card-title">Example monthly earnings</h4>
          <ul className="list">
            <li>
              <strong>2,500 subscribers</strong> × $1 ={" "}
              <strong>$2,500</strong>
            </li>
            <li>
              <strong>3 brand campaigns</strong> × $500 ={" "}
              <strong>$1,500</strong>
            </li>
          </ul>
          <p className="highlight-text">
            Total monthly earnings:
            <br />
            <span>$4,000</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityEarnings;
