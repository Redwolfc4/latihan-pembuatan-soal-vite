import { type JSX } from "react";
import useGlobalContext from "./UseGlobalContext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, type ChartData, type ChartOptions } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

// register module chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const SubMainResultContainer = (): JSX.Element => {

    const { quizData, userAnswers } = useGlobalContext();

    // cek quizData sudah render
    if (!quizData) {
        return <p className="text-gray-500">Loading...</p>;
    }

    // hitung jawaban benar
    const correctAnswersAmount: number = quizData.reduce((count, question, index) => {
        return question.correct === userAnswers[index] ? count + 1 : count;
    }, 0); //akan melakukan penambahan dimulai dari 0

    const chartData: ChartData<'doughnut'> = {
        labels: ["Benar", "Salah"],
        datasets: [
            {
                data: [
                    correctAnswersAmount,
                    quizData?.length - correctAnswersAmount,
                ], //right and wrong
                backgroundColor: ["#10b981", "#ef4444"],
                borderColor: ["#ffffff"],
                borderWidth: 4,
            },
        ],
    };

    const chartOption: ChartOptions<'doughnut'> = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "70%" as const,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
        },
    };

    return (
        <>
            <div className="chart-container">
                <Doughnut data={chartData} options={chartOption}></Doughnut>
            </div>
            <div>
                {/* score */}
                <p
                    className="text-5xl font-bold text-sky-500"
                    id="score-percentage"
                >{`${Math.round(
                    (correctAnswersAmount / quizData?.length) * 100
                )}%`}</p>
                {/* end */}
                <p className="text-slate-600 font-medium mt-1">Skor Akhir</p>
                <div className="mt-4 flex justify-center gap-4 text-left">
                    <div className="p-4 bg-green-100 rounded-lg w-1/2">
                        <p
                            className="text-2xl font-bold text-green-700"
                            id="correct-answers-count"
                        >
                            {correctAnswersAmount}
                        </p>
                        <p className="text-sm font-medium text-green-600">Jawaban Benar</p>
                    </div>
                    <div className="p-4 bg-red-100 rounded-lg w-1/2">
                        <p className="text-2xl font-bold text-red-700" id="wrong-answers-count">
                            {quizData?.length - correctAnswersAmount}
                        </p>
                        <p className="text-sm font-medium text-red-600">Jawaban Salah</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubMainResultContainer;