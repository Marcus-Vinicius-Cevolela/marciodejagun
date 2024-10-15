import { ReactNode } from "react";

type Props = {
    children: ReactNode
}
export function Container({ children } : Props) {
    return(
        <div>
            <div className="flex items-center justify-center w-full max-w[1246px] px-4 py-3 mx-auto">
                {children}
            </div>
        </div>
    )
}