import React from "react";
import HeroSection from "./components/HeroSection";
import SubscriptionEarnings from "./components/SubscriptionEarnings";
import BrandPartnerships from "./components/BrandPartnerships";
import RecipeFlow from "./components/RecipeFlow";
import CommunityEarnings from "./components/CommunityEarnings";
import ContactSection from "./components/ContactSection";

const App: React.FC = () => {
  return (
    <div className="page">
      <header className="top-bar">
  <div className="top-bar-inner">
    <div className="brand-group">
      <div className="brand-logo-circle" />
      <span className="brand-name">Covered</span>
    </div>

    <nav className="main-nav">
      <a href="#">Compare</a>
      <a href="#">Tools</a>
      <a href="#">Pricing</a>
    </nav>

    <div className="header-actions">
      <button className="nav-cta">Start Saving</button>
    </div>
  </div>
</header>


      <main>
        <HeroSection />
        <SubscriptionEarnings />
        <BrandPartnerships />
        <RecipeFlow />
        <CommunityEarnings />
        <ContactSection />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Covered · enjoycovered.com
      </footer>
    </div>
  );
};

export default App;
