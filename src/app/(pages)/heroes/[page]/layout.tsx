import type { Metadata } from "next"

interface ISettingLayout {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Setting",
    description: "Setting page description",
}

const SettingLayout = ({ children }: ISettingLayout) => {
    return <>{children}</>
}

export default SettingLayout
