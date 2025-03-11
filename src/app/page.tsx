import ContactForm from "@/components/home/contact-section";
import { FeaturesSection } from "@/components/home/feature-section";
import { HeroSection } from "@/components/home/hero-section";
import HowItWorks from "@/components/home/how-it-works";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <ContactForm />
    </div>
  );
};

export default page;
