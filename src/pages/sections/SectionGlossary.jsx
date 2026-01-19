import { useMemo } from "react";
import { useParams } from "react-router-dom";
import SectionHeader from "../../components/ui/SectionHeader.jsx";
import { sectionPages } from "../../data/sectionPages.js";
import { sectionContent } from "../../data/sectionContent.js";

function SectionGlossary() {
    const { sectionId } = useParams();
    const section = sectionPages[sectionId];

    const terms = useMemo(
        () => sectionContent?.[sectionId]?.glossary ?? [],
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
                title={`${section.title} — Терминологический словарь`}
                description="Основные термины по теме, расположенные по вертикали."
            />
            <div className="glossary">
                {terms.map((item) => (
                    <article key={item.term} className="glossary__item">
                        <strong>{item.term}</strong>
                        <p>{item.definition}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default SectionGlossary;
