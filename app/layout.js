import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppFloat />

      </body>
    </html>
  );
}