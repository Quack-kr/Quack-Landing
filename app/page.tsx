import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FoodCategories from "@/components/food-categories"
import BowlSelection from "@/components/bowl-selection"
import SubscriptionSection from "@/components/subscription-section"
import FeaturesSection from "@/components/features-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-quack-yellow">
      <Header />
      <HeroSection />
      <FoodCategories />
      <BowlSelection />
      <SubscriptionSection />
      <FeaturesSection />
      <Footer />
    </div>
  )
}
