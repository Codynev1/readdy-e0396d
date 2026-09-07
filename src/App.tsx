import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import SeoManager from "@/seo/SeoManager";
import SeoJsonLd from "@/seo/SeoJsonLd";


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <SeoManager />
        <SeoJsonLd />
        <AppRoutes />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
