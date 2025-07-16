import { priFont, secFont } from "@/global/fonts";
import "./globals.css";

// Components
import Header from "@/components/main/header";
import Footer from "@/components/main/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${priFont.variable} ${secFont.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
