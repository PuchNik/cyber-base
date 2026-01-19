import { useParams } from "react-router-dom";
import SectionHeader from "../../components/ui/SectionHeader.jsx";
import { sectionPages } from "../../data/sectionPages.js";

function SectionPractice() {
    const { sectionId } = useParams();
    const section = sectionPages[sectionId];

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
                title={`${section.title} — Практика`}
                description="Практические материалы по теме."
            />
            <div className="card">
                <p>Контент находится в разработке.</p>
            </div>
        </section>
    );
}

export default SectionPractice;
