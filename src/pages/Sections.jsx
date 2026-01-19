import LinkCard from "../components/ui/LinkCard.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { sectionLinks } from "../data/sectionLinks.js";

function Sections() {
    return (
        <section className="section">
            <SectionHeader
                title="Ресурсы"
                description="Структура тем и направлений, сгруппированных для обучения."
            />
            <div className="grid grid--topics">
                {sectionLinks.map((item) => (
                    <LinkCard
                        key={item.title}
                        className="card card--tall section-link"
                        to={item.path}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Sections;
