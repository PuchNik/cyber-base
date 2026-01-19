function LegalActs() {
  return (
    <section className="section">
      <div className="section__head">
        <h2>Нормативно-правовые акты</h2>
        <p>
          Раздел включает обзор законов, приказов и стандартов, регулирующих
          защиту информации. Здесь будет систематизация требований и связь между
          документами и практиками ИБ.
        </p>
      </div>
      <div className="grid grid--topics">
        <article className="card card--tall">
          <h3>Теория</h3>
          <p>Обзор нормативной базы, структуры документов и терминов.</p>
        </article>
        <article className="card card--tall">
          <h3>Практика</h3>
          <p>Как применять требования на практике и готовить соответствие.</p>
        </article>
        <article className="card card--tall">
          <h3>Терминологический словарь</h3>
          <p>Ключевые определения и понятия в регуляторной сфере.</p>
        </article>
      </div>
    </section>
  )
}

export default LegalActs
