"use client";

import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ContactFooter from "@/components/contact/ContactFooter";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      <ContactHero />
      
      {/* Container for Info and Form grid */}
      <section className="relative z-20 -mt-12 sm:-mt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactMap />
      <ContactFooter />
    </main>
  );
}