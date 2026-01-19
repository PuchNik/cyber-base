import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import SectionHeader from "../../components/ui/SectionHeader.jsx";
import { sectionPages } from "../../data/sectionPages.js";
import { sectionContent } from "../../data/sectionContent.js";

function SectionTheory() {
    const { sectionId } = useParams();
    const section = sectionPages[sectionId];

    const cards = useMemo(
        () => sectionContent?.[sectionId]?.theory ?? [],
        [sectionId]
    );

    if (!section) {
        return (
            <section className="section">
                <SectionHeader
                    title="Раздел не найден"
                    description="Проверьте ссылку или выберите другой раздел."
                />
            </section>
        );
    }

    return (
        <section className="section">
            <SectionHeader
                title={`${section.title} — Теория`}
                description="Базовые темы и понятия по выбранному разделу."
            />
            <div
                className={
                    sectionId === "networks"
                        ? "theory-list theory-list--horizontal"
                        : "theory-list"
                }
            >
                {cards.map((item) => (
                    item.path ? (
                        <Link
                            key={item.title}
                            className="card theory-card theory-card--link"
                            to={item.path}
                        >
                            <h3>{item.title}</h3>
                            <h4>{item.subtitle}</h4>
                            <p>{item.details}</p>
                        </Link>
                    ) : (
                        <article key={item.title} className="card theory-card">
                            <h3>{item.title}</h3>
                            <h4>{item.subtitle}</h4>
                            <p>{item.details}</p>
                        </article>
                    )
                ))}
            </div>
        </section>
    );
}

export default SectionTheory;
