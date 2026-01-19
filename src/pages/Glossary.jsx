const topics = [
  {
    title: "Нормативно-правовые акты",
    desc: "Федеральные законы, приказы, стандарты и требования регуляторов.",
  },
  {
    title: "Сетевые технологии",
    desc: "Протоколы, архитектура сетей, сегментация и безопасный трафик.",
  },
  {
    title: "Информационная безопасность",
    desc: "Термины, модели угроз, принципы защиты данных и доступов.",
  },
  {
    title: "Программирование",
    desc: "Языки, практики разработки и безопасный жизненный цикл.",
  },
]

function Glossary() {
  return (
    <section className="section">
      <div className="section__head">
        <h2>Терминологический словарь</h2>
        <p>Общие тематические блоки для словаря.</p>
      </div>
      <div className="grid grid--topics">
        {topics.map((item) => (
          <article key={item.title} className="card card--tall">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Glossary
