import Image from "next/image"
import montanha from "@/assets/montanha.webp"

export default function UserPage(){
    return(
        <div>
            <h2>Página do usuário</h2>
            <Image src={montanha} width={500} height={500} alt="imagem"/>
        </div>
    )
}