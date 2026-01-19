import { useMemo } from "react";
import { useParams } from "react-router-dom";
import SectionHeader from "../../components/ui/SectionHeader.jsx";
import { sectionPages } from "../../data/sectionPages.js";
import { sectionContent } from "../../data/sectionContent.js";

function SectionTheoryText() {
    const { sectionId } = useParams();
    const section = sectionPages[sectionId];

    const cards = useMemo(() => {
        const content = sectionContent?.[sectionId];
        return content?.theoryText ?? content?.theory ?? [];
    }, [sectionId]);

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
                description="Теоретические материалы по выбранной теме."
            />
            <div className="theory-list">
                {cards.map((item) => (
                    <article key={item.title} className="card theory-card">
                        <h3>{item.title}</h3>
                        <h4>{item.subtitle}</h4>
                        <p>{item.details}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default SectionTheoryText;
