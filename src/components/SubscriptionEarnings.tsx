import React, { useState } from "react";

const CommunityEarnings: React.FC = () => {
  const [subscribers, setSubscribers] = useState<number>(2500);
  const [subscriberRate, setSubscriberRate] = useState<number>(1); // $1 per sub
  const [brandCampaigns, setBrandCampaigns] = useState<number>(3);
  const [campaignFee, setCampaignFee] = useState<number>(500); // $ per campaign

  const subscriberIncome = subscribers * subscriberRate;
  const campaignIncome = brandCampaigns * campaignFee;
  const total = subscriberIncome + campaignIncome;

  const parseNumber = (value: string) => {
    const n = Number(value.replace(/[^0-9.]/g, ""));
    return Number.isNaN(n) ? 0 : n;
  };

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

        <div className="card earnings-card earnings-calculator">
          <h4 className="card-title">Estimate your monthly earnings</h4>

          <div className="calculator-grid">
            <div className="calculator-input-row">
              <label className="calculator-label">
                Subscribers you can convert
              </label>
              <input
                type="number"
                className="calculator-input"
                value={subscribers}
                min={0}
                onChange={(e) => setSubscribers(parseNumber(e.target.value))}
              />
            </div>

            <div className="calculator-input-row">
              <label className="calculator-label">
                Earnings per subscriber (monthly)
              </label>
              <div className="calculator-input-prefix">
                <span>$</span>
                <input
                  type="number"
                  className="calculator-input"
                  value={subscriberRate}
                  min={1}
                  max={1}
                  step={0.1}
                  onChange={() =>
                    setSubscriberRate(parseNumber(e.target.value))
                  }
                />
              </div>
            </div>

            <div className="calculator-input-row">
              <label className="calculator-label">
                Brand campaigns per month
              </label>
              <input
                type="number"
                className="calculator-input"
                value={brandCampaigns}
                min={0}
                onChange={(e) => setBrandCampaigns(parseNumber(e.target.value))}
              />
            </div>

            <div className="calculator-input-row">
              <label className="calculator-label">
                Fee per campaign you keep
              </label>
              <div className="calculator-input-prefix">
                <span>$</span>
                <input
                  type="number"
                  className="calculator-input"
                  value={campaignFee}
                  min={0}
                  step={50}
                  onChange={(e) => setCampaignFee(parseNumber(e.target.value))}
                />
              </div>
            </div>
          </div>

          <div className="calculator-summary">
            <div className="calculator-summary-line">
              <span>
                {subscribers.toLocaleString()} subscribers × $
                {subscriberRate.toFixed(2)}
              </span>
              <span>${subscriberIncome.toLocaleString()}</span>
            </div>
            <div className="calculator-summary-line">
              <span>
                {brandCampaigns.toLocaleString()} brand campaigns × $
                {campaignFee.toLocaleString()}
              </span>
              <span>${campaignIncome.toLocaleString()}</span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityEarnings;
