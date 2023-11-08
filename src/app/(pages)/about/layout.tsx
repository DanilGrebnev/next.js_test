import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About page",
    description: "About page description",
}

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>
}
export default AboutLayout
