import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "../../shared/context/themeContext.js";

const getInitialTheme = () => {
    if (typeof window === "undefined") {
        return "light";
    }

    const savedTheme = window.localStorage.getItem("theme");
    return savedTheme === "dark" ? "dark" : "light";
};

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        if (typeof document !== "undefined") {
            document.body.dataset.theme = theme;
        }

        if (typeof window !== "undefined") {
            window.localStorage.setItem("theme", theme);
        }
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }, []);

    const value = useMemo(
        () => ({
            theme,
            setTheme,
            toggleTheme,
        }),
        [theme, toggleTheme]
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
