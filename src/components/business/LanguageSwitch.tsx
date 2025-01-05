import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        onClick={() => setLanguage(language === "en" ? "pl" : "en")}
        className="bg-white"
      >
        {language === "en" ? "PL" : "EN"}
      </Button>
    </div>
  );
};
