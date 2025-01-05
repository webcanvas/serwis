import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Plus } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface HeroSectionProps {
  onAddBusiness?: () => void;
  onSubscribe?: (email: string) => void;
}

const HeroSection = ({
  onAddBusiness = () => console.log("Add business clicked"),
  onSubscribe = (email: string) => console.log("Subscribe clicked", email),
}: HeroSectionProps) => {
  const [email, setEmail] = React.useState("");
  const { t } = useLanguage();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    onSubscribe(email);
    setEmail("");
  };

  return (
    <div className="relative w-full h-[600px] bg-[#f7fafc] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#1a365d 2px, transparent 2px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a365d] mb-6 max-w-4xl">
          {t("hero.title")}
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
          {t("hero.subtitle")}
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex gap-2 w-full max-w-md mb-8"
        >
          <Input
            type="email"
            placeholder="Enter your company name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button
            type="submit"
            className="bg-[#ff6b6b] hover:bg-[#ff5b5b] text-white"
          >
            <Plus className="w-4 h-4 mr-2 flex" />
            Add Your Company
          </Button>
        </form>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button
            onClick={onAddBusiness}
            size="lg"
            className="bg-[#ff6b6b] hover:bg-[#ff5b5b] text-white px-8 py-6 text-lg"
          >
            Add Your Company
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
