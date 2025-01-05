import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TemplateCard from "./TemplateCard";
import { useLanguage } from "@/lib/LanguageContext";

interface Template {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

interface TemplateShowcaseProps {
  templates?: Template[];
  onPreview?: (templateId: string) => void;
}

const defaultTemplates: Template[] = [
  {
    id: "1",
    title: "Modern Restaurant Template",
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=350&h=250&fit=crop",
    description: "Perfect for restaurants and cafes with a contemporary vibe.",
  },
  {
    id: "2",
    title: "Retail Store Template",
    imageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=350&h=250&fit=crop",
    description: "Showcase your products with this elegant retail template.",
  },
  {
    id: "3",
    title: "Professional Services",
    imageUrl:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=350&h=250&fit=crop",
    description: "Ideal for consulting firms and professional services.",
  },
  {
    id: "4",
    title: "Wellness & Spa",
    imageUrl:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=350&h=250&fit=crop",
    description: "Create a calming presence for wellness businesses.",
  },
];

const TemplateShowcase = ({
  templates = defaultTemplates,
  onPreview = (templateId: string) =>
    console.log(`Preview template: ${templateId}`),
}: TemplateShowcaseProps) => {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-[700px] bg-[#f7fafc] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">
            {t("templates.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("templates.subtitle")}
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {templates.map((template) => (
              <CarouselItem
                key={template.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <TemplateCard
                  title={template.title}
                  imageUrl={template.imageUrl}
                  description={template.description}
                  onPreview={() => onPreview(template.id)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12 bg-white" />
          <CarouselNext className="-right-12 bg-white" />
        </Carousel>
      </div>
    </div>
  );
};

export default TemplateShowcase;
