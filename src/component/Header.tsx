import Heading1 from "../subComponent/Heading1";
import type { JSX } from "react/jsx-runtime";
import type { ReactNode } from "react";
import useGlobalContext from "../subComponent/UseGlobalContext";


interface HeaderProps {
    children?: ReactNode;
    id: string;
}

/**
 * A functional component that renders the header of the application.
 * It displays a title and a progress bar when the id is "quiz-container".
 * Otherwise, it displays a title and a text indicating the result of the quiz.
 * @param {HeaderProps} props - The props of the component.
 * @returns {JSX.Element} The rendered element.
 */
const Header = ({ children, id }: HeaderProps): JSX.Element => {
    // ambil pertanyaan yang sudah diload dari global
    const { quizData, currentQuestionIndex } = useGlobalContext();
    return (
        <header className="mb-6">
            <div
                className={`flex ${id === "quiz-container"
                    ? "justify-between"
                    : "flex-col justify-center"
                    } items-center mb-2`}
            >
                <Heading1>
                    {id === "quiz-container"
                        ? "Kuis: Java Collection Framework"
                        : "Hasil Kuis Anda"}
                </Heading1>
                <p
                    id={id === "quiz-container" ? "progress-text" : ""}
                    className={`text-slate-500 ${id === "quiz-container" ? "text-xl poppins-semibold" : "mb-6"
                        }`}
                >
                    {id === "quiz-container"
                        ? `${currentQuestionIndex + 1}/${quizData?.length}`
                        : "Berikut adalah ringkasan performa Anda."}
                </p>
            </div>

            {children ?? ""}
        </header>
    );
};

export default Header
