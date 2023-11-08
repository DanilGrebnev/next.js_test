import NextLink from "next/link"

interface LinkProps {
    className?: string
    children?: React.ReactNode
    nextPage?: number
    href: string
}

export const Link: React.FC<LinkProps> = (props) => {
    const { className, nextPage = "", href, children } = props

    return (
        <div className={className}>
            <NextLink href={href + "/" + nextPage}>{children}</NextLink>
        </div>
    )
}
