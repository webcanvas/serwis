import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, Settings, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const icons = {
  ClipboardList: <ClipboardList className="w-12 h-12 text-[#1a365d]" />,
  Settings: <Settings className="w-12 h-12 text-[#1a365d]" />,
  Globe: <Globe className="w-12 h-12 text-[#1a365d]" />,
};

const ProcessSteps = () => {
  const { t } = useLanguage();
  const steps = t("process.steps");

  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1a365d] mb-12">
          {t("process.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step: any, index: number) => (
            <Card key={index} className="border-none shadow-lg bg-[#f7fafc]">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-white p-4 shadow-md">
                    {
                      icons[
                        index === 0
                          ? "ClipboardList"
                          : index === 1
                            ? "Settings"
                            : "Globe"
                      ]
                    }
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#1a365d] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="mt-4 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#ff6b6b] text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
