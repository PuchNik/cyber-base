import { Link } from "react-router-dom";
import SectionHeader from "../components/ui/SectionHeader.jsx";

function NotFound() {
    return (
        <section className="section">
            <SectionHeader
                title="Страница не найдена"
                description="Такой страницы нет. Проверьте адрес или перейдите на главную."
            />
            <Link className="btn btn--ghost" to="/">
                На главную
            </Link>
        </section>
    );
}

export default NotFound;
