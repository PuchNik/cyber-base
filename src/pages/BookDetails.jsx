import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { books } from "../features/library/data/books.js";
import { resolveAsset } from "../shared/lib/resolveAsset.js";

function BookDetails() {
    const { slug } = useParams();
    const book = useMemo(
        () => books.find((item) => item.slug === slug),
        [slug]
    );

    if (!book) {
        return (
            <section className="section">
                <SectionHeader
                    title="Книга не найдена"
                    description="Проверьте ссылку или вернитесь в библиотеку."
                />
                <Link className="btn btn--ghost" to="/library">
                    Вернуться к библиотеке
                </Link>
            </section>
        );
    }

    return (
        <section className="section">
            <SectionHeader title={book.title} description={book.author} />
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
                    {book.tag ? <span className="tag">{book.tag}</span> : null}
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
