import type { JSX } from "react";

interface optionProps {
    children: React.ReactNode;
    onClick: () => void;
    optionKey: string;
    isSelected: boolean;
}

const Option = ({ children, onClick, optionKey, isSelected }: optionProps): JSX.Element => {
    return (
        <div
            onClick={onClick}
            className={`option-card p-4 border-2 rounded-lg cursor-pointer flex items-start gap-4 transition-all duration-[.2s] hover:shadow-lg hover:-translate-y-[4px] ${isSelected ? "border-blue-500 bg-blue-100" : "border-slate-200"
                }`}
        >
            <div
                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${isSelected ? "bg-blue-500 text-white" : "bg-slate-200 text-slate-600"
                    }`}
            >
                {optionKey}
            </div>
            <p className="flex-1">{children}</p>
        </div>
    );
};

export default Option;