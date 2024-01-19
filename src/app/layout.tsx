import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: "Image Gallery",
  description: "Search for the image of your dream",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
