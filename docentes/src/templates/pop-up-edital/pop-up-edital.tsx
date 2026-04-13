import { TagSpan } from "@/components/tag-span"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Building, User, Download } from "lucide-react"

export const PopUpEdital = () => {
    return (
        <div className="max-w-264 min-h-screen bg-white flex rounded-xl mx-auto">
            <div className="max-w-[1148px] min-h-screen rounded-md overflow-hidden font-sans m-6">
                <div className="max-w-[1100px] h-35 md:h-70 bg-[#0d4b81] text-white py-8 pl-8 flex items-center gap-4 rounded-md relative">
                    <div className="absolute top-full -translate-y-1/2 left-9 w-38 h-38 rounded-full bg-white border border-gray-200 hidden md:block">
                        <img
                            src="/ceuma-colorido.png"
                            alt="ceuma"
                            className="w-31 h-30 pt-7 pl-7"
                        />
                    </div>
                    <h2 className="text-xl md:text-3xl md:ml-[170px] font-normal font-roboto md:mt-54 whitespace-nowrap">Professor de Engenharia</h2>
                    <div className="h-70 overflow-hidden hidden md:block">
                        <img
                            src="/ceuma-azul.png"
                            alt="ceuma"
                            className="w-[500px] h-[500px] ml-40 -translate-y-21 object-contain"
                        />
                    </div>
                </div>
                <div className="md:flex md:mt-2">
                    <div>
                        <div className="md:py-3.5 flex md:flex-wrap gap-2 mt-6 md:mt-23">
                            <TagSpan>Tecnologia</TagSpan>
                            <TagSpan>Inovação</TagSpan>
                            <TagSpan>Cultura Maker</TagSpan>
                            <TagSpan>Desenvolvimento</TagSpan>
                            <TagSpan>Engenharia</TagSpan>
                        </div>
                        <h2 className="text-3xl font-extrabold font-poppins text-gray-800 md:mt-3 mt-6">Edital nº 24/2025</h2>
                        <div className="max-w-161 h-83 overflow-y-auto text-gray-300 flex rounded-sm border border-gray-300 mt-6 py-2 px-3">
                            <p className="font-extralight text-sm font-poppins text-gray-400 text-justify">O Programa “LEVEL UP - Girls in Game” é concebido como um piloto estruturado de continuidade formativa das Game Jams das Iemanas (IEMA) e Maraninas (SEDUC), alinhado à metodologia da Game Changers Coalition (UNICEF), voltado à formação continuada de meninas em competências técnicas, criativas e empreendedoras. Meninas demonstram alto interesse por jogos digitais, porém enfrentam barreiras estruturais, culturais e formativas para acessar carreiras na indústria de games. O programa responde a esse desafio ao articular formação técnica, pedagogia crítica de gênero, aprendizagem baseada em projetos e conexão com o ecossistema de inovação e de jogos.O Programa “LEVEL UP - Girls in Game” é concebido como um piloto estruturado de continuidade formativa das Game Jams das Iemanas (IEMA) e Maraninas (SEDUC), alinhado à metodologia da Game Changers Coalition (UNICEF), voltado à formação continuada de meninas em competências técnicas, criativas e empreendedoras. Meninas demonstram alto interesse por jogos digitais, porém enfrentam barreiras estruturais, culturais e formativas para acessar carreiras na indústria de games. O programa responde a esse desafio ao articular formação técnica, pedagogia crítica de gênero, aprendizagem baseada em projetos..</p>
                        </div>
                        <div className="max-w-161 h-10 text-gray-500 flex rounded-sm border border-gray-400 mt-6 py-2 px-3 items-center justify-center text-xs font-poppins">Baixar PDF do edital<Download className="ml-5" /></div>
                    </div>
                    <div className="max-w-86 h-91 bg-[#E6EAF5] ml-6 mt-7 md:mt-27 rounded-xl">
                        <Button variant='azul' size='azul' className="m-7">Realizar inscrição <ArrowRight className="ml-1" /></Button>
                        <div className="px-7">
                            <div className="flex">
                                <Calendar className="text-gray-800 pr-1 pt-1" /><h3 className="text-gray-800 text-xl font-bold font-poppins">Data de inscrição</h3>
                            </div>
                            <h4 className="text-gray-500 text-sm pb-5 pl-1">17 Fev a 25 Jul 2026</h4>
                            <div className="flex">
                                <Building className="text-gray-800 pr-1 pt-1" /> <h3 className="text-gray-800 text-xl font-bold font-poppins">Unidade</h3>
                            </div>
                            <h4 className="text-gray-500 text-sm pb-5 pl-1">Renascença</h4>
                            <div className="flex">
                                <User className="text-gray-800 pr-1 pt-1" /><h3 className="text-gray-800 text-xl font-bold font-poppins">Organizador</h3>
                            </div>
                            <h4 className="text-gray-500 text-sm pb-5 pl-1">CEUMA</h4>
                            <div className="flex">
                                <User className="text-gray-800 pr-1 pt-1" /><h3 className="text-gray-800 text-xl font-bold font-poppins">Curso</h3>
                            </div>
                            <h4 className="text-gray-500 text-sm pb-5 pl-1">Engenharia da Computação</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}