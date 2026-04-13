import { Tag } from "lucide-react"
import { ReactNode } from "react"

type TagSpanProps = {
  children: ReactNode
}

export const TagSpan = ({children}: TagSpanProps) => {
    return (
        <span className="flex max-h-[23px] items-center text-cyan-500 text-[10px] px-1 py-1 rounded-md border border-cyan-500"> <Tag className="w-4 h-4 pr-1"></Tag>{children}</span>
    )
}