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
import Cart from "./pages/CartPage";
import Careers from "./pages/Careers";
import ServiceMorePage from "./components/services/ServiceMorePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      {
        path: "/services",
        element: <ServicesPage />,
        children: [
          { path: "/services/more", element: <ServiceMorePage /> },
        ],
      },
      { path: "/products", element: <ProductsPage /> },
      { path: "/faq", element: <Faq /> },
      { path: "/contact", element: <ContactsPage /> },
      { path: "/cart", element: <Cart /> },
      { path: "/careers", element: <Careers /> },
      {
        path: "/legallayout",
        element: <LegalLayout />,
        children: [
          { path: "/legallayout/privacy", element: <PrivacyPolicy /> },
          { path: "/legallayout/termsofuse", element: <TermsOfUse /> },
          { path: "/legallayout/legal", element: <Legal /> },
        ],
      },
    ],
  },
]);

export default router;
