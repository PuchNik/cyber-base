import { Link, useParams } from "react-router-dom";

const books = [
    {
        slug: "zashita-dannyh-ot-avtorizacii-do-audita",
        title: "Защита данных. От авторизации до аудита",
        author: "Джейсон Андресс",
        description:
            "Практическое руководство по защите данных: контроль доступа, аудит и устойчивость ключевых систем.",
        downloadUrl: "library/(2) ИБ (USA).pdf",
        coverUrl: "library/covers/ИБ.png",
    },
    { slug: "book-2", title: "Название книги", author: "Имя автора" },
    { slug: "book-3", title: "Название книги", author: "Имя автора" },
    { slug: "book-4", title: "Название книги", author: "Имя автора" },
    { slug: "book-5", title: "Название книги", author: "Имя автора" },
    { slug: "book-6", title: "Название книги", author: "Имя автора" },
];

const resolveAsset = (path) =>
    `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

function BookDetails() {
    const { slug } = useParams();
    const book = books.find((item) => item.slug === slug);

    if (!book) {
        return (
            <section className="section">
                <div className="section__head">
                    <h2>Книга не найдена</h2>
                    <p>Проверьте ссылку или вернитесь в библиотеку.</p>
                </div>
                <Link className="btn btn--ghost" to="/library">
                    Вернуться к библиотеке
                </Link>
            </section>
        );
    }

    return (
        <section className="section">
            <div className="section__head">
                <h2>{book.title}</h2>
                <p>{book.author}</p>
            </div>
            <div className="book-details">
                <div className="book-details__cover" aria-hidden="true">
                    {book.coverUrl ? (
                        <img
                            src={resolveAsset(book.coverUrl)}
                            alt={`Обложка книги ${book.title}`}
                        />
                    ) : null}
                </div>
                <div className="book-details__content">
                    <p>
                        {book.description ?? "Описание будет добавлено позже."}
                    </p>
                    <div className="book-details__actions">
                        {book.downloadUrl ? (
                            <a
                                className="btn btn--primary"
                                href={resolveAsset(book.downloadUrl)}
                                download
                            >
                                Скачать книгу
                            </a>
                        ) : (
                            <button
                                className="btn btn--primary"
                                type="button"
                                disabled
                            >
                                Скачать книгу
                            </button>
                        )}
                        <Link className="btn btn--ghost" to="/library">
                            Назад в библиотеку
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookDetails;
