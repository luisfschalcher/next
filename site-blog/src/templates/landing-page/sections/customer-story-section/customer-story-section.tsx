import periclesVale from "@/assets/periclesVale.webp"
import isaac from "@/assets/isaac.jpg"
import Image from "next/image"

const customerStory = [
    {
        content: 'Fui mais um nas suas mãos não sei se por carência ou falta de opção, só sei que eu senti amor, que pena só eu senti amor',
        author: {
            name: 'Pericão',
            role: 'Cantor',
            avatar: periclesVale
        }
    },
    {
        content: 'As coisa cai',
        author: {
            name: 'Isaac Newton',
            role: 'Físico',
            avatar: isaac
        }
    }
]

export const CustomerStorySection = () => {
    return (
        <section className="container py-8 md:py-10">
            <div className="flex flex-col items-center gap-12">
                <h2 className={`font-sans text-heading-xl text-gray-100`}>Quem utiliza, aprova!</h2>
                <div className="grid gap-8 md:grid-cols-2 items-start">
                    {customerStory.map((customerStory) => (
                        <div key={customerStory.author.name} className="flex flex-col gap-6 rounded-lg bg-gray-500 p-6 md:p-12 h-full">
                            <p className="text-balance text-gray-200">{customerStory.content}</p>
                            <div className="flex items-center gap-3">
                                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                    <Image src={customerStory.author.avatar} alt={customerStory.author.name} fill className="object-cover"></Image>
                                </div>
                                <div className="flex flex-col">
                                    <strong className="text-gray-200 text-sm">{customerStory.author.name}</strong>
                                    <span className="text-xs text-gray-300">{customerStory.author.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}