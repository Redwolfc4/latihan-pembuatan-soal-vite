import { createContext, useEffect, useState, type JSX, type ReactNode } from "react";

export interface Question {
    question: string;
    options: string[];
    correct: string;
}

export interface GlobalContextType {
    quizData: Question[] | null;
    setQuizData: React.Dispatch<React.SetStateAction<Question[] | null>>;
    userAnswers: (string | null)[];
    setUserAnswers: React.Dispatch<React.SetStateAction<(string | null)[]>>;
    currentQuestionIndex: number;
    setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
    children: ReactNode;
}

/**
 * GlobalProvider is a React component that provides the global state and context to its children.
 * It fetches the quiz data from a JSON file and stores it in the global state.
 * It also provides the ability to update the user's answers and the current question index.
 * The component takes a single prop, `children`, which should be a React node.
 * The component will render the provided children and pass the global state and context to them.
 * The component uses the `useState` and `useEffect` hooks to manage the global state and context.
 */
export const GlobalProvider = ({ children }: GlobalProviderProps): JSX.Element => {
    const [quizData, setQuizData] = useState<Question[] | null>(null);
    const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data: Question[]) => {
                setQuizData(data);
                setUserAnswers(Array(data.length).fill(null));
            })
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                quizData,
                setQuizData,
                userAnswers,
                setUserAnswers,
                currentQuestionIndex,
                setCurrentQuestionIndex,
            }}
        >
            {/* buat appnya kayak header, main, dan footer */}
            {children}
        </GlobalContext.Provider>
    );
};
