import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/globals.scss";
import NavBar from "../components/NavBar/NavBar"; // Adjust the path if necessary
import Footer from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anka Grup",
  description: "Anka Grup Araç Servisi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar /> {/* Add the NavBar component here */}
        {children}
        <Footer /> {/* Add the Footer component here */}
      </body>
    </html>
  );
}
