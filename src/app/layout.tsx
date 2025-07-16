import { priFont, secFont } from "@/global/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${priFont.variable} ${secFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
