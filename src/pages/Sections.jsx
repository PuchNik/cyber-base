import { Link } from "react-router-dom";

const sections = [
  {
    title: "Нормативно-правовые акты",
    desc: "Законы, стандарты и требования регуляторов в области ИБ.",
    to: "/sections/legal-acts",
  },
  {
    title: "Информационная безопасность",
    desc: "Базовые понятия, модели угроз и принципы защиты данных.",
    to: "/sections/info-security",
  },
  {
    title: "Компьютерные сети",
    desc: "Протоколы, архитектура сетей и безопасный обмен данными.",
    to: "/sections/networks",
  },
  {
    title: "Программирование",
    desc: "Практики разработки и безопасный жизненный цикл ПО.",
    to: "/sections/programming",
  },
];

function Sections() {
    return (
        <section className="section">
            <div className="section__head">
                <h2>Разделы</h2>
                <p>
                    Структура тем и направлений, сгруппированных для обучения.
                </p>
            </div>
      <div className="grid grid--topics">
        {sections.map((item) => (
          <Link key={item.title} className="card card--tall section-link" to={item.to}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Link>
        ))}
            </div>
        </section>
    );
}

export default Sections;
