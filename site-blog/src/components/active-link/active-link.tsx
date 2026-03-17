import Link, { LinkProps } from "next/link"
import { cn } from "@/lib/utils"
import { useRouter } from "next/router"

type ActiveLinkProps = {
    children: React.ReactNode
} & LinkProps

export const ActiveLink = ({children, href, ...rest}: ActiveLinkProps) => {
    const router = useRouter()
    const isCurrentPath = router.asPath === href || router.asPath === rest.as || router.asPath.startsWith(String(rest.as))
    return (
        <Link href={href} className={cn('text-sm font-medium transition-colors hover:text-gray-600',
            isCurrentPath ? 'text-blue-500 hover:text-blue-600' : 'text-muted-foreground')}>{children}</Link>
    )
}