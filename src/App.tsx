import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import CreateBusinessCard from "./components/business/CreateBusinessCard";
import routes from "tempo-routes";
import { LanguageProvider } from "./lib/LanguageContext";
import { LanguageSwitch } from "./components/business/LanguageSwitch";

function App() {
  return (
    <LanguageProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <LanguageSwitch />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/create-business-card"
              element={<CreateBusinessCard />}
            />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </>
      </Suspense>
    </LanguageProvider>
  );
}

export default App;
