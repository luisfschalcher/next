import { BlogList } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Descrição um pouco maior só pra testar',
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

export default function BlogListPage() {
    const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return (
        <BlogList posts={sortedPosts} />
    )
}