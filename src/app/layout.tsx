import React from "react";
import { Metadata } from "next";
import { Children } from "@lib/type";

// Todo: change MetaData
export const metadata: Metadata = {
  title: "Halo",
  description: "",
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
