import Link, { LinkProps } from "next/link"
import { cn } from "@/lib/utils"
import { useRouter } from "next/router"

type ActiveLinkProps = {
    children: React.ReactNode
} & LinkProps

export const ActiveLink = ({children, href, ...rest}: ActiveLinkProps) => {
    const router = useRouter()
    const isCurrentPath = router.asPath === href || router.asPath === rest.as
    return (
        <Link href={href} className={cn('text-action-sm transition-colors hover:text-gray-200',
            isCurrentPath ? 'text-blue-200 hover:text-blue-300' : 'text-gray-300')}>{children}</Link>
    )
}