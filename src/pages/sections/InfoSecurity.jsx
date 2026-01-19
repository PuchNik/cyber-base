function InfoSecurity() {
  return (
    <section className="section">
      <div className="section__head">
        <h2>Информационная безопасность</h2>
        <p>
          Раздел посвящен принципам защиты данных: модели угроз, контроль доступа,
          управление рисками, логирование и реагирование. Здесь собраны ключевые
          термины и базовые подходы к построению защищенной инфраструктуры.
        </p>
      </div>
      <div className="grid grid--topics">
        <article className="card card--tall">
          <h3>Теория</h3>
          <p>Базовые принципы, модели и концепции информационной безопасности.</p>
        </article>
        <article className="card card--tall">
          <h3>Практика</h3>
          <p>Применение контролей, настройка защиты и мониторинг.</p>
        </article>
        <article className="card card--tall">
          <h3>Терминологический словарь</h3>
          <p>Ключевые термины и определения по теме ИБ.</p>
        </article>
      </div>
    </section>
  )
}

export default InfoSecurity
