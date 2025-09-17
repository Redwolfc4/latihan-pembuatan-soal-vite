import { useContext } from "react";
import { GlobalContext, type GlobalContextType } from "../component/GlobalContext";

/**
 * Returns the context object from the GlobalProvider.
 * Throws an error if the hook is not used within a GlobalProvider.
 * @returns {GlobalContextType} The context object.
 */
const useGlobalContext = (): GlobalContextType => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return context;
};

export default useGlobalContext
