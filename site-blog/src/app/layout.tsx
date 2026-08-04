import { Layout } from "@/components/layout"
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Site.Set',
  description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  robots: 'index, follow',
    openGraph: {
        title: 'Blog',
        description: 'Descrição aindaaaaaaaaaaa maior só pra testar',
        url: 'https://site-blog-vert.vercel.app/',
        siteName: 'Site.Set',
        locale: 'pt_BR',
        type: 'website',
        images: [
            {
                url: 'https://site-blog-vert.vercel.app/og-image.webp',
                width: 800,
                height: 600,
                alt: 'Blog'
            }
        ]
    }
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
