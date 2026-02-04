"use client";

import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Philosophy } from "@/components/landing/Philosophy";
import { Exclusivity } from "@/components/landing/Exclusivity";
import { LivingSpaces } from "@/components/landing/LivingSpaces";
import { FloorPlans } from "@/components/landing/FloorPlans";
import { Amenities } from "@/components/landing/Amenities";
import { Location } from "@/components/landing/Location";
import { Investment } from "@/components/landing/Investment";
import { ContactSection } from "@/components/landing/ContactSection";
import { CTA } from "@/components/landing/CTA";
import { LeadForm } from "@/components/landing/LeadForm";
import { BlueWave } from "@/components/landing/BlueWave";
import { BackgroundAnimation } from "@/components/landing/BackgroundAnimation";
import { SectionDivider } from "@/components/landing/SectionDivider";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(true); // Changed to true to open on load

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground relative">
      <BackgroundAnimation />
      <Navbar onOpenForm={() => setIsFormOpen(true)} />
      
      <div id="home">
        <Hero onOpenForm={() => setIsFormOpen(true)} />
      </div>

      <SectionDivider />

      <div id="philosophy">
        <Philosophy />
      </div>

      <SectionDivider />

      <div id="exclusivity">
        <Exclusivity />
      </div>

      <SectionDivider />

      <div id="spaces">
        <LivingSpaces />
      </div>

      <SectionDivider />

      <div id="floor-plans">
        <FloorPlans />
      </div>

      <SectionDivider />

      <div id="amenities">
        <Amenities />
      </div>

      <SectionDivider />

      <div id="location">
        <Location />
      </div>

      <SectionDivider />

      <div id="investment">
        <Investment />
      </div>

      <SectionDivider />

      <div id="cta">
        <CTA onOpenForm={() => setIsFormOpen(true)} />
      </div>

      <BlueWave />

      <div id="contact">
        <ContactSection />
      </div>

      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <WhatsAppButton />
    </main>
  );
}
