import { NavLink, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import PixelExplosion from "./components/PixelExplosion.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import Glossary from "./pages/Glossary.jsx";
import Home from "./pages/Home.jsx";
import Library from "./pages/Library.jsx";
import Sections from "./pages/Sections.jsx";
import InfoSecurity from "./pages/sections/InfoSecurity.jsx";
import LegalActs from "./pages/sections/LegalActs.jsx";
import Networks from "./pages/sections/Networks.jsx";
import Programming from "./pages/sections/Programming.jsx";

const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav__link nav__link--active" : "nav__link";

function App() {
    const [theme, setTheme] = useState(() => {
        const saved = window.localStorage.getItem("theme");
        return saved === "dark" ? "dark" : "light";
    });

    useEffect(() => {
        document.body.dataset.theme = theme;
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    const handleToggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <div className="page">
            <PixelExplosion />
            <header className="site-header">
                <div className="brand">
                    <span className="brand-icon" aria-hidden="true" />
                    <span>Cyber Base</span>
                </div>
                <nav className="nav">
                    <NavLink to="/" end className={getNavLinkClass}>
                        Главная
                    </NavLink>
                    <NavLink to="/library" className={getNavLinkClass}>
                        Библиотека
                    </NavLink>
                    <NavLink to="/sections" className={getNavLinkClass}>
                        Разделы
                    </NavLink>
                    <NavLink to="/glossary" className={getNavLinkClass}>
                        Словарь
                    </NavLink>
                </nav>
                <button
                    className="theme-toggle"
                    type="button"
                    onClick={handleToggleTheme}
                    aria-pressed={theme === "dark"}
                >
                    {theme === "dark" ? "Светлая тема" : "Темная тема"}
                </button>
            </header>

            <main className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/sections" element={<Sections />} />
                    <Route path="/sections/info-security" element={<InfoSecurity />} />
                    <Route path="/sections/legal-acts" element={<LegalActs />} />
                    <Route path="/sections/networks" element={<Networks />} />
                    <Route path="/sections/programming" element={<Programming />} />
                    <Route path="/glossary" element={<Glossary />} />
                    <Route path="/library/:slug" element={<BookDetails />} />
                </Routes>
            </main>

            <footer className="footer">
                <div>Cyber Base • База знаний по ИБ</div>
                <span>Версия 1.0</span>
            </footer>
        </div>
    );
}

export default App;
