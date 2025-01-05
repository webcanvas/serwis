export const translations = {
  en: {
    hero: {
      title: "Establish Your Online Presence Today",
      subtitle:
        "Join thousands of local businesses showcasing their services through our customizable business profiles and professional templates.",
      subscribe: "Subscribe",
      addBusiness: "Add Your Company",
      emailPlaceholder: "Enter your email",
    },
    process: {
      title: "How It Works",
      steps: [
        {
          title: "Create Profile",
          description:
            "Set up your business profile with key information and details",
        },
        {
          title: "Customize Template",
          description: "Choose and customize a template that fits your brand",
        },
        {
          title: "Go Live",
          description: "Publish your profile and start reaching new customers",
        },
      ],
    },
    benefits: {
      title: "Platform Benefits",
      subtitle:
        "Discover how our platform helps your business grow and succeed online",
      items: [
        {
          title: "Visibility Boost",
          description:
            "Get discovered by more customers with enhanced online presence and SEO optimization",
        },
        {
          title: "Analytics Dashboard",
          description:
            "Track your performance with detailed insights and metrics",
        },
        {
          title: "Review Management",
          description:
            "Easily manage and respond to customer reviews from one place",
        },
        {
          title: "Marketing Tools",
          description:
            "Access powerful tools to promote your business and reach new customers",
        },
      ],
    },
    templates: {
      title: "Professional Templates for Your Business",
      subtitle:
        "Choose from our collection of professionally designed templates to create your perfect business profile.",
    },
  },
  pl: {
    hero: {
      title: "Zbuduj Swoją Obecność Online Już Dziś",
      subtitle:
        "Dołącz do tysięcy lokalnych firm prezentujących swoje usługi poprzez konfigurowalne profile biznesowe i profesjonalne szablony.",
      subscribe: "Subskrybuj",
      addBusiness: "Dodaj Swoją Spółkę",
      emailPlaceholder: "Wprowadź swój email",
    },
    process: {
      title: "Jak To Działa",
      steps: [
        {
          title: "Utwórz Profil",
          description:
            "Skonfiguruj profil swojej firmy z kluczowymi informacjami i szczegółami",
        },
        {
          title: "Dostosuj Szablon",
          description:
            "Wybierz i dostosuj szablon, który pasuje do Twojej marki",
        },
        {
          title: "Opublikuj",
          description:
            "Opublikuj swój profil i zacznij docierać do nowych klientów",
        },
      ],
    },
    benefits: {
      title: "Korzyści z Platformy",
      subtitle:
        "Odkryj, jak nasza platforma pomaga Twojej firmie rozwijać się i odnosić sukcesy online",
      items: [
        {
          title: "Zwiększona Widoczność",
          description:
            "Zostań odkryty przez więcej klientów dzięki ulepszonej obecności online i optymalizacji SEO",
        },
        {
          title: "Panel Analityczny",
          description:
            "Śledź swoje wyniki dzięki szczegółowym wskaźnikom i metrykom",
        },
        {
          title: "Zarządzanie Opiniami",
          description:
            "Łatwo zarządzaj i odpowiadaj na opinie klientów z jednego miejsca",
        },
        {
          title: "Narzędzia Marketingowe",
          description:
            "Uzyskaj dostęp do potężnych narzędzi promocji swojej firmy i docierania do nowych klientów",
        },
      ],
    },
    templates: {
      title: "Profesjonalne Szablony dla Twojej Firmy",
      subtitle:
        "Wybierz spośród naszej kolekcji profesjonalnie zaprojektowanych szablonów, aby stworzyć idealny profil firmy.",
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
