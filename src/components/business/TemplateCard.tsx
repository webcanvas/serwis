import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye } from "lucide-react";

interface TemplateCardProps {
  title?: string;
  imageUrl?: string;
  description?: string;
  onPreview?: () => void;
}

const TemplateCard = ({
  title = "Professional Business Template",
  imageUrl = "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=350&h=250&fit=crop",
  description = "A modern and professional template perfect for showcasing your business.",
  onPreview = () => console.log("Preview clicked"),
}: TemplateCardProps) => {
  return (
    <Card className="w-[350px] h-[500px] bg-white overflow-hidden flex flex-col">
      <CardHeader className="p-0">
        <div className="relative w-full h-[250px] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="text-xl mb-4 text-navy-900">{title}</CardTitle>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={onPreview}
          className="w-full bg-[#1a365d] hover:bg-[#2a466d] text-white"
        >
          <Eye className="w-4 h-4 mr-2" />
          Preview Template
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TemplateCard;
