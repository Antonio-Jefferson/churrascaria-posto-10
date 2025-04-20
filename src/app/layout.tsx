import { ReactNode } from "react";
import "./globals.css";

// Use Next.js's built-in type
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini Delivery",
  description: "Your app description",
};

// Use the inferred props type from Next.js
export default function RootLayout({
  children,
  types,
}: {
  children: ReactNode;
  types: any;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
