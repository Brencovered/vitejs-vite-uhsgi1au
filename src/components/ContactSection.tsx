import * as React from "react";
import { FC } from "react";
const ContactSection: React.FC = () => {
  return (
    <section className="section section-gradient contact">
      <div className="section-inner contact-inner">
        <div className="contact-left">
          <p className="eyebrow badge">Creator Economy</p>
          <h2 className="section-title">
            From their creation
            <br />
            to your table.
          </h2>
          <p className="body-text">
            Follow your favourite food creators and chefs. See a recipe you love?
            With one click, Covered pushes the exact ingredients straight to
            your online cart.
          </p>
          <ul className="list">
            <li>Discover exclusive recipes from top Aussie creators.</li>
            <li>Support creators directly while you shop.</li>
            <li>One-tap integration with Woolworths &amp; Coles.</li>
          </ul>
        </div>

        <div className="contact-right">
          <h3 className="section-subtitle">Contact us</h3>
          <p className="section-kicker">Start your journey today</p>

          <div className="contact-block">
            <h4>Apply</h4>
            <a
              href="https://www.enjoycovered.com/creator"
              target="_blank"
              rel="noreferrer"
            >
              www.enjoycovered.com/creator
            </a>
          </div>

          <div className="contact-block">
            <h4>Email</h4>
            <p>
              <a href="mailto:bren@enjoycovered.com">
                bren@enjoycovered.com
              </a>{" "}
              – Partnerships
            </p>
            <p>
              <a href="mailto:beets@enjoycovered.com">
                beets@enjoycovered.com
              </a>{" "}
              – Creative
            </p>
          </div>

          <div className="contact-block">
            <h4>Website</h4>
            <a
              href="https://www.enjoycovered.com"
              target="_blank"
              rel="noreferrer"
            >
              www.enjoycovered.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
