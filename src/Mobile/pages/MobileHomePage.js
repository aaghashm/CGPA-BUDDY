import HeaderMob from "../components/HeaderMob";
import EasyCGPASection from "../components/EasyCGPASection";
import FooterFrame from "../components/FooterFrame";
import "./MobileHomePage.css";
import Analyticshmob from "../components/Analyticshmob";

const MobileHomePage = () => {
  return (
    <div className="mobile-home-page1">
      <main className="mobile-logo-frame">
        <HeaderMob image="/HomePage img.png"
        word1="EASY" 
        word2=" CGPA" 
        word3="CALCULATOR" />

        <EasyCGPASection />
        <Analyticshmob/>
      </main>
      <FooterFrame />
    </div>
  );
};

export default MobileHomePage;
