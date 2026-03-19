import { Clock, Store } from "lucide-react"

export const HeroSection = () => {
    return (
        <section className="mt-16">
            <div>
                <div>
                    <h1 className="text-gray-100 text-heading-hg">Venda seus produtos... em um único lugar</h1>
                </div>
                <div>
                    <div>
                        <div className="flex items-center gap-2">
                            <Clock className="text-cyan-100 h-4 w-4"></Clock>
                            <span className="text-gray-200">Crie seu site em 5 min</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Store className="text-cyan-100 h-4 w-4"></Store>
                            <span className="text-gray-200">Acompanhe e otimize seu negócio online</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}