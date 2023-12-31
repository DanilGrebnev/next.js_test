import { FC, HTMLAttributes } from "react"
import { v4 } from "uuid"
import Link from "next/link"

import s from "./Header.module.scss"

interface IHeaderProps extends HTMLAttributes<HTMLHeadElement> {
    routes: { href: string; text: string }[]
}

export const Header: FC<IHeaderProps> = (props) => {
    const { routes, ...otherProps } = props

    return (
        <header className={s.header} {...otherProps}>
            {routes.map((route) => {
                return (
                    <Link key={v4()} href={route.href}>
                        {route.text}
                    </Link>
                )
            })}
        </header>
    )
}

Header.displayName = "Header"
