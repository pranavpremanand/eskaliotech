import React from "react";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import Portfolio from "../../components/Portfolio";

const PortfolioPage = () => {
  return (
    <div className="landing-bg">
      <Header />
      <div className="pt-[5rem]">
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
