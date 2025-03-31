import { createBrowserRouter } from "react-router-dom";
import { LegalLayout } from "./components/LegalLayout";
import ServiceMorePage from "./components/services/ServiceMorePage";
import AboutPage from "./pages/AboutPage";
import Careers from "./pages/Careers";
import Cart from "./pages/CartPage";
import ContactsPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import Faq from "./pages/FAQ";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import { Legal } from "./pages/LegalPage";
import { PrivacyPolicy } from "./pages/PrivacyPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import { TermsOfUse } from "./pages/TermsOfUsePage";

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
        // children: [
        //   { path: "/services/more", element: <ServiceMorePage /> },
        // ],
      },
      { path: "/services/more", element: <ServiceMorePage /> },
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
