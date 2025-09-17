import type { JSX } from "react/jsx-runtime";
import useGlobalContext from "./UseGlobalContext";

interface ProgressBarProps {
    id: string
}

/**
 * A functional component that renders a progress bar.
 * It uses the GlobalContext to get the quizData and currentQuestionIndex.
 * The progress bar is rendered only if the id is "quiz-container".
 * The progress percentage is calculated based on the current question index and the total number of questions.
 * @param {ProgressBarProps} props - The props of the component.
 * @returns {JSX.Element} The rendered element.
 */
const ProgressBar = ({ id }: ProgressBarProps): JSX.Element => {
    const { quizData, currentQuestionIndex } = useGlobalContext();
    const progressPercentage: number = quizData && quizData.length > 0
        ? ((currentQuestionIndex + 1) / quizData.length) * 100
        : 0;
    return (
        <>
            {id === "quiz-container" && (
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <div
                        id="progress-bar"
                        className={`bg-sky-500 h-2.5 rounded-full transition-all duration-300 `}
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div >
            )}
        </>
    );
}

export default ProgressBar