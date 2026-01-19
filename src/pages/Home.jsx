import { Link } from "react-router-dom";

const topics = [
  {
    title: "Информационная безопасность",
    desc: "Принципы защиты данных, модели угроз, контроль доступа и реагирование.",
    to: "/sections/info-security",
  },
  {
    title: "Нормативно-правовые акты",
    desc: "Законы, стандарты и требования регуляторов в области ИБ.",
    to: "/sections/legal-acts",
  },
  {
    title: "Компьютерные сети",
    desc: "OSI/TCP-IP, DNS/HTTPS, сегментация, VPN и защита периметра.",
    to: "/sections/networks",
  },
];

function Home() {
  return (
    <>
      <section className="section">
        <div className="section__head">
          <h2>О проекте</h2>
          <p>
            Cyber Base — образовательная платформа по информационной безопасности,
            где собраны базовые понятия, библиотека материалов и структурированные
            разделы для изучения. Проект создан, чтобы помочь новичкам и
            специалистам быстро находить качественные знания и ориентироваться в
            ключевых темах Информационной безопасности, Компьютерных технологиях и
            Правовой сфере регулирования законов в области информационной безопасности.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid grid--vertical">
          {topics.map((item) => (
            <Link key={item.title} className="card section-link" to={item.to}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
