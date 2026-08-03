import { LandingPage } from "@/templates/landing-page";
import type {Metadata} from "next"

export const metadata: Metadata = {
    title: 'Site.Set',
    description: 'Venda seus produtos...',
    robots: 'index, follow',
    openGraph: {
        title: 'Site.Set',
        description: 'venda seus produtos...',
        url: 'https://site-blog-vert.vercel.app/',
        siteName: 'Site.Set',
        locale: 'pt_BR',
        type: 'website',
        images: [
            {
                url: 'https://site-blog-vert.vercel.app/og-image.webp',
                width: 800,
                height: 600,
                alt: 'Site.Set'
            }
        ]
    }
}

export default function HomePage() {
    return (
        <LandingPage />
    )
}