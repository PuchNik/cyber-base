import { useCallback, useState } from "react";
import { useTheme } from "../../shared/hooks/useTheme.js";
import Navigation from "./Navigation.jsx";

function Header() {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev);
    }, []);

    const handleCloseMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    return (
        <header
            className={`site-header${isMenuOpen ? " site-header--menu-open" : ""}`}
        >
            <div className="brand">
                <span className="brand-icon" aria-hidden="true" />
                <span>Cyber Base</span>
            </div>
            <button
                className="burger-button"
                type="button"
                onClick={handleToggleMenu}
                aria-expanded={isMenuOpen}
                aria-label="Открыть меню"
            >
                <span className="burger-line" />
                <span className="burger-line" />
                <span className="burger-line" />
            </button>
            <Navigation className="nav--primary" onNavigate={handleCloseMenu} />
            <button
                className="theme-toggle"
                type="button"
                onClick={toggleTheme}
                aria-pressed={theme === "dark"}
            >
                {theme === "dark" ? "Светлая тема" : "Темная тема"}
            </button>
        </header>
    );
}

export default Header;
