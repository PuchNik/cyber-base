import { Link } from 'react-router-dom'

const concepts = [
  {
    title: 'Конфиденциальность, целостность, доступность (CIA)',
    text: 'Базовая триада: защищаем данные от раскрытия, подмены и недоступности.',
  },
  {
    title: 'Угроза',
    text: 'Потенциальная причина инцидента: злоумышленник, ошибка, сбой, природный фактор.',
  },
  {
    title: 'Уязвимость',
    text: 'Слабость, которую можно использовать для нарушения безопасности.',
  },
  {
    title: 'Риск',
    text: 'Вероятность и ущерб от реализации угрозы через уязвимость.',
  },
  {
    title: 'Атакующая поверхность',
    text: 'Все точки входа: интерфейсы, сервисы, пользователи, поставщики.',
  },
  {
    title: 'Контроль и политика',
    text: 'Контроль — мера защиты, политика — правила и стандарты.',
  },
  {
    title: 'Аутентификация и авторизация',
    text: 'Проверка личности и проверка прав доступа.',
  },
  {
    title: 'Шифрование и хэширование',
    text: 'Шифрование скрывает содержимое, хэширование подтверждает целостность.',
  },
  {
    title: 'Минимальные привилегии',
    text: 'Доступы выдаются строго по необходимости и на минимальный срок.',
  },
  {
    title: 'Zero Trust',
    text: 'Никому не доверять по умолчанию, проверять каждое действие.',
  },
  {
    title: 'Логирование и мониторинг',
    text: 'События фиксируются и анализируются для раннего выявления атак.',
  },
  {
    title: 'Инцидент',
    text: 'Событие, которое нарушает безопасность или может привести к нарушению.',
  },
]

const learningPath = [
  {
    step: 'Старт',
    title: 'Понимание угроз и рисков',
    text: 'Освойте терминологию, влияние и модели атак.',
  },
  {
    step: 'Далее',
    title: 'Контроли и архитектура',
    text: 'Разберитесь в контролях, сегментации и принципах Zero Trust.',
  },
  {
    step: 'Практика',
    title: 'Безопасная разработка',
    text: 'OWASP, безопасные API и тестирование.',
  },
  {
    step: 'Завершение',
    title: 'Операции и реагирование',
    text: 'Логи, мониторинг, управление уязвимостями, инциденты.',
  },
]

function Home() {
  return (
    <>
      <header className="hero">
        <div className="hero__text">
          <span className="badge">Регуляторный хаб знаний</span>
          <h1>Cyber Base</h1>
          <p className="lead">
            Теория базовых понятий по информационной безопасности и библиотека
            знаний для старта и систематизации.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#concepts">
              Смотреть базовые понятия
            </a>
            <Link className="btn btn--ghost" to="/library">
              Перейти к библиотеке
            </Link>
          </div>
        </div>
        <div className="hero__panel">
          <div className="panel__title">Цели проекта</div>
          <ul className="panel__list">
            <li>Сформировать единый словарь терминов ИБ.</li>
            <li>Дать быстрый обзор ключевых областей.</li>
            <li>Показать путь обучения для новичков.</li>
            <li>Собрать базу тем для дальнейшего углубления.</li>
          </ul>
        </div>
      </header>

      <section id="concepts" className="section">
        <div className="section__head">
          <h2>Базовые понятия</h2>
          <p>Ключевые термины, без которых сложно обсуждать безопасность.</p>
        </div>
        <div className="grid grid--concepts">
          {concepts.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>Рекомендуемый путь</h2>
          <p>Простой маршрут, чтобы не потеряться в объеме знаний.</p>
        </div>
        <div className="grid grid--path">
          {learningPath.map((item) => (
            <div key={item.title} className="step">
              <div className="step__badge">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--compact">
        <div className="section__head">
          <h2>Глоссарий</h2>
          <p>Короткие определения для закрепления.</p>
        </div>
        <div className="glossary">
          <div className="glossary__item">
            <strong>Актив</strong> — данные, системы и процессы, которые нужно
            защищать.
          </div>
          <div className="glossary__item">
            <strong>Контроль</strong> — организационная или техническая мера,
            снижающая риск.
          </div>
          <div className="glossary__item">
            <strong>Эксплойт</strong> — способ использования уязвимости.
          </div>
          <div className="glossary__item">
            <strong>Латеральное перемещение</strong> — продвижение внутри сети
            после первичного доступа.
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
