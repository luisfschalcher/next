import {Tag} from "lucide-react"

export const PopUpEdital = () => {
    return (
        <div className="max-w-264 max-h-[1055px] fixed inset-0 bg-white flex rounded-xl mx-auto">
            <div className="w-[1148px] h-[1055px] bg-gray-100 rounded-md overflow-hidden font-sans m-6">
                <div className="w-[1100px] h-72 bg-[#0d4b81] text-white p-8 flex items-center gap-4 rounded-md relative">
                    <div className="absolute top-full -translate-y-1/2 left-9 w-38 h-38 rounded-full bg-gray-300"></div>
                    <h2 className="text-3xl ml-[170px] font-medium mt-54">Professor de Engenharia</h2>
                </div>
                <div className="py-3.5 flex flex-wrap gap-2 mt-26">
                    <span className="flex max-h-[23px] items-center text-cyan-500 text-[10px] px-1 py-1 rounded-md border border-cyan-500"> <Tag className="w-4 h-4 pr-1"></Tag> Tecnologia</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-md">Inovação</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-md">Cultura Maker</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-md">Desenvolvimento</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-md">Engenharia</span>
                </div>
            </div>
        </div>
    )
}