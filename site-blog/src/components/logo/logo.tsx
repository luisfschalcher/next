import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href="/" title="Página inicial">
            <Image src='/vercel.svg' alt='logo' width={32} height={32}></Image>
        </Link>
    )
}