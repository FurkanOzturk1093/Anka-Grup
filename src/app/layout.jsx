import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/globals.scss";
import NavBar from "../components/NavBar/NavBar"; // Adjust the path if necessary
import Footer from "@/components/Footer/Footer";
import { ProviderWrapper } from "@/store/store";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anka Grup",
  description: "Anka Grup Araç Servisi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderWrapper>
          <NavBar /> {/* Add the NavBar component here */}
          {/* Add the ProviderWrapper component here */}
          {children}
          <Footer /> {/* Add the Footer component here */}
        </ProviderWrapper>
      </body>
    </html>
  );
}
