import LinkCard from "../components/ui/LinkCard.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { homeTopics } from "../data/homeTopics.js";

function Home() {
  return (
        <>
            <section className="section">
                <SectionHeader
                    title="О проекте"
                    description="Cyber Base — образовательная платформа по информационной безопасности, где собраны базовые понятия, библиотека материалов и структурированные разделы для изучения. Проект создан, чтобы помочь новичкам и специалистам быстро находить качественные знания и ориентироваться в ключевых темах Информационной безопасности, Компьютерных технологиях и Правовой сфере регулирования законов в области информационной безопасности."
                />
            </section>

            <section className="section">
                <div className="grid grid--vertical">
                    {homeTopics.map((item) => (
                        <LinkCard
                            key={item.title}
                            className="card section-link"
                            to={item.path}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Home;
