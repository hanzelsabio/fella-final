import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/Home/Home";
import Products from "../components/layout/Services/Product";
import About from "../components/layout/About/About";
import OurWorks from "../components/layout/OurWorks/OurWorks";
import ContactPage from "../pages/Contact/ContactPage";
import ProductDetails from "../components/layout/Services/ProductDetails";
import ContactForm from "../pages/Contact/ContactForm";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Products />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/our-works" element={<OurWorks />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/contact-form" element={<ContactForm />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
