import React from "react";
import { Metadata } from "next";
import { Children } from "@lib/type";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/scss/main.scss";

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
