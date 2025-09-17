import type { JSX, ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    id: string,
    label: string,
    className: string,
    onClick: () => void,
    disabled: boolean,
}


interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
}

/**
 * A custom button component that renders a button with a bold font, rounded corners, and a transition effect on the color.
 * It takes in a `children` prop which is the text to be rendered inside the button.
 * It also takes in a `className` prop which is the CSS class to be applied to the button.
 * It spreads the rest of the props to the underlying HTML button element.
 * @param {MyButtonProps} props - The props of the component.
 * @returns {JSX.Element} - The rendered element.
 */
export const MyButton = ({ children, className, ...props }: MyButtonProps): JSX.Element => {

    return (
        <button
            className={`${className} font-bold py-2 px-4 rounded-lg transition-colors`}
            {...props}
        >
            {children}
        </button>
    );
};


