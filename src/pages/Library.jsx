import { useCallback, useDeferredValue, useMemo, useState } from "react";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import BookCard from "../features/library/components/BookCard.jsx";
import LibrarySearch from "../features/library/components/LibrarySearch.jsx";
import { books } from "../features/library/data/books.js";

function Library() {
    const [query, setQuery] = useState("");
    const deferredQuery = useDeferredValue(query);

    const filteredBooks = useMemo(() => {
        const normalized = deferredQuery.trim().toLowerCase();
        if (!normalized) {
            return books;
        }
        return books.filter((book) => {
            const title = book.title.toLowerCase();
            const author = book.author.toLowerCase();
            return title.includes(normalized) || author.includes(normalized);
        });
    }, [deferredQuery]);

    const handleQueryChange = useCallback((event) => {
        setQuery(event.target.value);
    }, []);

    return (
        <section className="section">
            <SectionHeader
                title="Библиотека"
                description="Найдите книгу по названию или автору."
            />

            <LibrarySearch
                value={query}
                onChange={handleQueryChange}
                placeholder="Введите название или автора"
            />

            <div className="shelf">
                {filteredBooks.map((book) => (
                    <BookCard key={book.slug} {...book} />
                ))}
            </div>
        </section>
    );
}

export default Library;
