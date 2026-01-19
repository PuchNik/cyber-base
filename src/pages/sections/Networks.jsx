function Networks() {
  return (
    <section className="section">
      <div className="section__head">
        <h2>Компьютерные сети</h2>
        <p>
          Раздел о сетевых технологиях: модели OSI/TCP-IP, протоколы,
          маршрутизация, сегментация и защита сетевого периметра.
        </p>
      </div>
      <div className="grid grid--topics">
        <article className="card card--tall">
          <h3>Теория</h3>
          <p>Модели, протоколы и базовые принципы построения сетей.</p>
        </article>
        <article className="card card--tall">
          <h3>Практика</h3>
          <p>Сегментация, VPN, настройка и анализ сетевого трафика.</p>
        </article>
        <article className="card card--tall">
          <h3>Терминологический словарь</h3>
          <p>Определения и ключевые термины по сетевым технологиям.</p>
        </article>
      </div>
    </section>
  )
}

export default Networks
