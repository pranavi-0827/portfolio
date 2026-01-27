import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Pranavi Nerella | Portfolio",
  description: "Data Analyst Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Fixed Navbar */}
        <Navbar />

        {/* 🔑 RESERVE SPACE FOR NAVBAR */}
        <main className="pt-[72px]">
          {children}
        </main>
      </body>
    </html>
  );
}
