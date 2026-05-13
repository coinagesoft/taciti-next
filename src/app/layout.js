
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import { Suspense } from "react";

export const metadata = {
  title: "Taciti Consulting",
  description: "Taciti - A trusted transformation partner for Business and IT organizations",
};

export default function RootLayout({ children }) {
  return (
   <html lang="en" data-scroll-behavior="smooth">
      <body>
        {/* Page transition loader — wraps useSearchParams safe */}
        <Suspense fallback={null}>
          <PageLoader />
        </Suspense>
        <Header />
        <main id="main-layout">{children}</main>
        <Footer />
      </body>
    </html>
  );
}