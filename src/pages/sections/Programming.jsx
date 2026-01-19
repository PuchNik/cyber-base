function Programming() {
  return (
    <section className="section">
      <div className="section__head">
        <h2>Программирование</h2>
        <p>
          Раздел про основы разработки, практики безопасного кода и типовые
          ошибки, влияющие на безопасность приложений.
        </p>
      </div>
      <div className="grid grid--topics">
        <article className="card card--tall">
          <h3>Теория</h3>
          <p>Базовые концепции разработки и принципы безопасного кода.</p>
        </article>
        <article className="card card--tall">
          <h3>Практика</h3>
          <p>Паттерны, чек-листы и упражнения по безопасной разработке.</p>
        </article>
        <article className="card card--tall">
          <h3>Терминологический словарь</h3>
          <p>Определения и ключевые термины по разработке ПО.</p>
        </article>
      </div>
    </section>
  )
}

export default Programming
