const sections = [
  {
    title: "Нормативно-правовые акты",
    desc: "Законы, стандарты и требования регуляторов в области ИБ.",
  },
  {
    title: "Информационная безопасность",
    desc: "Базовые понятия, модели угроз и принципы защиты данных.",
  },
  {
    title: "Компьютерные сети",
    desc: "Протоколы, архитектура сетей и безопасный обмен данными.",
  },
  {
    title: "Кибербезопасность",
    desc: "Атаки, защита инфраструктуры, мониторинг и реагирование.",
  },
];

function Sections() {
  return (
    <section className="section">
      <div className="section__head">
        <h2>Разделы</h2>
        <p>Структура тем и направлений, сгруппированных для обучения.</p>
      </div>
      <div className="grid grid--concepts">
        {sections.map((item) => (
          <article key={item.title} className="card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Sections
