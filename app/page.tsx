import Header from "./components/header";
import HeroSection from "./components/hero-section";
import FoodCategories from "./components/food-categories";
import CharacteristicSelection from "./components/characteristic-section";
import VoteSelection from "./components/vote-selection";
import ReviewSelection from "./components/review-selection";
import LetsSubscribe from "./components/lets-subscribe";
import SubscriptionSection from "./components/subscription-section";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-quack-yellow max-w-[100vw] overflow-hidden xl:pt-[160px]">
      <Header />
      <HeroSection />
      <FoodCategories />
      <CharacteristicSelection />
      <VoteSelection />
      <ReviewSelection />
      <LetsSubscribe />
      <SubscriptionSection />
      <Footer />
    </main>
  );
}
