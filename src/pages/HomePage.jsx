import { useNavigate } from "react-router-dom";
import WavesBackground from "../components/homepage_components/WavesBackground";
import HeroSection from "../components/homepage_components/HeroSection";
import HomePageButton from "../components/homepage_components/HomePageButton";

const HomePage = () => {
  const navigate = useNavigate();
  const goDrink = () => navigate("/hydration-tracker");

  return (
    <div className="bg-[#F8FBFB] relative w-[300px] h-[500px] overflow-x-hidden overflow-y-hidden font-manrope">
      <WavesBackground />

      <div className="relative z-10 flex flex-col items-center pt-8">
        <HeroSection />
        <HomePageButton goDrink={goDrink} />
      </div>
    </div>
  );
};

export default HomePage;
