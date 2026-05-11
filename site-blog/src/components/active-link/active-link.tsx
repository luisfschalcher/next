'use client'
import Link, { LinkProps } from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

type ActiveLinkProps = {
    children: React.ReactNode
} & LinkProps

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
    const linkPath = (typeof href === 'string' ? href : href.pathname) ?? ''
    const pathname = usePathname()
    const isActive = linkPath === pathname || pathname?.startsWith(`${linkPath}/`)

    return (
        <Link {...rest} href={href} className={cn('text-action-sm transition-colors hover:text-gray-200',
            isActive ? 'text-blue-200 hover:text-blue-300' : 'text-gray-300')}>{children}</Link>
    )
}