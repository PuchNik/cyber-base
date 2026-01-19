import InfoCard from "../ui/InfoCard.jsx";
import LinkCard from "../ui/LinkCard.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";

function SectionPage({ title, description, cards = [] }) {
    return (
        <section className="section">
            <SectionHeader title={title} description={description} />
            <div className="grid grid--topics">
                {cards.map((card, index) => (
                    card.path ? (
                        <LinkCard
                            key={card.title}
                            to={card.path}
                            title={card.title}
                            description={card.description}
                            className={
                                index === cards.length - 1
                                    ? "card card--tall card--wide section-link"
                                    : "card card--tall section-link"
                            }
                        />
                    ) : (
                        <InfoCard
                            key={card.title}
                            title={card.title}
                            description={card.description}
                            className={
                                index === cards.length - 1
                                    ? "card card--tall card--wide"
                                    : "card card--tall"
                            }
                        />
                    )
                ))}
            </div>
        </section>
    );
}

export default SectionPage;
