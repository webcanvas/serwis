import React from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "./business/HeroSection";
import ProcessSteps from "./business/ProcessSteps";
import BenefitsGrid from "./business/BenefitsGrid";
import TemplateShowcase from "./business/TemplateShowcase";
import Footer from "./business/Footer";

interface HomeProps {
  onAddBusiness?: () => void;
  onTemplatePreview?: (templateId: string) => void;
}

const Home = ({
  onAddBusiness,
  onTemplatePreview = (templateId: string) =>
    console.log(`Preview template: ${templateId}`),
}: HomeProps) => {
  const navigate = useNavigate();

  const handleAddBusiness = () => {
    navigate("/create-business-card");
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection onAddBusiness={handleAddBusiness} />

        <ProcessSteps />

        <BenefitsGrid />

        <TemplateShowcase onPreview={onTemplatePreview} />
      </main>
      <Footer />
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Header 1
      </h1>
      <div className="w-[1365px] h-[41px]"></div>
    </div>
  );
};

export default Home;
