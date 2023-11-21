
import HomepageSection1 from "../components/HomepageSection1";
import HomepageSection2 from "../components/HomepageSection2";
import OurTeamSection from "../components/OurTeamSection";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Main() {
  return (
    <div className="overflow-x-hidden font-libre">
       <Navigation></Navigation>
     <HomepageSection1 ></HomepageSection1>
     <HomepageSection2></HomepageSection2>
     <OurTeamSection ></OurTeamSection>
     <Footer/>
    </div>
  );
}

export default Main;