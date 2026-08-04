import { Layout } from "@/components/layout"
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Site.Set',
  description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
