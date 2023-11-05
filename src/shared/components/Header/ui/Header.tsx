import { FC, HTMLAttributes } from "react"
import Link from "next/link"

import s from "./Header.module.scss"

interface IHeaderProps extends HTMLAttributes<HTMLHeadElement> {
    links: { href: string; text: string }[]
}

export const Header: FC<IHeaderProps> = (props) => {
    const { links, ...otherProps } = props
    return (
        <header {...otherProps} className={s.header} id="header">
            {links.map((link, i) => {
                return (
                    <Link key={i} href={link.href}>
                        {link.text}
                    </Link>
                )
            })}
        </header>
    )
}

Header.displayName = "Header"
