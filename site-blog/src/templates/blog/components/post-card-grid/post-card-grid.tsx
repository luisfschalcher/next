import React from "react"

type PostCardGridProps = {
    children: React.ReactNode
}

export const PostCardGrid = ({children}: PostCardGridProps) => {
    return (
        <div className="grid grid-cols-1">
            {children}
        </div>
    )
}