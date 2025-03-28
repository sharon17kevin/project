import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import Faq from "./pages/FAQ";
import ContactsPage from "./pages/ContactPage";
import { PrivacyPolicy } from "./pages/PrivacyPage";
import { TermsOfUse } from "./pages/TermsOfUsePage";
import { Legal } from "./pages/LegalPage";
import { LegalLayout } from "./components/LegalLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/faq", element: <Faq /> },
      {
        path: "/legallayout",
        element: <LegalLayout />,
        children: [
          { path: "/legallayout/privacy", element: <PrivacyPolicy /> },
          { path: "/legallayout/termsofuse", element: <TermsOfUse /> },
          { path: "/legallayout/legal", element: <Legal /> },
        ],
      },
      { path: "/contact", element: <ContactsPage /> },
    ],
  },
]);

export default router;
