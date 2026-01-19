import { memo } from "react";
import { Link } from "react-router-dom";
import { resolveAsset } from "../../../shared/lib/resolveAsset.js";

function BookCard({ slug, title, author, coverUrl, tag }) {
    return (
        <Link className="book-card" to={`/library/${slug}`}>
            <div className="book-card__cover" aria-hidden="true">
                {coverUrl ? (
                    <img src={resolveAsset(coverUrl)} alt={`Обложка книги ${title}`} />
                ) : (
                    <div className="book-card__placeholder">Обложка</div>
                )}
            </div>
            <div className="book-card__meta">
                <h3>{title}</h3>
                <p>{author}</p>
                {tag ? <span className="tag">{tag}</span> : null}
            </div>
        </Link>
    );
}

export default memo(BookCard);
