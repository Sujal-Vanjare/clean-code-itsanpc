import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Its An PC",
  description:
    "Explore the latest in PC technology, gaming, and hardware at It's An PC. Discover expert guides, reviews, and insightful content to elevate your computing experience. Stay ahead in the world of PCs with our up-to-date insights and recommendations. Unleash the power of your machine with It's An PC!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container `}>
        <ThemeProvider>
          <Navbar />
          <div className="footer-container">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
