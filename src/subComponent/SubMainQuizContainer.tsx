import type { JSX } from "react";
import useGlobalContext from "./UseGlobalContext";
import Option from "../subSubCompnent/Option";

/**
 * Renders the main content of the quiz component.
 * It displays a loading message if the quiz data is not available.
 * Otherwise, it displays the current question and its options.
 * The user can select an answer for the current question.
 * The selected answer is stored in the global state.
 * @returns {JSX.Element} The rendered element.
 */
const SubMainQuizContainer = (): JSX.Element => {
    // ambil pertanyaan yang sudah diload dari global
    const { quizData, userAnswers, setUserAnswers, currentQuestionIndex } =
        useGlobalContext();

    if (!quizData) {
        return <p className="text-gray-500">Loading...</p>;
    }

    /**
     * Selects an answer for the current question.
     * @param {string} optionKey - The key of the answer to select (A, B, C, D).
     */
    const selectAnswer = (optionKey: string): void => {
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestionIndex] = optionKey;
        setUserAnswers(newAnswers);
    };

    const optionLabels: string[] = ["A", "B", "C", "D"]; // console.log(quizData);

    return (
        <>
            <h2
                id="question-text"
                className="text-lg font-semibold mb-6 min-h-[56px]"
            >
                {currentQuestionIndex + 1}. {quizData[currentQuestionIndex].question}
            </h2>
            <div
                id="options-container"
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                {quizData[currentQuestionIndex].options.map((option, index) => {
                    const optionKey = optionLabels[index];
                    const isSelected = userAnswers[currentQuestionIndex] === optionKey;

                    return (
                        <Option
                            onClick={() => selectAnswer(optionKey)}
                            key={index}
                            optionKey={optionKey}
                            isSelected={isSelected}
                        >
                            {option}
                        </Option>
                    );
                })}
            </div>
        </>
    );
};

export default SubMainQuizContainer
