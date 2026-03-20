import { Button } from "../ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const FeatureSection = () => {
    return (
        <section className="container bg-gray-700 grid gap-6 md:grid-cols-2 py-8 md:py-10">
            <div className="flex flex-col gap-2 rounded-lg p-6 bg-gray-500 md:p-12">
                <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">Simples</span>
                <h2 className="text-gray-100 text-heading-lg">Crie um catálogo de produtos online em poucos minutos</h2>
            </div>
            <div className="flex flex-col gap-2 rounded-lg p-6 bg-gray-500 md:p-12">
                <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">Prático</span>
                <h2 className="text-gray-100 text-heading-lg">Venda por uma plataforma única</h2>
            </div>
            <div className="flex flex-col gap-2 rounded-lg p-6 bg-gray-500 md:p-12">
                <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">Personalizável</span>
                <h2 className="text-gray-100 text-heading-lg">Tenha uma loja online personalizada com a cara da sua marca</h2>
                <Button asChild className="rounded-full mt-4 md:mt-auto">
                    <Link href='/criar-loja'>
                        Criar loja de graça
                        <ArrowRight></ArrowRight>
                    </Link>
                </Button>
            </div>
        </section>
    )
}