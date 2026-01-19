import type { Metadata } from "next"
import "./globals.css"
import Header from "@/modules/layouts/Header"
import Footer from "@/modules/layouts/Footer"
import { beVietnam } from "@/modules/fonts"
import { SearchProvider } from "@/modules/SearchContext"

export const metadata: Metadata = {
  title: "Gia Lai Food",
  description: "Tạp hóa đặc sản Gia Lai",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={beVietnam.className}>
        <SearchProvider>
          <Header />
            {children}
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
