import type { Metadata } from "next";
import { Inter } from "next/font/google"
import Footer from "@/app/components/common/Footer";
import Header from "@/app/components/common/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevHub | Login",
  description: "Login Page for DevHub",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
