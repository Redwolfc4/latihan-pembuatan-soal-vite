import type { JSX, ReactNode } from "react"

interface Heading1Props {
    children: ReactNode
}

/**
 * A Heading1 component to render a heading with a size of 2xl on small screens and 3xl on medium screens and above.
 * It also renders the text with a bold font weight, a color of slate-700, and a margin bottom of 2.
 * The text is rendered with the poppins-regular font style.
 * @param {{ children: ReactNode }} props - The props for the component.
 * @returns {JSX.Element} - The component element.
 */
const Heading1 = ({ children }: Heading1Props): JSX.Element => {
    return (
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-700 mb-2 poppins-regular">
            {children}
        </h1>
    )
}

export default Heading1