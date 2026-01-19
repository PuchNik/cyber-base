import InfoCard from "../components/ui/InfoCard.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { glossaryTopics } from "../data/glossaryTopics.js";

function Glossary() {
    return (
        <section className="section">
            <SectionHeader
                title="Терминологический словарь"
                description="Общие тематические блоки для словаря."
            />
            <div className="grid grid--topics">
                {glossaryTopics.map((item) => (
                    <InfoCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Glossary;
