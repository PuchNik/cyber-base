import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const books = [
  {
    slug: "zashita-dannyh-ot-avtorizacii-do-audita",
    title: "Защита данных. От авторизации до аудита",
    author: "Джейсон Андресс",
    coverUrl: "/library/covers/ИБ.png",
  },
  { slug: "book-2", title: "Название книги", author: "Имя автора" },
  { slug: "book-3", title: "Название книги", author: "Имя автора" },
  { slug: "book-4", title: "Название книги", author: "Имя автора" },
  { slug: "book-5", title: "Название книги", author: "Имя автора" },
  { slug: "book-6", title: "Название книги", author: "Имя автора" },
]

function Library() {
  const [query, setQuery] = useState("");

  const filteredBooks = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return books;
    }
    return books.filter((book) => {
      const title = book.title.toLowerCase();
      const author = book.author.toLowerCase();
      return title.includes(normalized) || author.includes(normalized);
    });
  }, [query]);

  return (
    <section className="section">
      <div className="section__head">
        <h2>Библиотека</h2>
        <p>Найдите книгу по названию или автору.</p>
      </div>

      <div className="library-search">
        <input
          className="library-search__input"
          type="text"
          placeholder="Введите название или автора"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="shelf">
        {filteredBooks.map((book) => (
          <Link key={book.slug} className="book-card" to={`/library/${book.slug}`}>
            <div className="book-card__cover" aria-hidden="true">
              {book.coverUrl ? (
                <img src={book.coverUrl} alt={`Обложка книги ${book.title}`} />
              ) : (
                <div className="book-card__placeholder">Обложка</div>
              )}
            </div>
            <div className="book-card__meta">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Library;
