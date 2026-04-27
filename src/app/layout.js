import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Taciti Consulting",
  description: "Taciti - A trusted transformation partner for Business and IT organizations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main-layout">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
