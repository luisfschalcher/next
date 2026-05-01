import React from "react"

type PostCardGridProps = {
    children: React.ReactNode
}

export const PostCardGrid = ({children}: PostCardGridProps) => {
    return (
        <div className=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {children}
        </div>
    )
}