import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import PixelExplosion from "./components/PixelExplosion.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import Contacts from "./pages/Contacts.jsx";
import Home from "./pages/Home.jsx";
import Library from "./pages/Library.jsx";
import Sections from "./pages/Sections.jsx";

const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav__link nav__link--active" : "nav__link";

function App() {
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
                    <NavLink to="/contacts" className={getNavLinkClass}>
                        Контакты
                    </NavLink>
                </nav>
            </header>

            <main className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/sections" element={<Sections />} />
                    <Route path="/contacts" element={<Contacts />} />
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
