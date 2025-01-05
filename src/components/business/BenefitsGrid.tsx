import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Globe2, MessageSquare, Megaphone } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitItem = ({ icon, title, description }: BenefitItemProps) => (
  <Card className="h-full bg-white">
    <CardContent className="p-6 flex flex-col items-center text-center">
      <div className="rounded-full bg-[#f7fafc] p-4 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-[#1a365d]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const iconComponents = {
  Globe2: <Globe2 className="w-8 h-8 text-[#1a365d]" />,
  BarChart3: <BarChart3 className="w-8 h-8 text-[#1a365d]" />,
  MessageSquare: <MessageSquare className="w-8 h-8 text-[#1a365d]" />,
  Megaphone: <Megaphone className="w-8 h-8 text-[#1a365d]" />,
};

const iconOrder = ["Globe2", "BarChart3", "MessageSquare", "Megaphone"];

const BenefitsGrid = () => {
  const { t } = useLanguage();
  const benefits = t("benefits.items");

  return (
    <div className="w-full bg-[#f7fafc] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">
            {t("benefits.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("benefits.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit: any, index: number) => (
            <BenefitItem
              key={index}
              icon={iconComponents[iconOrder[index]]}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsGrid;
