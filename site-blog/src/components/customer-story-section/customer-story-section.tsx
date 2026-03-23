import { PT_Sans_Caption } from "next/font/google"

const ptSansCaption = PT_Sans_Caption({
    subsets: ['latin'], weight: '700'
})

export const CustomerStorySection = () => {
    return (
        <section>
            <h2 className={`${ptSansCaption.className} text-heading-xl`}>Quem utiliza, aprova!</h2>
        </section>
    )
}