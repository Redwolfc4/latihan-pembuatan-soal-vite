import type { JSX } from "react";
import SubMainQuizContainer from "../subComponent/SubMainQuizContainer";
import SubMainResultContainer from "../subComponent/SubMainResultContainer";

interface propsMain {
    id: string
}


/**
 * A functional component that renders the main content of the application.
 * It renders different components based on the id.
 * If the id is "quiz-container", it renders the SubMainQuizContainer.
 * Otherwise, it renders the SubMainResultContainer.
 * @param {propsMain} props - The props of the component.
 * @returns {JSX.Element} The rendered element.
 */
const Main = ({ id }: propsMain): JSX.Element => {
    const isQuiz: boolean = id === "quiz-container";

    const classMain: string = isQuiz
        ? ""
        : "grid grid-cols-1 md:grid-cols-2 gap-6 items-center";

    return (
        <main className={classMain}>
            {isQuiz ? <SubMainQuizContainer /> : <SubMainResultContainer />}
        </main>
    );
};

export default Main
