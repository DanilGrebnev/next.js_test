import { FC } from "react"
import Link from "next/link"

interface HeroesListProps {
    className?: string
    children: React.ReactNode
    nextPage?: string
}

export const HeroesButton: FC<HeroesListProps> = (props) => {
    const { children, nextPage } = props

    return <Link href={"/heroes/" + nextPage}>{children}</Link>
}
