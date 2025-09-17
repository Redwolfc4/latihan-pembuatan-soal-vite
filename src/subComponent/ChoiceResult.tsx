import type { JSX, ReactNode } from "react";

interface choiceResultProps {
    children: ReactNode;
    textFirst: string;
    className: string;
}

/**
 * A functional component that renders a choice result.
 * It takes three props: `children`, `textFirst`, and `className`.
 * The `children` prop is the text that will be displayed as the choice result.
 * The `textFirst` prop is the text that will be displayed before the choice result.
 * The `className` prop is the CSS class that will be applied to the choice result.
 * @param {choiceResultProps} props - The props of the component.
 * @returns {JSX.Element} The rendered element.
 */
const ChoiceResult = ({ children, textFirst, className }: choiceResultProps): JSX.Element => {
    return (
        <p className="text-slate-600">
            {textFirst}
            <span className={className}>{children}</span>
        </p>
    );
};

export default ChoiceResult;