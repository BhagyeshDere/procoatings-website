"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ContactFooter from "@/components/contact/ContactFooter";

// We separate the content to use useSearchParams within a Suspense boundary
function ContactContent() {
  const searchParams = useSearchParams();
  const selectedService = searchParams.get("service") || "";

  return (
    <>
      <ContactHero />
      
      {/* Container for Info and Form grid - UI UNTOUCHED */}
      <section className="relative z-20 -mt-12 sm:-mt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
            <ContactInfo />
            {/* The prefilled service is passed here to the form */}
            <ContactForm prefilledService={selectedService} />
          </div>
        </div>
      </section>

      <ContactMap />
      <ContactFooter />
    </>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">Loading...</div>}>
        <ContactContent />
      </Suspense>
    </main>
  );
}