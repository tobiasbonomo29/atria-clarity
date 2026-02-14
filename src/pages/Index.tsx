import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductosSection from "@/components/ProductosSection";
import PorQueSection from "@/components/PorQueSection";
import CompaniasSection from "@/components/CompaniasSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import ContactoSection from "@/components/ContactoSection";
import FooterSection from "@/components/FooterSection";
import MobileCotizar from "@/components/MobileCotizar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductosSection />
      <PorQueSection />
      <CompaniasSection />
      <BlogSection />
      <FAQSection />
      <ContactoSection />
      <FooterSection />
      <MobileCotizar />
    </div>
  );
};

export default Index;
