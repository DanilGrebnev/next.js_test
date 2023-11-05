import { FC, useId } from "react"
import Link from "next/link"

import s from "./Header.module.scss"

interface IHeaderProps {
    links: { href: string; text: string }[]
}

export const Header: FC<IHeaderProps> = (props) => {
    const { links } = props
    return (
        <header className={s.header} id="header">
            {links.map((link) => {
                return <Link href={link.href}>{link.text}</Link>
            })}
        </header>
    )
}

Header.displayName = "Header"
