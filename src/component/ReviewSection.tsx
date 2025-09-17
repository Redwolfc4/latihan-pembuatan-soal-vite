import type { JSX } from "react";
import useGlobalContext from "../subComponent/UseGlobalContext";
import ChoiceResult from "../subComponent/ChoiceResult";

/**
 * A functional component that renders a review section of the quiz.
 * It displays a header indicating the review section and a container that loops through the quiz data.
 * For each question, it displays the question text, the user's answer, and the correct answer.
 * The user's answer is compared with the correct answer and a green or red border is applied accordingly.
 * If the user's answer is incorrect, the correct answer is displayed.
 * @returns {JSX.Element} The rendered element.
 */
const ReviewSection = (): JSX.Element => {
    // ambil soal, kunci jawaban dan jawaban yang dipilih
    const { quizData, userAnswers } = useGlobalContext();

    const optionLabels: string[] = ["A", "B", "C", "D"];

    if (!quizData) {
        return <p className="text-gray-500">Loading Data...</p>;
    }

    return (
        <div id="review-section" className="mt-8 pt-6 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-700 mb-4 text-left">
                Tinjau Jawaban
            </h2>
            <div id="review-container" className="space-y-4 text-left">
                {/* looping quizdata ambil  user answernya lalu cek dengan jawaban benarnya */}
                {quizData?.map((question, index) => {
                    const isCorrect: boolean = userAnswers[index] === question.correct;
                    const correctAnswerText: string =
                        question.options[optionLabels.indexOf(userAnswers[index] ?? "")] ?? "";

                    return (
                        <div
                            key={index}
                            className={`p-4 rounded-lg border ${isCorrect
                                ? "bg-green-50 border-green-200"
                                : "bg-red-50 border-red-200"
                                }`}
                        >
                            {/* pertanyaan */}
                            <p className="font-semibold text-slate-800">
                                {index + 1}. {question.question}
                            </p>
                            {/* end */}
                            <div className="mt-3 text-sm">
                                <ChoiceResult
                                    textFirst="Jawaban Anda"
                                    className={
                                        isCorrect
                                            ? "text-green-700 font-bold ms-2"
                                            : "text-red-700 font-bold ms-2"
                                    }
                                >
                                    {userAnswers[index]
                                        ? `${userAnswers[index]}. ${correctAnswerText}`
                                        : "Tidak dijawab"}
                                </ChoiceResult>

                                {!isCorrect && (
                                    <ChoiceResult
                                        textFirst="Jawaban Anda"
                                        className="text-green-700 font-bold ms-2"
                                    >
                                        {`${question.correct}. ${question.options[optionLabels.indexOf(question.correct)]
                                            }`}
                                    </ChoiceResult>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ReviewSection;
